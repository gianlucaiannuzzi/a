import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class"; 
import "../../styles/task.scss"
import { LEVELS } from '../../models/levels.enum';
const TaskComponent = ({ task, complete, remove}) => {

    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log("La tarea ${tarea.nombre} se va a desmontar.");
        }
    }, [task]);

    /**
     * Funciones que devuelve una badge depoendiendo del nivel de la tarea
     */
    function taskLevelBadge() {
        switch(task.nivel) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{ task.nivel }</span></h6>);
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{ task.nivel }</span></h6>);
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{ task.nivel }</span></h6>);
            default:
                break;
        }
    }

    /**
     * Funcion que devuelve icono dependiendo si se completa la tarea o no.
     */
    function taskCompletedIcon() {
        if(task.completado) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green', fontWeight: 'bold'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey', fontWeight: 'bold'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <tr className='fw-normaL' style={task.completado ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{ task.nombre }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.descripcion }</span>
            </td>
            <td className='align-middle'>
                {/* Ejecucion de funcion que devuelve badge segun el nivel */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Ejecucion de funcion que devuelve icono segun el completado */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i>
            </td>
        </tr>

        /* <div>
            <h2 className='task-name'>
                Nombre: { task.nombre }
            </h2>
            <h3>
                Descripcion: { task.descripcion }
            </h3>
            <h4>
                Nivel: { task.nivel }
            </h4>
            <h5>
                Esta tarea esta: { task.completado ? "COMPLETADA" : "PENDIENTE" }
            </h5>
        </div> */
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
