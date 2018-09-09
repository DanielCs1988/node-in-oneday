import { json } from "body-parser";
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/swapi.controller";
import "./controllers/todo.controller";
import {SwapiService} from "./services/swapi.service";
import {TodoService} from "./services/todo.service";
import {connect} from "mongoose";

const port = process.env.PORT || 8080;

connect(process.env.MONGODB_URI!, {useNewUrlParser: true});

const container = new Container();
container.bind<SwapiService>('SwapiService').to(SwapiService).inSingletonScope();
container.bind<TodoService>('TodoService').to(TodoService).inSingletonScope();

const server = new InversifyExpressServer(container);
server.setConfig(app => {
    app.use(json());
});

const app = server.build();

app.listen(port, () => console.log(`Server is running on port ${port}...`));
