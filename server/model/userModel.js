import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("user", UserSchema);
