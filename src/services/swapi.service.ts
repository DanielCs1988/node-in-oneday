import { injectable } from "inversify";
import axios from "axios";

const SWAPI_URL = 'https://swapi.co/api/planets/';

@injectable()
export class SwapiService {

    public getAllPlanets = async (page: number) => {
        if (page < 1 || page > 7) {
            throw new Error('Page must be between 1 and 7!');
        }
        const { data: { results } } = await axios.get(SWAPI_URL, { params: { page } });
        return results;
    };

    public getPlanetById = async (id: number) => {
        const { data } = await axios.get(SWAPI_URL + id);
        return data;
    }
}