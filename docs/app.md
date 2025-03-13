# Nome do aplicativo
Podscast Manager

### Descrição
Um app ao estilo NetFlix, no qual eu possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios em sessões de categorias
    - [Saúde, Fitness, Mentalidade, Humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature
- Listar os episódios de podcasts em sessões de categorias

#### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria

```js
[
    {
    podcastName: "Flow Podcast",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["bodybuilder", "fitness"]
    },
    {
    podcastName: "Flow Podcast",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30", 
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["bodybuilder", "fitness"]
    },
]
```