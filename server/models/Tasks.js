import  mongoose,{Schema, model} from 'mongoose'



const TaskSchema = new Schema({
    title: {
        type: String,
        requried: true
    },
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        requried: true
    }
})

const Task = model('Task', TaskSchema)
export default Task;