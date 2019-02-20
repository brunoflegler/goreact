import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as TodosActions } from "../../store/ducks/todos";

const TodoList = ({ todos, addTodo }) => (
  <div>
    <ul>
      {todos.map(t => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
    <button
      key={() => {
        addTodo("Novo Todo");
      }}
    >
      Adicionar Novo
    </button>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
