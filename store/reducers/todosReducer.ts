import {
  ITodosState,
  TodosAction,
  todosActionTypes,
} from '../types/redux/reducers/todos';

const initialState: ITodosState = {
  loading: false,
  todos: [],
};

export const todosReducer = (
  state: ITodosState = initialState,
  action: TodosAction
): ITodosState => {
  switch (action.type) {
    case todosActionTypes.loadTodos:
      return {
        ...state,
        todos: action.payload,
      };
    case todosActionTypes.addTodos:
      return {
        ...state,
        todos: [...state.todos, action.item],
      };
    case todosActionTypes.toggleLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
