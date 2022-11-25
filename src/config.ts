import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3001
const FINHUB_API_KEY = process.env.FINHUB_API_KEY || 'bv4mnbf48v6qpate9n30'

export const config = {
    port: PORT,
    api: {
        finnub_api_key: FINHUB_API_KEY
    }
}