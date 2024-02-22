import { Document } from "mongoose"
import { RoomModel,Room } from "../models/RoomModel"


export const getRooms = async() :Promise<RoomModel[]> => {
    return await Room.find()
}
    
export const getRoomsId = async(id: string) :Promise<Document<RoomModel> | null> => {
    return await Room.findById(id)
}

export const postRoom = async(roomData: RoomModel): Promise<Document<RoomModel>>  => {
    const room = new Room(roomData)
    const document: Document<RoomModel> = (await room.save()) as any
    return document

}
export const patchRoom = async(id: string, roomData: any): Promise<Document<RoomModel> | null> => {
    return await Room.findByIdAndUpdate(id, roomData)
}

export const deleteRoom = async(id:string): Promise<RoomModel>  => {
    return await Room.findByIdAndDelete(id).lean()
}