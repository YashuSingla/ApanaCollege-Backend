import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    data: {
      type: Object,
      default: {}
    }
  },
  { timestamps: true }
);

export const Progress = mongoose.model('Progress', progressSchema);
