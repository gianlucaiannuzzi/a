import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask =  new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask);
    }

    const normalStyle = {
        textShadow: 'black 1px 0 10px',
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        textShadow: 'black 1px  0 10px',
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input id='inputName' ref= { nameRef } type='text' className='form-control form-control-lg' required autoFocus placeHolder='Nombre de la tarea'></input>
                <input id='inputDescription' ref= { descriptionRef } type='text' className='form-control form-control-lg' required placeholder='Descripcion de la tarea'></input>
                <select className='form-control form-control-lg' ref={ levelRef } defaultValue={ LEVELS.NORMAL } id='selectLevel'>
                    <option style={normalStyle} value= {LEVELS.NORMAL }>Normal</option>
                    <option style={urgentStyle} value= {LEVELS.URGENTE }>Urgente</option>
                    <option style={blockingStyle} value= {LEVELS.BLOCKING }>Blocking</option>
                </select>
                <button type='submit' className='btn btn*success btn-lg ms-1'>
                { length > 0 ? 'Agregar Tarea' : 'Crea tu primera tarea' }
                </button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
