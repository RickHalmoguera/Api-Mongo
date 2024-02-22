import mongoose from "mongoose";
import { Booking } from "../models/BookingModel";
import { connectToDb } from "../connectToDb";
import { faker } from '@faker-js/faker/locale/es';
import { Room } from "../models/RoomModel";


async function seedDB() {
    try {
        await connectToDb()
        console.log("Connected correctly to server");

        const rooms = await Room.find()

        if(!rooms.length) {
            console.error("No rooms found")
            return
        }

        await Booking.collection.drop();
        console.log("Bookings deleted successfully");


        for (let i = 0; i < 15; i++) {
            const fullName = faker.person.fullName();
            const dateIn =  faker.date.past({ years: 1, refDate: '2024-01-31T00:00:00.000Z' })
            const dateOut = faker.date.soon({ days: 5, refDate: dateIn })

            const document = new Booking({
                name: fullName,
                orderDate: Date.now(),
                phone: faker.phone.number().replace(/\D/g, ''),
                dateIn: dateIn,
                dateOut: dateOut,
                room: rooms[Math.floor(Math.random() * rooms.length-1)],
                specialRequest: faker.lorem.paragraph(2),
                status: "Check In"

            })

            await document.save();
          }


    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB();