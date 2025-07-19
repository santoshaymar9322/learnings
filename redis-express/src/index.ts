import express from "express";
import { createClient } from "redis";
const app = express();
const port = process.env.PORT || 5000;


const redisClient = createClient()

redisClient.on('error',() => {
  console.log("cant connect to redis")
})
redisClient.on('connect',() => {
  console.log("connected to redis")
})



app.use(express.json());
(async () => {
  await redisClient.connect()
  await redisClient.set("keys","100")

  app.use(async (req,res,next) => {
    const visits = await redisClient.incr('keys')
   
    console.log("expires in",await redisClient.ttl('course'))

  console.log("hey the server was hit",visits)
  next()
  })



  app.post("/", async(req,res) => {
    await redisClient.set("course",req.body.course)
    await redisClient.expire("course",10)
    return res.status(200).send("sucessful")
  })
  app.get("/", async(req, res) => {
    // console.log("req",req)
    const course = await redisClient.get('course')
    
    if(course){
      await redisClient.expire("course",100,"GT")
      return res.send(`name is ${course}`)
    }
    else{
      await redisClient.set("course",req.body.course)
      
      return res.status(400).send('sorry we dont found your course but we just stroing that in redis okay get out of here')
    }
    
});

  app.delete("/",async(req,res) => {
    await redisClient.del(["course"])
    return res.send("hey mate deleted it ")

  })

app.listen(port, () => {
  console.log("server started listening at port ", port);
});})()