import { createRoot, render } from 'react-dom/client'; // Importa o createRoot
import { App } from './App';

// versão depreciada que foi modificada na versão 18 do react
// render(<h1>Teste</h1>, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Cria o elemento raiz do react

// root.render(<h1>Teste</h1>); // Renderiza o componente
root.render(<App />); // Renderiza o componente
