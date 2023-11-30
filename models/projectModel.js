
import { Schema, model } from 'mongoose'

const Project = new Schema({
    title: {
        type: String,
        require: true,
    },
    tech: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    links: {
        type: String,
        require: true,
    }
})

const projectSchema = model("project", Project)

export { projectSchema }
