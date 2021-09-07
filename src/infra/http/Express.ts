import ControllerTodo from "../../controller/ControllerTodo";
import Express from "express";

const app = Express();

app.get('/todos', async function(req: any, res: any) {
  return res.json(await ControllerTodo.listTodos());
});

app.listen(3000, () => {
    console.log('Server Online');
});