import Project from "../models/Project.js"
import Task from "../models/Tasks.js"


export const resolvers = {

    Query : {
        hello: ()=> 'Hola mundo',
        projects: async()=> await Project.find(),
        tasks: async()=> await Task.find(),
        project: async(_, {_id})=> await Project.findById(_id),
        task: async(_, {_id})=> await Task.findById(_id)
    },

    Mutation: {
        
        createProject: async (_, {name, description})=> {

           const project =  new Project({
                name,
                description
            })

           const savedProject =  await project.save()
            return savedProject
        },

        createTask: async (_, {title, projectId})=> {

          const projectFound =   await Project.findById(projectId)
          if( !projectFound) throw new Error("project not found")

            const task = new Task ({
                title,
                projectId
            })

            const savedTask = await task.save();
            return savedTask
        },


        deleteProject: async(_, {_id})=>{
            const deletedPRoject = await Project.findByIdAndDelete(_id)
            if( !deletedPRoject) throw new Error("project not found")
            
            await Task.deleteMany({projectId: deletedPRoject._id})

            return deletedPRoject
        },

        deleteTask: async(_, {_id})=>{
            const tastkDeleted = await Task.findByIdAndDelete(_id)
            if( !deletedPRoject) throw new Error("Task not found")

            return tastkDeleted
        },

        updateProject: async(_, args)=>{
            const updatedProject = await Project.findByIdAndUpdate(args._id, args, {new:true})
            if(!updatedProject) throw new Error("Project not found")
            return updatedProject
        },

        updateTask: async(_, args)=>{
            const updateTask = await Task.findByIdAndUpdate(args._id, args, {new:true})
            if(!updateTask) throw new Error("Task not found")
            return updateTask
        },

    },

    Project: {
        tasks: async(parent)=> {

            return await Task.find({projectId: parent._id})
            
        }
    },

    Task: {
        project: async (parent)=> {
         return await Project.findById(parent._id)
         
        }
    }
}