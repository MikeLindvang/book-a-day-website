# 🤖 AI Sales Copy Generator

A lightweight, paste-in-docs AI sales copy generator integrated into your Next.js sales page builder.

## ✨ Features

- **📄 Document Management**: Paste text into categorized documents (Product, Customer, Style, Optional)
- **🧠 AI Insights**: Extract key selling points and positioning from your documents
- **🚀 Copy Generation**: Generate sales copy using templates, tone, and length preferences
- **📝 Live Editing**: Edit generated insights and copy sections before use
- **🔗 Seamless Integration**: Works directly within your existing page builder

## 🏗️ Architecture

### Core Components

1. **Mongoose Models**
   - `Document.js` - Store pasted content with type categorization
   - `InsightSheet.js` - Cache AI-generated insights with editing capabilities

2. **API Routes**
   - `POST /api/documents` - CRUD operations for documents
   - `POST /api/insights/build` - Generate insights from documents
   - `POST /api/generate/draft` - Create sales copy from insights + template

3. **UI Components**
   - `DocumentsPane` - Document management with CRUD operations
   - `InsightsPane` - View/edit AI insights with category organization
   - `GenerateDraftModal` - Template/tone/length selection and generation
   - `AICopyGenerator` - Main coordinator component

4. **OpenAI Integration**
   - `openaiClient.js` - Minimal wrapper with strict JSON prompts
   - Uses `gpt-4o-mini` for cost-effective generation
   - Handles response parsing and error recovery

## 🚀 How to Use

### 1. Add Documents
- Click "AI Copy Generator" in the page builder
- Add documents with your product info, customer profiles, and style guidelines
- Categorize as Product, Customer, Style, or Optional

### 2. Build Insights
- Click "Build Insights" to analyze your documents
- AI extracts key insights in categories: Product, Audience, Messaging, Positioning, Objections, Benefits, Social Proof, Urgency
- Edit insights as needed for accuracy

### 3. Generate Copy
- Click "Generate Sales Copy"
- Choose template framework (PAS, AIDA, VSL, etc.)
- Select tone (Professional, Friendly, Urgent, etc.)
- Choose length (Short, Medium, Long)
- Add custom instructions if needed
- Review and edit generated sections
- Import directly into your page builder

## 🔧 Technical Details

### Document Types
- **Product**: Features, benefits, pricing, specifications
- **Customer**: Target audience, demographics, pain points, desires
- **Style**: Brand voice, tone, messaging guidelines, examples
- **Optional**: Additional context, research, testimonials, case studies

### AI Processing
- Insights are generated once and cached for efficiency
- Users can edit insights to improve copy generation
- Each generation creates new content based on current insights
- Processing typically takes 2-5 seconds per operation

### Template Integration
- Works with existing template system
- Generates blocks compatible with page builder
- Maintains section structure and metadata
- Supports all block types (headings, paragraphs, lists, buttons, testimonials)

## 💰 Cost Estimates

Using GPT-4o-mini for cost efficiency:

- **Insight Generation**: ~$0.001-0.005 per document set
- **Copy Generation**: ~$0.003-0.010 per sales page
- **Monthly Usage** (50 pages): ~$0.50-2.00

## 🛠️ Configuration

### Environment Variables
```bash
OPENAI_API_KEY=your_openai_api_key_here
MONGODB_URI=your_mongodb_connection_string
```

### Dependencies
All dependencies are already included in your existing project:
- OpenAI SDK
- Mongoose for data models
- Next.js App Router API routes

## 📝 Workflow Example

1. **Document Setup**
   ```
   Product Doc: "SaaS project management tool, $29/month, 
   features include task tracking, team collaboration..."
   
   Customer Doc: "Small business owners, 5-50 employees, 
   struggling with disorganized projects..."
   
   Style Doc: "Professional but approachable tone, 
   emphasize time savings and productivity..."
   ```

2. **AI Insights Generated**
   - Product: "All-in-one project management solution"
   - Audience: "Time-pressed small business owners"
   - Benefits: "Save 10+ hours per week on project coordination"
   - Urgency: "Limited-time pricing for early adopters"

3. **Copy Generation**
   - Template: Problem-Agitate-Solution (PAS)
   - Tone: Professional
   - Length: Medium
   - Result: Complete sales page with headlines, body copy, CTAs

## 🔍 Monitoring

The system logs usage for cost tracking:
- Processing times
- Token usage
- API costs
- Error rates

Check browser console for detailed metrics during development.

## 🧪 API Testing

### Per-section Generation
```bash
curl -X POST http://localhost:3000/api/generate/section \
 -H "content-type: application/json" \
 -d '{"projectId":"demo","templateId":"<TID>","sectionKey":"hook","options":{"tone":"authoritative","length":"medium"}}'
```

### Whole Draft Generation
```bash
curl -X POST http://localhost:3000/api/generate/draft \
 -H "content-type: application/json" \
 -d '{"projectId":"demo","templateId":"<TID>","options":{"tone":"authoritative","length":"medium"}}'
```

Replace `<TID>` with an actual template ID from your system.

## 🚧 Future Enhancements

- Multiple insight sheets per user
- Template customization
- A/B testing for generated copy
- Integration with analytics
- Bulk document import
- Custom AI prompts
