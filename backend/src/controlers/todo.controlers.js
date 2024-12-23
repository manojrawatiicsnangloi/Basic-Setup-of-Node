import { findOneTodo, updateTodoService } from "../service/todo.service";


const createTodoHandler = async (req, res)=>{
    try {
        if (req.user){
            await createTodoHandler({ ...req.body, user : req.user._id });
            return res.json({"msg" : "Todo Created Successfully"});
        }
    } catch (error) {
        res.json({"error" : "Internal Server Error"}).status(500);
    }
}


const updateTodoHandler = async (req, res)=>{
    try {
        const todoObj = await findOneTodo({_id : req.params.todoId});
        if (todoObj.user == req.user._id){
            const updatedTodoObj = await updateTodoService({ _id : todoObj._id}, {
                ...req.body
            });
            return res.json({ "message" : "Todo Updated Successfully" });
        }
        else{
            return res.json({"error" : "You are not authorize to update this todo"});
        }
    } catch (error) {
        res.json({"error" : "Internal Server Error"}).status(500);
    }
}


const deleteTodoHandler = async (req, res)=>{
    try {
        const todoObj = await findOneTodo({_id : req.params.todoId });
        if (todoObj.user == req.user._id){
            const deleteTodoObj = await delete
        }
    } catch (error) {
        
    }
}
export { updateTodoHandler }