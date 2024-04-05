import { LEVELS } from "./levels.enum";

export class Task {
    nombre = "";
    descripcion = "";
    completado = false;
    nivel = LEVELS.NORMAL;

    constructor(nombre, descripcion, completado, nivel) {
        this.nombre = nombre; 
        this.descripcion = descripcion;
        this.completado = completado;
        this.nivel = nivel;
    }
}
