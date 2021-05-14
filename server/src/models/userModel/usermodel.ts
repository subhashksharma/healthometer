import mongoose from "mongoose";
import { Password } from "./password";

interface UserAtts {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserDataModel extends mongoose.Model<UserDoc> {
  buildUser(atts: UserAtts): UserDoc;
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: "true",
    },
    lastName: {
      type: String,
      require: "true",
    },

    email: {
      type: String,
      required: "true",
    },
    password: {
      type: String,
      require: "true",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.password;
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    console.log("Is Modified data");
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done(null);
});
userSchema.statics.buildUser = (user: UserAtts) => {
  return new UserModel(user);
};

const UserModel = mongoose.model<UserDoc, UserDataModel>("User", userSchema);

//one way of doing
// const buildUser = (user: UserAtts) => {
//   new UserModel(user);
// };

export { UserModel };
