import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repoPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //interface de retorno definida
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] ?? ""
    const data = await repoPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat
}