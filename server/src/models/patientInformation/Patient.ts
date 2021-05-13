import mongoose, { Schema, Document } from 'mongoose';

export interface IPatient extends Document {
  PATIENT_ID: String;
  PATIENT_FIRST_NAME: String;
  PATIENT_LAST_NAME: String;
  PATIENT_MIDDLE_NAME: String;
  PATIENT_SUFFIX: String;
  PATIENT_DOB: Date;
  PATIENT_HEIGHT: Number;
  CREATED: Date;
  UPDATED: Date;
}

const PatientSchema: Schema = new Schema({
  PATIENT_ID: {
    type: String,
    required: true,
    unique: true,
  },
  PATIENT_FIRST_NAME: {
    type: String,
    required: true,
  },
  PATIENT_LAST_NAME: {
    type: String,
    required: true,
  },
  PATIENT_MIDDLE_NAME: {
    type: String,
    required: true,
  },
  PATIENT_SUFFIX: {
    type: String,
    required: true,
  },
  PATIENT_DOB: {
    type: Date,
    required: true,
  },
  PATIENT_HEIGHT: {
    type: Number,
    required: true,
  },
  CREATED: {
    type: Date,
    required: false,
  },
  UPDATED: {
    type: Date,
    required: false,
  },
});

export default mongoose.model<IPatient>('User', PatientSchema);
