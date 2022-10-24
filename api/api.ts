import { ITodo } from '../store/types/jsonPlaceholder';

const url = 'https://jsonplaceholder.typicode.com/';

export const getTodos = (): Promise<ITodo[]> => {
  return fetch(url + 'todos')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
