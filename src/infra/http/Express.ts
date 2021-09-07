import ControllerTodo from "../../controller/ControllerTodo";
import Express from "express";

const app = Express();
app.use(Express.json()) 

app.get("/todos", async function(req: any, res: any) {
  return res.json(await ControllerTodo.listTodos());
});

app.post("/todos", function(req: any, res: any) {
  return res.json(ControllerTodo.registerTodo(req.body.description, req.body.finished));
});

app.listen(3000, () => {''
    console.log('Server Online');
});