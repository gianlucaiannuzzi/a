import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task("Programar", "Aprender React.js", false, LEVELS.URGENTE);
    
    const cambiarEstado = (id) => {
        console.log("TODO: Cambiar estado de una tarea")
    }

    return (
        <div>
           <div>
                <h1>Tareas:</h1>
           </div>
           {/* TODO: Aplicar for/map para renderizar lista*/}
           <TaskComponent task={defaultTask}></TaskComponent> 
        </div>
    );
};

export default TaskListComponent;
