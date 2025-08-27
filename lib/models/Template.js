import mongoose from 'mongoose';

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  framework: {
    type: String,
    required: true,
    enum: ['PAS', 'BAB', 'AIDA', 'Star-Story-Solution', 'VSL', 'Webinar', 'Product Launch', 'Lead Magnet', 'Custom']
  },
  category: {
    type: String,
    required: true,
    enum: ['SaaS', 'E-commerce', 'Coaching', 'Course', 'Agency', 'Consulting', 'Physical Product', 'Digital Product', 'Lead Generation', 'Event', 'Other']
  },
  industry: {
    type: String,
    trim: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Intermediate'
  },
  estimatedLength: {
    type: String,
    enum: ['Short', 'Medium', 'Long', 'Extra Long'],
    default: 'Medium'
  },
  bestFor: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  
  // Template Structure
  sections: [{
    name: String,
    title: String,
    description: String,
    blocks: [{
      type: String,
      data: mongoose.Schema.Types.Mixed,
      metadata: mongoose.Schema.Types.Mixed
    }]
  }],
  
  // Visual Variations
  variations: [{
    name: String,
    description: String,
    colorScheme: {
      primary: String,
      secondary: String,
      accent: String,
      background: String,
      text: String
    },
    typography: {
      headingFont: String,
      bodyFont: String,
      headingSize: String,
      bodySize: String
    },
    layout: {
      containerWidth: String,
      spacing: String,
      borderRadius: String
    }
  }],
  
  // Template Metadata
  createdBy: {
    type: String,
    default: 'system'
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  isBuiltIn: {
    type: Boolean,
    default: false
  },
  usageCount: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  
  // Template Preview
  previewImage: String,
  thumbnailImage: String,
  
  // Performance Data
  averageConversionRate: Number,
  totalPages: {
    type: Number,
    default: 0
  },
  
  // Version Control
  version: {
    type: String,
    default: '1.0.0'
  },
  changelog: [{
    version: String,
    changes: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Indexes for better query performance
TemplateSchema.index({ category: 1, framework: 1 });
TemplateSchema.index({ tags: 1 });
TemplateSchema.index({ isPublic: 1, isBuiltIn: 1 });
TemplateSchema.index({ usageCount: -1 });
TemplateSchema.index({ rating: -1 });

export default mongoose.models.Template || mongoose.model('Template', TemplateSchema);
