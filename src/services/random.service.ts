import {injectable} from "inversify";
import axios from 'axios';

@injectable()
export class RandomService {

    public getRandomString = async () => {
        const { data } = await axios.get('https://swapi.co/api/people/1');
        return data;
    }

}