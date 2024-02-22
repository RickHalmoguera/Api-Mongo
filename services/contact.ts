import { Document } from "mongoose"
import { ContactModel,Contact } from "../models/ContactModel"


export const getContacts = async() :Promise<ContactModel[]> => {
    return await Contact.find()
}
    
export const getContactsId = async(id: string) :Promise<Document<ContactModel> | null> => {
    return await Contact.findById(id)
}

export const postContact = async(contactData: ContactModel): Promise<Document<ContactModel>>  => {
    const contact = new Contact(contactData)
    const document: Document<ContactModel> = (await contact.save()) as any
    return document

}
export const patchContact = async(id: string, contactData: any): Promise<Document<ContactModel> | null> => {
    return await Contact.findByIdAndUpdate(id, contactData)
}

export const deleteContact = async(id:string): Promise<ContactModel>  => {
    return await Contact.findByIdAndDelete(id).lean()
}