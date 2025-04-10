import { useContext } from "react";
import { List, IconButton } from "react-native-paper";
import { TaskContext } from '../contexts/TaskContext';

function TaskItem({ tarefa }) {
    const { concluir, remover } = useContext(TaskContext);
    return (
        <List.Item title={tarefa.nome} 
          left={() => ( <IconButton icon={tarefa.concluida ? "check-circle" : 
            "checkbox-blank-circle-outline"} 
            onPress={() => concluir(tarefa.id)}
          />
          )} 
          right={() => (<IconButton icon="delete" onPress={() => remover(tarefa.id)}/>
        )}
        />
      );
      
}

export default TaskItem;
