import mongoose, {Schema } from "mongoose";

export interface UserModel {
  photo: string;
  fullName: string;
  job: string;
  email: string;
  phone: string;
  startDate: string;
  descriptionJob: string;
  status: string;
  password: string;
}

const userSchema = new Schema({
  photo: {type: String, required: true},
  fullName: {type: String, required: true},
  job: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: {type: Number, required: true},
  startDate: {type: Date, default: Date.now, required: true},
  descriptionJob: {type: String, required: true},
  status: {type: String, required: true},
  password: {type: String, required: true},
})

export const User = mongoose.model<UserModel>("users", userSchema);