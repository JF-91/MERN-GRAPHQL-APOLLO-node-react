import expres from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from 'cors';
import http from 'http';


export async function startAplloServer(typeDefs, resolvers) {
    try {
        const app = expres()
    const httpServer = http.createServer(app)
  
    const server = new ApolloServer({
      typeDefs, 
      resolvers,
    })
  
    await server.start()
  
    app.use("/graphql", cors(), expres.json(),   expressMiddleware(server))
   
    await new Promise(resolve => httpServer.listen({
        port: 4000
    }, resolve))

    console.log('server run in port 4000')
    } catch (error) {
        
        console.log(error);
        throw new Error("no run", error)
    }
  }