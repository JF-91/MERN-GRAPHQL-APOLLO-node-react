import {connect, set} from 'mongoose'

export const connectDB = async()=>{
    try {
        set( "strictQuery", false)
       const conn = await connect("mongodb://127.0.0.1:27017/graphql")
       console.log(`db connected to ${conn.connection.name}`);
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
            throw new Error("db no conectado : ", error)
        }
    }
}