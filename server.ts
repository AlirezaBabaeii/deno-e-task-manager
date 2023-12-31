import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import router from "./src/routes/allRoutes.ts";
import { load } from "https://deno.land/std@0.209.0/dotenv/mod.ts";
import { initMongooseConnection } from "./src/database/initMongooseConnection.ts";
const app = new Application();

const env = await load();

const PORT: number | any = env["PORT"] ?? 9191;

initMongooseConnection();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Application is listening on port: ${PORT}`);

app.listen({ port: PORT });
