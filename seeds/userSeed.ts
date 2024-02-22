import mongoose from "mongoose";

import { faker } from '@faker-js/faker/locale/es';
import { User } from "../models/UserModel";
import { connectToDb } from "../connectToDb";

export async function seedDB() {
    try {
        await connectToDb()
        console.log("Connected correctly to server");

        await User.collection.drop();
        console.log("Users deleted successfully");

        for (let i = 0; i < 15; i++) {
            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName();
            const email = faker.internet.email({firstName: firstName, lastName: lastName}); 
            const job= faker.helpers.arrayElement(['Manager', 'Recepcionist', 'Room Service'])

            const document = new User({
                photo: faker.internet.avatar(),
                name: firstName,
                surname: lastName,
                job: job,
                email: email,
                phone: faker.phone.number().replace(/\D/g, ''),
                startDate: faker.date.past({ years: 1, refDate: '2024-01-02T00:00:00.000Z' }).toISOString().substring(0, 10),
                descriptionJob:faker.lorem.sentence(5),
                is_active: faker.datatype.boolean(),
                password: faker.internet.password({memorable: true }),
            })
            await document.save();
          }




    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB()
