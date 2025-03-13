import * as http from 'http';
import { getFilterEpisodes, getListEpisode } from './controllers/podcast-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //query string
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]


    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisode(req, res);
    }

    else if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res)
    }
}