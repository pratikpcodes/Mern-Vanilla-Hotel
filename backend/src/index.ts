import express from 'express'
import cors from 'cors'
import "dotenv/config"

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get("/api/test",async (req,respone)=>{
    respone.json({message : "hello first i am pratik"})

})

app.listen(7000,()=>{
    console.log("kdfdkfkfd: local perfect")
})


