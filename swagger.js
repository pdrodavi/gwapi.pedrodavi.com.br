const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      version: '1.0.0',
      title: 'API Gateway Node JS',
      description: 'Developer: Pedro Davi - https://pedrodavi.com.br',
    },
    //host: '',
    host: 'gwapi.pedrodavi.com.br',
    basePath: '',
    "schemes": [
        "https",
        "http"
    ],
    securityDefinitions: {
      apiKeyAuth: {
        type: 'apiKey',
        in: 'query', // can be 'header', 'query' or 'cookie'
        name: 'X-API-KEY', // name of the header, query parameter or cookie
        description: 'any description...'
      },
    }
};

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);