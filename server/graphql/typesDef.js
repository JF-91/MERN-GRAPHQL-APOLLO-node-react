import {gql} from 'graphql-tag'


//consulas o querys
export const typeDef = gql`
    type Query {
        hello: String,
        projects: [Project]
        project(_id: ID!): Project
        task(_id: ID!): Task
        tasks: [Task]
        updateProject(_id: ID, name: String!, description: String!): Project
        updateTask(_id: ID, title: String!, projectId: ID!): Task
    }

    type Mutation {
        createProject(name: String, description: String): Project
        createTask(title: String, projectId: ID): Task
        deleteProject(_id: ID!):Project
        deleteTask(_id: ID!): Task
    }

    type Project {
        _id: ID,
        name: String
        description: String
        createdAt: String
        updatedAt: String
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String
        projectId: ID
        createdAt: String
        updatedAt: String
        project: Project
    }

`