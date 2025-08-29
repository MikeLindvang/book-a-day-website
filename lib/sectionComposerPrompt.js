export function buildSectionPrompt({ template, section, sheet, options }) {
  return {
    system: `You are a senior direct-response copywriter. Use only the given insights. Apply voiceRules strictly. Never invent facts. Output strict JSON with no commentary.`,
    user:
`TEMPLATE_SECTION:
${JSON.stringify({
  framework: template.framework,
  section: section // single section object: { key, label?, purpose?, blocks? }
})}

INSIGHTS:
${JSON.stringify({
  productFacts: sheet.productFacts || [],
  benefits: sheet.benefits || [],
  differentiators: sheet.differentiators || [],
  voiceRules: sheet.voiceRules || [],
  audiencePain: sheet.audiencePain || [],
  audienceDreams: sheet.audienceDreams || [],
  objections: sheet.objections || [],
  offerStack: sheet.offerStack || [],
  proofAssets: sheet.proofAssets || [],
})}

OPTIONS:
${JSON.stringify(options || { tone: "default", length: "medium" })}

RULES:
- Produce content ONLY for section.key = "${section.key || section.name}".
- Honor blocks if provided:
  * heading → one <h1>/<h2> with a strong hook
  * paragraph → 1–3 concise <p>
  * list → <ul><li>…</li></ul> (3–7 items)
  * testimonial → <blockquote>…</blockquote> (name/title if present in insights)
  * cta → one line with clear action + risk reversal if present
  * html → safe minimal HTML only
- If info is missing, write less rather than invent.
- Apply voiceRules (tone, sentence length, vocabulary).
- Output ONLY:
{"key":"","html":"","headlineAlts":["",""]}`
  };
}
