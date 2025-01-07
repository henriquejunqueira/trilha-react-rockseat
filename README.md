# Repositório da Trilha de React da Rockseat

# Comandos utilizados:

- Criando package.json: `$ yarn init -y` ou `npm init -y`;

- Instalação do React: `$ yarn add react` ou `npm i react`;

- Instalação do React-DOM: `$ yarn add react-dom` ou `npm i react-dom`;

- Instalação Babel em modo de desenvolvimento: `$ yarn add babel-loader @babel/core @babel/cli @babel/preset-env -D` ou `$ npm i babel-loader @babel/core @babel/cli @babel/preset-env -D`;

- Converte o arquivo especificado utilizando o babel: `$ yarn babel src/index.js -o dist/bundle.js`;

- Instalação do Babel Preset-React em modo de desenvolvimento: `$ yarn add @babel/preset-react -D`

- Obs: necessário colocar o `@babel/preset-react` dentro dos presets do `babel.config.js`

- Modificada a extensão do src/index.js para jsx e convertido novamente com o comando: `$ yarn babel src/index.jsx -o dist/bundle.js`

- Instalação webpack em modo de desenvolvimento: `$ yarn add webpack webpack-cli -D`

- Executando o webpack: `$ yarn webpack`
