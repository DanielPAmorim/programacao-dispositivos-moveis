import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider(props) {
  const [tarefas, setTarefas] = useState([]);
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState(0);

  const adicionar = (nomeTarefa) => {
    if (nomeTarefa) {
      setTarefas([
        ...tarefas,
        { id: Math.random(), nome: nomeTarefa, concluida: false },
      ]);
    }
  };
  const concluir = (idTarefa) => {
    const tarefasAtualizadas = tarefas.map((item) =>
      item.id != idTarefa ? item : { ...item, concluida: !item.concluida }
    );
    setTarefas(tarefasAtualizadas);
  };
  const selecionar = (idTarefa) => {
    setIdTarefaSelecionada(idTarefa);
  };
  const remover = () => {
    const tarefasAtualizadas = tarefas.filter(
      (item) => item.id != idTarefaSelecionada
    );
    setTarefas(tarefasAtualizadas);
    setIdTarefaSelecionada(0);
  };

  return (
    <TaskContext.Provider
      value={{ tarefas, adicionar, concluir, selecionar, remover }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
