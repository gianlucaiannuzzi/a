import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class"; 

const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
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
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
