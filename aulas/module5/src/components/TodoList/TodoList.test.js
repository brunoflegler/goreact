import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

import configureStore from "redux-mock-store"; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

const store = mockStore({
  todos: [{ id: 1, title: "todo 1" }]
});

describe("<TodoList />", () => {
  it("render", () => {
    const component = shallow(<TodoList />, { context: { store } });

    component
      .dive()
      .find("button")
      .simulate("click");
  });
});
