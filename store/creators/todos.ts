import { ITodos } from '../types/jsonPlaceholder';
import { TodosAction, todosActionTypes } from '../types/redux/reducers/todos';

export const loadTodosCreator = (payload: ITodos): TodosAction => {
  return {
    type: todosActionTypes.loadTodos,
    payload,
  };
};

export const toggleTodosLoadingCreator = (): TodosAction => {
  return {
    type: todosActionTypes.toggleLoading,
    payload: null,
  };
};
