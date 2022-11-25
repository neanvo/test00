const express = require("express")
import { config } from "./config";
import { applyRoutes } from "./routes";
var cors = require('cors')

const bootstrap = async () => {
    const app = express()
    app.use(cors())
    applyRoutes(app)
    app.listen(config.port, () => {
        console.log(`🚀 Server is ready at ${config.port} port`);
    })
}

bootstrap().catch((err) => {
	console.log(err)
	process.exit(0)
});
