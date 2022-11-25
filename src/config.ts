import * as dotenv from "dotenv"
dotenv.config()

const APP_PORT = process.env.APP_PORT || 3001
const FINHUB_API_KEY = process.env.FINHUB_API_KEY || 'bv4mnbf48v6qpate9n30'

export const config = {
    port: APP_PORT,
    api: {
        finnub_api_key: FINHUB_API_KEY
    }
}