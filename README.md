<h1>Cat Facts API</h1>
Projeto simples desenvolvido para testar o consumo de uma API utilizando JavaScript. A aplicação utiliza a Cat Facts API para buscar e exibir curiosidades aleatórias sobre gatos.


API utilizada:
Cat Facts API

Documentação: https://catfact.ninja/

A API fornece curiosidades sobre gatos em formato JSON.

O que a API devolve
A requisição retorna informações em formato JSON, contendo uma curiosidade sobre gatos e a quantidade de caracteres do texto.

Exemplo:

{<br>
  "fact": "Cats have five toes on their front paws.",<br>
  "length": 43<br>
}

<h2>Endereço utilizado</h2>
A aplicação realiza uma requisição para:
https://catfact.ninja/fact

Esse endereço é utilizado no JavaScript para obter uma nova curiosidade.

<h2>Como rodar</h2>h2>
Baixe ou clone o repositório.

Abra a pasta do projeto.

Execute o arquivo index.html.

O projeto pode ser aberto diretamente no navegador. Para uma execução utilizando servidor local, também é possível utilizar o Live Server no Visual Studio Code.

Estrutura do projeto
.<br>
├── index.html<br>
├── style.css<br>
├── script.js<br>
└── README.md

<h2>Como funciona</h2>
O arquivo script.js utiliza o método fetch() para realizar uma requisição à API. Após receber a resposta, os dados são convertidos de JSON e a curiosidade retornada é inserida na página.

<h2>Dificuldade encontrada</h2>
Durante o desenvolvimento, a principal dificuldade foi entender como realizar a requisição à API e utilizar corretamente os dados retornados em JavaScript.

Trabalho feito no: Visual Studio Code
Feito por: Bruno Mendes e Victor Schulz
T TDES 2024/M6
