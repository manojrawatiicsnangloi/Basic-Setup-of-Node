import TodoModel from "../model/todo.model"


const findUserTodo = async ({id})=>{
    const todo = TodoModel.find({ user : id});
    console.log(todo);
}