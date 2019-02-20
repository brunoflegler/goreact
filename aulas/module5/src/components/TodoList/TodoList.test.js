import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

import configureStore from "redux-mock-store"; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

const store = mockStore({
  todos: [{ id: 1, title: "todo 1" }]
});
describe("<GatorAvatar />", () => {
  test("dispatches event to show the avatar selection list", () => {
    const wrapper = shallow(<TodoList store={store} />);
    const component = wrapper.dive();
  });
});

/* describe("<TodoList />", () => {
  it("should be add new Todo", () => {
    const wrapper = shallow(<TodoList context={store} />).dive();

    wrapper.find("button").simulate("click");
  });
});
 */
