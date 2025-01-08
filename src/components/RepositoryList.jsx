import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

// const repository = {
//   name: 'unform2',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform',
// };

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  // a função dentro do useEffect vai ser executada sempre que 'repositories' tiver o valor alterado
  // ! se a dependência do useEffect [] estiver vazia, a função é executada apenas uma vez
  //   useEffect(() => {
  //   }, [repositories]);

  useEffect(() => {
    fetch('https://api.github.com/users/henriquejunqueira/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
