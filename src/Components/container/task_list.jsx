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
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("El componente se va a desmontar.");
        };
    }, [tasks]);

    const cambiarCompletado = (id) => {
        console.log("TODO: Cambiar estado de una tarea")
    }

    const Table = () => {
        return(
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
                                <TaskComponent 
                                key={index} 
                                complete={completeTask} 
                                remove = {deleteTask}
                                task={task}></TaskComponent> 
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }


    function completeTask(task){
        console.log("Completar esta tarea:", task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completado = !tempTasks[index].completado;
        //Actualizamos estado del componente y se actualizara la iteracion de las tareas.
        //Se mostrara entonces actulizada!
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log("Borrar esta tarea:", task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log("Agregar esta tarea:", task)
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    let tasksTable;

    if(tasks.length > 0) { 
        tasksTable = <Table></Table>
    } else {
        tasksTable =  (
        <div>
            <h3>No hay tareas para mostrar.</h3>
            <h4>Por favor, crear una tarea.</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
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
                    {loading ? (<p style={loadingStyle}>Cargando...</p>) : tasksTable}
                </div>
           </div>
           <TaskForm add={addTask} length={ tasks.length }></TaskForm>
        </div>
    );
};

export default TaskListComponent;
