import { Express } from "express"
import { config } from "./config"
import { FinnubQuoteResponse, FinnubSymbolsResponse } from "./models"
const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = config.api.finnub_api_key
const finnhubClient = new finnhub.DefaultApi()

export const applyRoutes = (app: Express) => {
    app.get(`/api/v1/symbol`, (req, res) => {
        const { q } = req.query
        finnhubClient.symbolSearch(q, (error: Error, data: FinnubSymbolsResponse) => {
            if (!error) {
                res.json(data)
            } else {
                res.status(500).send(`Something went wrong.\n${error}`)
            }
          });
    })

    app.get(`/api/v1/quote`, (req, res) => {
        const { s } = req.query
        finnhubClient.quote(s, (error: any, data: FinnubQuoteResponse) => {
            if (!error) {
                res.json({
                    current: data.c,
                    percent_change: (data.dp - 1) * 100,
                    time: new Date()
                })
            } else {
                res.status(500).send(`Something went wrong.\n${error}`)
            }
          });
    })
}

