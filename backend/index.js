import express from 'express';
import connectDB from './db.js'
import User from './models/Users.js';
import Url from './models/Urls.js';
import mongoose from 'mongoose';
import crypto from "crypto";
import seedDB from "./seed.js";


connectDB()
seedDB()

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/url/:url', async (req, res) => {
    console.log(req.params.url);
    res.send('It\'s running!', req.query.url);
})
app.post('/url', async (req, res) => {
    console.log(req.body );
    const { userId, url } = req.body;
    const rec = await Url.insertOne({
        userId: userId,
        url: url,
        shortened_url: crypto.createHash("sha256").update(url+userId, "utf8").digest("hex").slice(0,10)
    })
    res.status(201).json({rec});
})
app.post('/user', async (req, res) => {
    console.log(req.body);
    const user = await User.insertOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.firstName + req.body.lastName + '_' + Math.floor(Date.now()/1000),
        email: req.body.email,
        country: req.body.country
    });
    res.status(201).json({user});
})
app.get('/allusers', async (req, res) => {
    const query = {}
    if (req.body.lastId && mongoose.Types.ObjectId.isValid(req.body.lastId)){
        query = { _id: { $gt: new mongoose.Types.ObjectId(req.body.lastId) } };
    }
    const user = await User.find(query).sort({_id:1}).limit(req.body.limit ?? 1)
    res.status(200).json({user});
})
app.get('/:userId', (req, res) => {
    console.log( req.params.userId );
    res.send('It\'s running!!!', req.params.userId);
})
let server = app.listen(7000, ()=>{console.log("Ready on port 7000")});