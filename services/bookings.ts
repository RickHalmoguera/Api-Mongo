import { Document } from "mongoose"
import { Booking, BookingModel } from "../models/BookingModel"
import { Db } from "mongodb"
import { Room} from "../models/RoomModel"


export const getBookings = async() :Promise<BookingModel[]> => {
    return await Booking.find().populate(["room"])
}
    
export const getBookingsId = async(id: string) :Promise<Document<BookingModel> | null> => {
    return await Booking.findById(id).populate(["room"])
}

export const postBooking = async(bookingData: BookingModel): Promise<Document<BookingModel>>  => {
    const booking = new Booking(bookingData)
    const document: Document<BookingModel> = (await booking.save()) as any
    return document

}
export const patchBooking = async(id: string, bookingData: any): Promise<Document<BookingModel> | null> => {
    return await Booking.findByIdAndUpdate(id, bookingData)
}

export const deleteBooking = async(id:string): Promise<Document<BookingModel> | null>  => {
    return await Booking.findByIdAndDelete(id).lean()
}