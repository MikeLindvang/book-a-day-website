import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Document from '@/lib/models/Document';
import InsightSheet from '@/lib/models/InsightSheet';
import { chatJSON } from '@/lib/openaiClient';
import { trimTo } from '@/lib/text';

export async function POST(request) {
  try {
    const { projectId } = await request.json();

    if (!projectId) {
      return NextResponse.json(
        { ok: false, error: 'projectId is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Load all documents for the project
    const documents = await Document.find({ projectId }).lean();

    if (documents.length === 0) {
      return NextResponse.json(
        { ok: false, error: 'No documents found for this project' },
        { status: 404 }
      );
    }

    // Concatenate content by type
    const contentByType = {
      product: '',
      style: '',
      customer: '',
      objections: '',
      offer: '',
      proof: ''
    };

    documents.forEach(doc => {
      if (contentByType.hasOwnProperty(doc.type)) {
        contentByType[doc.type] += doc.content + '\n\n';
      }
    });

    // Initialize insight results
    let productInsights = { productFacts: [], benefits: [], differentiators: [] };
    let voiceInsights = { voiceRules: [] };
    let marketInsights = { audiencePain: [], audienceDreams: [], objections: [], offerStack: [], proofAssets: [] };

    // PROMPT 1: Product digest
    if (contentByType.product.trim()) {
      const productText = trimTo(contentByType.product.trim(), 12000);
      
      try {
        const productResult = await chatJSON([
          {
            role: 'system',
            content: 'You are a concise product copy analyst. Output compact JSON.'
          },
          {
            role: 'user',
            content: `INPUT_PRODUCT:
<<<
${productText}
>>>

OUTPUT STRICT JSON ONLY:
{"productFacts":[],"benefits":[],"differentiators":[]}`
          }
        ]);

        if (productResult.productFacts && productResult.benefits && productResult.differentiators) {
          productInsights = productResult;
        }
      } catch (error) {
        console.error('Error analyzing product content:', error);
      }
    }

    // PROMPT 2: Voice rules
    if (contentByType.style.trim()) {
      const styleText = trimTo(contentByType.style.trim(), 8000);
      
      try {
        const voiceResult = await chatJSON([
          {
            role: 'system',
            content: 'You are a brand voice extractor. Output strict JSON.'
          },
          {
            role: 'user',
            content: `INPUT_STYLE:
<<<
${styleText}
>>>
OUTPUT:
{"voiceRules":["Tone:","Sentence length:","Vocabulary:","Formality:","Person:","Do:","Don't:"]}`
          }
        ]);

        if (voiceResult.voiceRules && Array.isArray(voiceResult.voiceRules)) {
          voiceInsights = voiceResult;
        }
      } catch (error) {
        console.error('Error analyzing style content:', error);
      }
    }

    // PROMPT 3: Audience/offer/proof/objections digest
    const customerText = trimTo(contentByType.customer.trim(), 12000);
    const objectionsText = trimTo(contentByType.objections.trim(), 4000);
    const offerText = trimTo(contentByType.offer.trim(), 4000);
    const proofText = trimTo(contentByType.proof.trim(), 4000);

    if (customerText || objectionsText || offerText || proofText) {
      try {
        const marketResult = await chatJSON([
          {
            role: 'system',
            content: 'You are a customer research summarizer. Output strict JSON.'
          },
          {
            role: 'user',
            content: `CUSTOMER_DOC:
<<<
${customerText}
>>>
OBJECTIONS_DOC:
<<<
${objectionsText}
>>>
OFFER_DOC:
<<<
${offerText}
>>>
PROOF_DOC:
<<<
${proofText}
>>>
OUTPUT:
{"audiencePain":[],"audienceDreams":[],"objections":[],"offerStack":[],"proofAssets":[]}`
          }
        ]);

        if (marketResult.audiencePain && marketResult.audienceDreams && 
            marketResult.objections && marketResult.offerStack && 
            marketResult.proofAssets) {
          marketInsights = marketResult;
        }
      } catch (error) {
        console.error('Error analyzing market content:', error);
      }
    }

    // Merge all insights
    const mergedInsights = {
      // Product insights
      productFacts: productInsights.productFacts || [],
      benefits: productInsights.benefits || [],
      differentiators: productInsights.differentiators || [],
      
      // Voice insights
      voiceRules: voiceInsights.voiceRules || [],
      
      // Market insights
      audiencePain: marketInsights.audiencePain || [],
      audienceDreams: marketInsights.audienceDreams || [],
      objections: marketInsights.objections || [],
      offerStack: marketInsights.offerStack || [],
      proofAssets: marketInsights.proofAssets || []
    };

    // Upsert InsightSheet
    const sheet = await InsightSheet.findOneAndUpdate(
      { projectId },
      {
        projectId,
        ...mergedInsights,
        updatedAt: new Date()
      },
      { 
        upsert: true, 
        new: true,
        setDefaultsOnInsert: true
      }
    );

    return NextResponse.json({
      ok: true,
      sheet
    });

  } catch (error) {
    console.error('Error building insights:', error);
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Failed to build insights',
        details: error.message 
      },
      { status: 500 }
    );
  }
}