import mongoose from 'mongoose';

const InsightSheetSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    index: true
  },
  productFacts: {
    type: [String],
    default: []
  },
  benefits: {
    type: [String],
    default: []
  },
  differentiators: {
    type: [String],
    default: []
  },
  voiceRules: {
    type: [String],
    default: []
  },
  audiencePain: {
    type: [String],
    default: []
  },
  audienceDreams: {
    type: [String],
    default: []
  },
  objections: {
    type: [String],
    default: []
  },
  offerStack: {
    type: [String],
    default: []
  },
  proofAssets: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

export default mongoose.models.InsightSheet || mongoose.model('InsightSheet', InsightSheetSchema);