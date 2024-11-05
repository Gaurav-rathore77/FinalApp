import { mongoose } from "mongoose";
import { DB_NAME } from "../constaints.js";

const mongoDB = async ()=>{
    try {
        const meraInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\n mongodb connected !! ${meraInstance.connect.host}`)
    } catch (error) {
        console.error("this is your error" ,error)
        process.exit(1)
    }
}
export default mongoDB;