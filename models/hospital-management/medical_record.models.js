import mongoose, { mongo } from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    report: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
