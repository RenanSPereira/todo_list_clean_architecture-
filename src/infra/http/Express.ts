import RepositoryMemory from "../repository/RepositoryMemory";
import ListTodos from "../../core/useCases/ListTodos";

var express = require('express');
var app = express();

app.get('/', async function(req: any, res: any) {
  const repository = new RepositoryMemory();
  const listTodos = new ListTodos(repository);
  return  res.json(await listTodos.execute());
});


app.listen(3000, () => {
    console.log('Server Online');
});