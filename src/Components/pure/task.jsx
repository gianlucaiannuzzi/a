import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class"; 
import "../../styles/task.scss"
import { LEVELS } from '../../models/levels.enum';
const TaskComponent = ({task}) => {

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
            return (<i className='bi-toggle-on' style={{color: 'green', fontWeight: 'bold'}}></i>)
        } else {
            return (<i className='bi-toggle-off' style={{color: 'grey', fontWeight: 'bold'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
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
                <i className='bi-trash' style={{color: 'tomato'}}></i>
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
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
