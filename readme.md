# 🎙️ Podcast API

![Node.js](https://img.shields.io/badge/Node.js-16.13.0-green?style=for-the-badge&logo=node.js) ![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue?style=for-the-badge&logo=typescript) ![VS Code](https://img.shields.io/badge/VS%20Code-IDE-blue?style=for-the-badge&logo=visual-studio-code)

API desenvolvida em **Node.js** e **TypeScript**, sem frameworks, para listar e filtrar episódios de podcasts da internet. Os dados são simulados através de um arquivo JSON.

## 📁 Estrutura do Projeto
O projeto foi organizado seguindo a divisão por camadas dentro da pasta `src/`:

📂 **src/**
- 📂 **controllers/** → Controla as requisições e respostas da API.
- 📂 **models/** → Define os modelos de dados da aplicação.
- 📂 **repositories/** → Simula um banco de dados usando JSON.
- 📂 **routes/** → Define as rotas da API.
- 📂 **services/** → Implementa a lógica de negócio.
- 📂 **utils/** → Funções auxiliares.
- 📜 **server.ts** → Arquivo principal para subir o servidor.

## 📦 Instalação
```bash
# Clone o repositório
git clone https://github.com/viniciuspdre/api_podcast.git

# Entre no diretório
cd api_podcast

# Instale as dependências
npm install
```

## 🚀 Executando o Projeto
```bash
# Para rodar a API
ts-node src/server.ts
```

## 🔥 Endpoints
Os testes foram realizados utilizando **Thunder Client** (extensão do VS Code), mas o **Postman** também é uma ótima opção para simular o cliente.

- **Listar todos os episódios:**
  ```
  GET localhost:port/api/list
  ```

- **Filtrar episódios por podcast:**
  ```
  GET localhost:port/api/episode?p=<nomedopodcast>
  ```

## 📄 Exemplo de Dados (`repositories/podcasts.json`)
```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "category": ["bodybuilder", "fitness"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "category": ["bodybuilder", "corrida"]
    },
    {
        "podcastName": "inteligencia",
        "episode": "Pedro Lira - Flow #400",
        "videoId": "7iDHTdFOV3I",
        "category": ["bodybuilder", "corrida"]
    }
]
```

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **TypeScript**
- **Thunder Client**
- **VS Code**

## 📝 Licença
Este projeto é de código aberto e pode ser utilizado conforme necessário.

