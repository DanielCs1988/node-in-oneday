import { json } from "body-parser";
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/swapi.controller";
import {SwapiService} from "./services/swapi.service";

const port = process.env.PORT || 8080;

const container = new Container();
container.bind<SwapiService>('SwapiService').to(SwapiService);

const server = new InversifyExpressServer(container);
server.setConfig(app => {
    app.use(json());
});

const app = server.build();

app.listen(port, () => console.log(`Server is running on port ${port}...`));
