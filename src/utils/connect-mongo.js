import variables_env from "./variables_env";
import { connect } from "mongoose";

export const initMongoDB = async() => {
    try {
        await connect(variables_env.URLMONGO);
        //await mongoose.connect(variables_env.URLMONGO);
    } catch (error) {
        throw new Error(`Error connecting to MongoDB: ${error}`);
    }
}