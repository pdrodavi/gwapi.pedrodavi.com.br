# API Gateway com Node JS

API Gateway construído em Node JS, documentação Swagger e autorização de uso via AppKey.

Objetivo: Centralização de APIS e orquestração e manipulação de requests e responses

---

## Documentação Swagger
- ### <https://gwapi.pedrodavi.com.br/doc>

---

## Serviços externos criados por mim que o gateway orquestra

- ### API de Criptografia assimétrica + proprietária (Java)

#### Crypt Entrypoint (POST)
```bash
https://gwapi.pedrodavi.com.br/v1/crypt?appkey=
```
#### Body JSON
```bash
{
  "sequence": "string"
}
```

#### Crypt Endpoint
```bash
https://dlci.idevoc.com.br/api/dlci/ci
```

#### Decrypt Entrypoint (POST)
```bash
https://gwapi.pedrodavi.com.br/v1/decrypt?appkey=
```
#### Body JSON
```bash
{
  "diKey": "",
  "encryptedString": "",
  "privateKey": ""
}
```

#### Decrypt Endpoint
```bash
https://dlci.idevoc.com.br/api/dlci/di
```

---

- ### API de checagem de data útil (Java)
#### Entrypoint (GET)
```bash
https://gwapi.pedrodavi.com.br/v1/business-date/{ddmmaaaa}?appkey=
```

#### Endpoint
```bash
https://apidate.herokuapp.com/api/check-day/{ddmmaaaa}
```

---

## Serviços externos de terceiros, com manipulação de request e response que o gateway orquestra

- ### API de dados sobre o Covid-19 por estado
#### Entrypoint (GET)
```bash
https://gwapi.pedrodavi.com.br/v1/covid/uf/{uf}?appkey=
```

#### Endpoint
```bash
https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/{uf}
```

- ### API de consulta de endereços por CEP
#### Entrypoint (GET)
```bash
https://gwapi.pedrodavi.com.br/v1/address/{zipcode}?appkey=
```

#### Endpoint
```bash
https://viacep.com.br/ws/{cep}/json
```

- ### API de checagem de reputação de domínio passando sua AppKey própria do Vírus Total
#### Entrypoint (GET)
```bash
https://gwapi.pedrodavi.com.br/v1/scan/domain/{domain}/{apikey}?appkey=
```

#### Endpoint
```bash
https://virustotal.com/api/v3/domains/{domain}
```
- Header: x-apikey

- ### API de consulta de valor do Bitcoin por moeda
#### Entrypoint (GET)
```bash
https://gwapi.pedrodavi.com.br/v1/btc/value/{currency}?appkey=
```
- Currency: BRL, USD, etc
- Retorna apenas a moeda passada

#### Endpoint
```bash
https://blockchain.info/ticker/
```
- Retorna sem filtragem por moeda

---

### Contato
#### <https://pedrodavi.com.br/>
