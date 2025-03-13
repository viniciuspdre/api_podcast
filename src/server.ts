import * as http from 'http';
import { getListEpisode } from './controllers/podcast-controller'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(req.method === 'GET') {
        await getListEpisode(req, res);
    }
});

const port:number = Number(process.env.PORT) 

server.listen(port, () => {
    console.log("Servidor iniciado na porta "+ port);
});