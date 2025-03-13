import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episode-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

//listar podcasts
export const getListEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, {'content-type': ContentType.JSON})
    res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content  = await serviceFilterEpisodes(req.url)

    res.writeHead(StatusCode.OK, {"content-type": ContentType.JSON})
    res.end(JSON.stringify(content))
}