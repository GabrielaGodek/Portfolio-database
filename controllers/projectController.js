import { projectSchema } from '../models/projectModel.js';

const getAllProjects = async (req, res, next) => {
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
}
const getProject = async (req, res, next) => {
    try {
        const item = await projectSchema.findById(req.params.id)
        res.json({
            status: 'success',
            data: item
        })

    } catch (error) {
        console.log(error)
    }
}

export { getAllProjects, getProject }