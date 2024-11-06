import  dotenv  from "dotenv";
import  mongoDB  from "./db/index.js";

dotenv.config({
    path : './env'
})
mongoDB()
.then(()=>{
    application.listen(process.env.PORT || 8000)
    console.log(`your app is runnig on !! ${process.env.PORT }`)
}).catch((err)=>{
    console.log("monoDB has't connected",err)
})