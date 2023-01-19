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
import fs from 'fs';

const storageConfig = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {

        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})
var uploadMiddleware = multer({ storage: storageConfig })
router.post('/product', uploadMiddleware.any(), (req, res) => {
    try {

        const body = req.body;

        if ( // validation
            !body.Name
        ) {
            res.status(400).send({
                message: "required parameters missing",
            });
            return;
        }

        console.log("req.body: ", req.body);
        console.log("req.files: ", req.files);

        console.log("uploaded file name: ", req.files[0].originalname);
        console.log("file type: ", req.files[0].mimetype);
        console.log("file name in server folders: ", req.files[0].filename);
        console.log("file path in server folders: ", req.files[0].path);


        bucket.upload(
            req.files[0].path,
            {
                destination: `tweetPictures/${req.files[0].filename}`, // give destination name if you want to give a certain name to file in bucket, include date to make name unique otherwise it will replace previous file with the same name
            },
            function (err, file, apiResponse) {
                if (!err) {

                    file.getSignedUrl({
                        action: 'read',
                        expires: '03-09-2999'
                    }).then((urlData, err) => {
                        if (!err) {
                            console.log("public downloadable url: ", urlData[0]) // this is public downloadable url 

                            try {
                                fs.unlinkSync(req.files[0].path)
                                //file removed
                            } catch (err) {
                                console.error(err)
                            }

                            
                            // ProductModel.create({
                            //     name : body.Name,  
                            //     price: body.Price,
                            //     image: urlData[0],
                            //     description : body.Description
                            // },
                            //     (err, saved) => {
                            //         if (!err) {
                            //             console.log("saved: ", saved);

                            //             res.send({
                            //                 message: "Product added successfully"
                            //             });
                            //         } else {
                            //             console.log("err: ", err);
                            //             res.status(500).send({
                            //                 message: "server error"
                            //             })
                            //         }
                            //     })
                        }
                    })
                } else {
                    console.log("err: ", err)
                    res.status(500).send();
                }
            });



    } catch (error) {
        console.log("error: ", error);
    }
})





// router.post('/product', upload.any() ,  (req, res) => {
//     const body = req.body;

//     console.log("Body"  ,     body)
//     if ( 
//         !body.name
//         || !body.price
//         || !body.description
        
//     ) {
//         res.status(400).send({
//             message: "required parameters missing",
//         });
//         return;
//     }

//     // console.log(body.name)
//     // console.log(body.price)
//     // console.log(body.description)
//     // console.log(body.image)


//     // ProductModel.create({
//     //     name: body.name,
//     //     price: body.price,
//     //     description: body.description,
//     //     image  : body.image
//     // },
//     //     (err, saved) => {
//     //         if (!err) {
//     //             console.log(saved);

//     //             res.send({
//     //                 message: "product added successfully"
//     //             });
//     //         } else {
//     //             res.status(500).send({
//     //                 message: "server error"
//     //             })
//     //         }
//     //     })
// })




export default router