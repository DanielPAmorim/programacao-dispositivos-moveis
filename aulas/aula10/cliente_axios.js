const axios = require("axios");

const url = "http://localhost:3000/tarefas";

// obter tarefas
axios
  .get(url)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// criar uma tarefa
axios
  .post(url, { nome: "Dormir", concluida: false })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa
axios
  .put(`${url}/1a2b`, { nome: "Estudar React", concluida: true })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// remover uma tarefa
axios
  .delete(`${url}/1a2b`)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));
