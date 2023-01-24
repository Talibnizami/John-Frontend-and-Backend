import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express()
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
const port = process.env.PORT || 8000
import loginsignup from './Routes/Login and Sign.js'
import userModel from './DataBase/dataBase.js';
const SECRET = process.env.SECRET || "topsecret";
import jwt from 'jsonwebtoken';
import Product from './Routes/Products.js'
import { tweetModel } from './DataBase/dataBase.js';
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [   'http://localhost:3000'   , "*"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.put('/api/v1/update/:id', async (req, res) => {

    const body = req.body;
    const id = req.params.id;

    if (
        !body.name ||
        !body.price ||
        !body.description||
        !body.category
    ) {
        res.status(400).send(` required parameter missing. example request body:
        {
            "name": "value",
            "price": "value",
            "description": "value"
        }`)
        return;
    }

    try {


        let data = await tweetModel.findByIdAndUpdate(id,
            {
                name: body.Name,
                price: body.Price,
                description: body.Description,
                category : body.category
            },
            { new: true }
        ).exec();

        console.log('updated: ', data);

        res.send({
            message: "product Update  Successfully"
        });

    } catch (error) {
        res.status(500).send({
            message: "server error"
        })
    }
})
app.delete("/api/v1/customer/:id", (req, res) => {
    const id = req.params.id;
  
    tweetModel.deleteOne({ _id: id }, (err, deletedData) => {
      console.log("deleted: ", deletedData);
      if (!err) {
        if (deletedData.deletedCount !== 0) {
          res.send({
            message: "Product has been deleted successfully",
          });
        } else {
          res.status(404);
          res.send({
            message: "No Product found with this id: " + id,
          });
        }
      } else {
        res.status(500).send({
          message: "server error",
        });
      }
    });
  });
app.get('/api/v1/products', (req, res) => {
console.log(req.ip)
const getData = async () =>{
        const result = await tweetModel.find()
        console.log(result)
    }
    getData()
    tweetModel.find({}, (err, data) => {
        if (!err) {
            res.send({
                message: "Got all products successfully",
                data: data
            })
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    });
})
app.use('/api/v1', Product) 
app.use('/api/v1', loginsignup) 
app.use('/api/v1', (req, res, next) => {

    console.log("req.cookies: ", req.cookies);

    if (!req?.cookies?.Token) {
        res.status(401).send({
            message: "include http-only credentials with every request"
        })
        return;
    }

    jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
        if (!err) {

            console.log("decodedData: ", decodedData);

            const nowDate = new Date().getTime() / 1000;

            if (decodedData.exp < nowDate) {

                res.status(401);
                res.cookie('Token', '', {
                    maxAge: 1,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                });
                res.send({ message: "token expired" })

            } else {

                console.log("token approved");

                req.body.token = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})
app.get('/api/v1/profile', (req, res) => { 
    const  _id = req.body.token._id
const getData = async ()=>{
    try {
        const user = await userModel.findOne({ _id: _id }, "email firstName lastName -_id").exec()
        if (!user) {
            res.status(404).send({})
            return;
        } else {
  
            res.set({
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                "Surrogate-Control": "no-store"
            });
            res.status(200).send(user)
        }
  
    } catch (error) {
  
        console.log("error: ", error);
        res.status(500).send({
            message: "something went wrong on server",
        });
    }

}
getData()
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './Frontend/build')))
app.use('*', express.static(path.join(__dirname, './Frontend/build')))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})