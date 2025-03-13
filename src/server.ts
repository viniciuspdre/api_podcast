import * as http from 'http';
import { getFilterEpisodes, getListEpisode } from './controllers/podcast-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //query string
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]
    console.log(baseUrl)
    console.log(queryString)


    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisode(req, res);
    }

    else if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res)
    }
});

const port:number = Number(process.env.PORT) 

server.listen(port, () => {
    console.log("Servidor iniciado na porta "+ port);
});