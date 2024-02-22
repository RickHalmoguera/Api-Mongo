import { Document } from "mongoose"
import { User, UserModel } from "../models/UserModel"



export const getUsers = async() :Promise<UserModel[]> => {
   
    return await User.find()
}
    
export const getUsersId = async(id: string) :Promise<Document<UserModel> | null> => {
    return await User.findById(id)
}

export const postUser = async(userData: UserModel): Promise<Document<UserModel>>  => {
    const user = new User(userData)
    const document: Document<UserModel> = (await user.save()) as any
    return document

}
export const patchUser = async(id: string, userData: any): Promise<Document<UserModel> | null> => {
    console.log(id)
    return await User.findByIdAndUpdate(id, userData)
}

export const deleteUser = async(id:string): Promise<Document<UserModel> | null>  => {
    return await User.findByIdAndDelete(id).lean()
}