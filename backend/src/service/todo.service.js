import TodoModel from "../model/todo.model"

const findUserTodo = async ({ id }) => {
    const todo = await TodoModel.find({ user: id });
    return todo;
}

const findOneTodo = async ({ id }) => {
    const todoObj = await TodoModel.findById(id);
    return todoObj;
}

const createTodo = async ({ object }) => {
    const createTodo = await TodoModel.create(object);
    return createTodo;
}


const deleteTodo = async ({ id }) => {
    const deleteTodo = await TodoModel.deleteOne({ _id: id });
    return deleteTodo;
}


const updateTodoService = async ({ query, update }) => {
    const updateTodo = await TodoModel.updateOne(query, update);
    return updateTodo;
}

export { findUserTodo, findOneTodo, deleteTodo, updateTodoService, createTodo };