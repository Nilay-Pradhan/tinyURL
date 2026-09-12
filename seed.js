import connectDB from './db.js'
import User from './models/Users.js';
import Url from './models/Urls.js';
import { faker } from '@faker-js/faker';
import crypto from "crypto";

const sleep = ms => new Promise((res) => setTimeout(res, ms));

const seedDB = async () => {
    for (let i = 0; i < 3; i++) {
        await sleep(5000)
        console.log("HERE after promise");
        // Promise.resolve(() => setTimeout(() => {}, 3 * 1000)).then(data => console.log(data()))
        for (let j = 0; j < 2; j++) {
            // let user = new User({
            //     firstName: faker.person.firstName(),
            //     lastName: faker.person.lastName(),
            //     userName: faker.internet.username(),
            //     country: faker.location.country(),
            //     email: faker.internet.email(),
            // });
            // let new_user = await user.save();
            // const rec = await Url.insertOne({
            //     userId: new_user._id,
            //     url: faker.image.url(),
            //     shortened_url: crypto.createHash("sha256").update(faker.image.url()+new_user._id, "utf8").digest("hex").slice(0,10)
            // })
            // console.log(`url ${rec} is saved`)
        }
    }
}



export default seedDB;