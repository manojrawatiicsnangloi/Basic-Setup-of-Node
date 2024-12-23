import yup, { object, string } from "yup";

const postSchemaObj = {
    body: object({
        todo_title: string().required("Todo Title Is required"),
        todo_desc: string().required("Todo Description is reqired")
    })
}

const todoParamsSchema = {
    params : object({
        postId : string().required("Todo Id is required")
    })
} 


const postTodoSchema = yup.object().shape({
    ...postSchemaObj
});


const updateTodoSchema = yup.object().shape({
    ...postSchemaObj,
    ...todoParamsSchema
});

const deleteTodoSchema = yup.object().shape({
    ...todoParamsSchema
});


export { updateTodoSchema, postTodoSchema, deleteTodoSchema };