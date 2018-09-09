import {Request, Response } from 'express';
import {controller, httpGet, httpPost, interfaces} from "inversify-express-utils";
import {RandomService} from "../services/random.service";
import {inject} from "inversify";

@controller('/api')
export class RandomController implements interfaces.Controller {

    constructor(@inject('RandomService') private randomService: RandomService) { }

    @httpGet('/')
    private async get(req: Request, res: Response): Promise<string> {
        return this.randomService.getRandomString();
    }

    @httpPost('/')
    private post(req: Request, res: Response): {[key: string]: string} {
        console.log(req.body);
        return {
            greeting: 'Hello BOI'
        };
    }
}