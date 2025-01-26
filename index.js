import 'dotenv/config';
import express from 'express';
import serverless from 'serverless-http';
import todos from '#resources/todo/todo.routes.js';

const app = express();
const port = 8000;

app.use(express.json());

// routes
app.use(todos);

if (process.env.ENV == 'local') {
    app.listen(port, () => {
        console.log(`app is listening on port ${port}`);
    });
}

const handleRequest = serverless(app);

export const handler = async (event, context) => {
    return await handleRequest(event, context);
}