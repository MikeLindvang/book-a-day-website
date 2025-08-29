import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    index: true
  },
  type: {
    type: String,
    required: true,
    enum: ['product', 'style', 'customer', 'offer', 'proof', 'objections', 'faq']
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
});

// Create compound index for efficient queries
DocumentSchema.index({ projectId: 1, type: 1 });

export default mongoose.models.Document || mongoose.model('Document', DocumentSchema);