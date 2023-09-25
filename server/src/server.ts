import express from "express"
import {router}from "./routes"
const cors=require('cors')

const app=express()
app.use(cors())

app.use(express.json())
app.use(router)
var PORT = 3001
app.listen(PORT,()=>console.log("Server running "+PORT))
