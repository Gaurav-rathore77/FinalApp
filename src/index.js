import  dotenv  from "dotenv";
import  mongoDB  from "./db/index.js";

dotenv.config({
    path : './env'
})
mongoDB()
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("this is your error" ,error)
//         throw error
//     }
// })()