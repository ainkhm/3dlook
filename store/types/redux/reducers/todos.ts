import { ITodo } from '../../jsonPlaceholder';
import { Action } from '../actions';

export enum todosActionTypes {
  toggleLoading = 'TOGGLE_LOADING',
  loadTodos = 'LOAD_TODOS',
  addTodos = 'ADD_TODOS',
}

type LoadTodos = Action<todosActionTypes.loadTodos, ITodo[]>;
type ToggleLoading = Action<todosActionTypes.toggleLoading>;
type AddTodos = Action<todosActionTypes.addTodos, ITodo[]>;

export type TodosAction = LoadTodos | ToggleLoading | AddTodos;

export interface ITodosState {
  todos: ITodo[];
  loading: boolean;
}
