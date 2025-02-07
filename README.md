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

- Instalação do Html Webpack Plugin em modo de desenvolvimento: `$ yarn add html-webpack-plugin -D`

- Instalação do Webpack Dev Server: `$ yarn add webpack-dev-server -D`

- Executando o Webpack Dev Server pra não precisar rodar `yarn webpack` a cada alteração: `$ yarn webpack serve`

- #### Observação sobre o Webpack Dev Server:

- Caso dê erro rodando `$ yarn webpack serve` utilizando a configuração do vídeo, o erro é causado pela utilização da propriedade `contentBase` dentro da configuração do `devServer`, que foi descontinuada nas versões mais recentes do `webpack-dev-server`.
- Na versão mais recente do `webpack-dev-server` (v4+), a opção `contentBase` foi substituída pela opção `static`.
- A propriedade `static` é agora usada para configurar os arquivos estáticos que o servidor deve servir.
- Para corrigir o erro, substitua a configuração `contentBase` por `static` no arquivo webpack.config.js, como mostrado abaixo.
- Sendo colocado após o fechamento do resolve e antes da abertura do plugins:

- `devServer: {`
  `static: path.resolve(__dirname, 'public'),`
  `},`

- Instalação do Cross Env em modo de desenvolvimento para definir variáveis de ambiente independente do SO: `$ yarn add cross-env -D`

- Criado script no `package.json` para rodar o webpack de acordo com o ambiente:
  `"scripts": {`
  `"dev": "webpack serve",`
  `"build": "cross-env NODE_ENV=production webpack"`
  `},`

- Executando o script em ambiente de desenvolvimento: `$ yarn dev`

- Executando o script em ambiente de produção: `$ yarn build`

- Instalando em modo de desenvolvimento os pacotes para carregar arquivos css: `$ yarn add style-loader css-loader -D`

- Instalando em modo de desenvolvimento o Node Sass e o Sass Loader para trabalhar com o pré-processador Sass de css: `$ yarn add node-sass sass-loader -D`

- Instalação em modo de desenvolvimento do React Refresh Webpack Plugin e do React Refresh: `$ yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`

- Instalação em modo de desenvolvimento do TypeScript: `$ yarn add typescript -D`

- Iniciando o typescript criando o arquivo de configuração `tsconfig.json` do typescript: `$ yarn tsc --init`

- Adicionado na configuração do `tsconfig.json`:

- `"lib": ["DOM", "DOM.Iterable", "ESNext"],`

- Instalação em modo de desenvolvimento do preset typescript pra que o babel consiga interpretar o typescript: `$ yarn add @babel/preset-typescript -D`

- Instalação do React e do React Dom do pacote @types pra solucionar alguns problemas com typescript: `$ yarn add @types/react-dom -D`
