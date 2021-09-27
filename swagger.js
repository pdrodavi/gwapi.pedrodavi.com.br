const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      version: '1.0.0',
      title: 'API Gateway Node JS',
      description: 'Developer: Pedro Davi - https://pedrodavi.com.br',
    },
    host: 'gwapi.pedrodavi.com.br',
    basePath: '',
    "schemes": [
        "https",
        "http"
    ]
};

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);