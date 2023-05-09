import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
import { MongoClient, ObjectId } from 'npm:mongodb@5'
import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";
import { graphql } from "npm:graphql@16.6";

// connect to mongo
const mongoURL = 'mongodb://mongo:27017';
const client = new MongoClient(mongoURL);

// Database Name
const dbName = 'Agenda';

// Use connect method to connect to the server
await client.connect();
console.log('Connected successfully to Mongo server');
const db = client.db(dbName);
const Lista = db.collection("Lista");
export const typeDefs = `
  type Query {
    list: [String!]!
  }

  type Mutation {
    addWord(word: String!): [String!]!
  }
`;





const resolvers = {
  Query: {
    list: async () => {
        return( (await Lista.find({}).toArray())).map(s => s.word);

    }
  },
  Mutation: {
    addWord: async (_: unknown, args: { word: string }) => {
      await Lista.insertOne({ word: args.word });
      return (await Lista.find({}).toArray()).map(s=> s.word);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen : {port: 8080} });
console.log(`Server ready at ${url}`);