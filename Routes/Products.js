import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const router = express.Router()
import ProductModel from '../DataBase/dataBase.js'
import { stringToHash, varifyHash } from "bcrypt-inzi"
import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET || "topsecret";
import path from 'path';
import express from 'express';
import multer from 'multer';
import bucket from '../Bucket/Firebase.js';
import fs from 'fs'
const storageConfig = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {

        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storageConfig })
router.use(cors({
    origin: true
}));
var uploadMiddleware = multer({ storage: storageConfig })
router.post('/product', upload.any() ,  (req, res) => {
    const body = req.body;

    console.log("Body"  ,     body)
    if ( 
        !body.name
        || !body.price
        || !body.description
        
    ) {
        res.status(400).send({
            message: "required parameters missing",
        });
        return;
    }

    // console.log(body.name)
    // console.log(body.price)
    // console.log(body.description)
    // console.log(body.image)


    // ProductModel.create({
    //     name: body.name,
    //     price: body.price,
    //     description: body.description,
    //     image  : body.image
    // },
    //     (err, saved) => {
    //         if (!err) {
    //             console.log(saved);

    //             res.send({
    //                 message: "product added successfully"
    //             });
    //         } else {
    //             res.status(500).send({
    //                 message: "server error"
    //             })
    //         }
    //     })
})




export default router