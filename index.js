import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { projectSchema } from './models/projectModel.js';

const app = express()

app.use(bodyParser.json())
app.use(cors())


app.get('/api/v1/projects', async (req, res, next) => {
    try {
        const items = await projectSchema.find()
        res.json({
            status: 'success',
            result: items.length,
            data: items
        })
    } catch (error) {
        console.log(error)
    }
})



export { app }