import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import "../../styles/task.scss";
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task("Programar", "Aprender React.js", true, LEVELS.URGENTE);
    const defaultTask2 = new Task("Programar2", "Aprender CSS", false, LEVELS.BLOCKING);
    const defaultTask3 = new Task("Programar3", "Aprender Bootstrap", false, LEVELS.NORMAL);



    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tareas.");
        setLoading(false);
        return () => {
            console.log("El componente se va a desmontar.");
        };
    }, [tasks]);

    const cambiarCompletado = (id) => {
        console.log("TODO: Cambiar estado de una tarea")
    }

    return (
        <div>
           <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Tus Tareas:
                        </h5>
                    </div>
                </div>
                {/* Card Body (CONTENT) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    Titulo
                                </th>
                                <th scope='col'>
                                    Descripcion
                                </th>
                                <th scope='col'>
                                    Prioridad
                                </th>
                                <th scope='col'>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => {
                                    return (
                                        <TaskComponent key={index} task={task}></TaskComponent> 
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <TaskForm></TaskForm>
           </div>
        </div>
    );
};

export default TaskListComponent;
