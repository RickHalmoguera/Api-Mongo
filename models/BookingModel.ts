import { Room,RoomModel } from "./RoomModel";
import mongoose, { Schema } from "mongoose";

export interface BookingModel {
  name: string;
  orderDate: Date;
  dateIn: Date;
  dateOut: string;
  room: RoomModel;
  specialRequest: string;
  status: string;
}


const bookingSchema = new Schema({
  name: {type: String, required: true},
  orderDate: { type: Date, default: Date.now },
  dateIn: {type: Date, required: true},
  dateOut: {type: Date, required: true},
  room: {
    type: Schema.Types.ObjectId,
    ref: Room,
    required: true,

  },
  specialRequest: {type: String},
  status: {type: String, required: true},
})

export const Booking = mongoose.model<BookingModel>("Booking", bookingSchema);