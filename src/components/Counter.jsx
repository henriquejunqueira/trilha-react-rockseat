import { useState } from 'react';

// Imutabilidade

// usuarios = ['diego3g', 'diegosf', 'danileao'];

// usuarios.push('rafacamarda'); // ! dessa forma é acessada a memória para adicionar o novo valor

// ? Utilizando o conceito de imutabilidade deve ser feito da seguinte forma utilizando spread operator:

// novosUsuarios = [...usuarios, 'rafacamarda']; // ! o spread operator pega o que já existe e adiciona dados

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button type='button' onClick={increment}>
        Increment
      </button>
    </div>
  );
}
