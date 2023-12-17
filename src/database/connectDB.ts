import { MongoClient } from "https://deno.land/x/mongo@v0.30.0/mod.ts";
import { load } from "https://deno.land/std@0.209.0/dotenv/mod.ts";
const env = await load();

const dbString = `${env['DB_URL']}`;
const client = new MongoClient();
await client.connect(dbString);
const db = client.database("deno_auth");
export default db;