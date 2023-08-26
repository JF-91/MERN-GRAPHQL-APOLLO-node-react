import { startAplloServer } from "./app.js";
import { typeDef } from "./graphql/typesDef.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDB } from "./db.js";

connectDB()
startAplloServer(typeDef, resolvers);



