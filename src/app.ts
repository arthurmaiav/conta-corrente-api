import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares () {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database () {
      const mongoAtlasUri = 'mongodb+srv://arthur:01021718@cluster0.yex18.mongodb.net/Cluster0?retryWrites=true&w=majority'
      mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(' Mongoose is connected')
      )
    }

    private routes () {
      this.express.use(routes)
    }
}

export default new App().express
