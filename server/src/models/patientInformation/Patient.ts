import mongoose, { Schema, Document, Model } from 'mongoose';

const PatientSchema: Schema = new Schema(
  {
    patientFirstName: {
      type: String,
      required: true,
    },
    patientLastName: {
      type: String,
      required: true,
    },
    patientMiddleName: {
      type: String,
      required: true,
    },
    patientSuffix: {
      type: String,
      required: true,
    },
    patientDob: {
      type: String,
      required: true,
    },
    patientHeight: {
      type: Number,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },

    updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export interface IPatientDto {
  patientFirstName: String;
  patientLastName: String;
  patientMiddleName: String;
  patientSuffix: String;
  patientDob: String;
  patientHeight: Number;
  created: Date;
  updated: Date;
}

export interface IPatientDocument extends Document {
  patientFirstName: String;
  patientLastName: String;
  patientMiddleName: String;
  patientSuffix: String;
  patientDob: String;
  patientHeight: Number;
  created: Date;
  updated: Date;
}

export interface PatientModel extends Model<IPatientDocument> {
  build(attrs: IPatientDto): IPatientDocument 
}

PatientSchema.statics.build = (attrs: IPatientDto) => {
  return new Patient(attrs);
};

const Patient = mongoose.model<IPatientDocument, PatientModel>(
  'Patient',
  PatientSchema
);
export {Patient }
