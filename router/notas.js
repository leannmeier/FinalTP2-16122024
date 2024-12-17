import express from 'express'
import ControladorNotas from '../controlador/notas.js'

class RouterNotas {

    constructor() {
        this.controladorNotas = new ControladorNotas()
        this.router = express.Router()
    }

    start() {
        this.router.post('/', this.controladorNotas.guardarNota)
        this.router.get('/', this.controladorNotas.obtenerNotas)
        this.router.get('/agrupadas', this.controladorNotas.obtenerNotasAgrupadas)
        this.router.get('/estadisticas', this.controladorNotas.obtenerEstadisticasAlumnos)
        this.router.get('/promedio-curso', this.controladorNotas.obtenerPromedioCurso)
        return this.router
    }
}

export default RouterNotas


/*
import express from 'express'

import ControladorNotas from '../controlador/notas.js'

class RouterNotas {

    constructor() {
        this.controladorNotas = new ControladorNotas()
        this.router = express.Router()
    }

    start() {
        this.router.get('/', this.controladorNotas.obtenerNotas)
        this.router.get('/promedio', this.controladorNotas.obtenerPromedioTotal)
        this.router.get('/promedio/:curso', this.controladorNotas.obtenerPromedioCurso)
        this.router.get('/cantidad', this.controladorNotas.obtenerCantidadNotas)
        this.router.get('/cantidad/:curso', this.controladorNotas.obtenerCantidadNotasCurso)
        this.router.get('/baja', this.controladorNotas.obtenerCantidadNotaBaja)
        this.router.get('/alta', this.controladorNotas.obtenerCantidadNotaAlta)
        
        this.router.post('/', this.controladorNotas.guardarNota)

        return this.router
    }
}

export default RouterNotas
*/