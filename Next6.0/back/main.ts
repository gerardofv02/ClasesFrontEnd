
import {
  Application,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { MongoClient, ObjectId } from "npm:mongodb@5";
type Users = {
  name: string,
  contact: string,
  id:string,
};


// connect to mongo
const url = 'mongodb://mongo:27017';
const client = new MongoClient(url);

// Database Name
const dbName = "Agenda";

// Use connect method to connect to the server
await client.connect();
console.log('Connected successfully to Mongo server');
const db = client.db(dbName);
const UsersCollection = db.collection<Users>("Users");



const router = new Router();



router
.get("/contacts" ,async(ctx) => {
  const contacts = await UsersCollection.find().toArray();
   ctx.response.body = {contacts};
} )



// serve on port 8080
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });