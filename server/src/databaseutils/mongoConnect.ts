import mongoose from 'mongoose';
type DBInput = {
  db: string;
};

const mongoStart = async (db: string) => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((err) => {
        console.error(`Error connecting to database :`, err);
        return process.exit(1);
      });
  } catch (err) {
    console.log(err);
  }
};

export default mongoStart;
