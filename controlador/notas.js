import ServicioNotas from '../servicio/notas.js'

class ControladorNotas {

    constructor() {
        this.servicioNotas = new ServicioNotas()
    }

    guardarNota = async (req,res) => {
        try {
            let nota = req.body
            let notaGuardada = await this.servicioNotas.guardarNota(nota) 
            res.json(notaGuardada)
        }
        catch(error) {
            console.log('error obtenerNotas', error)
        }
    }

    obtenerNotas = async (req,res) => { 
        try {
            const notas = await this.servicioNotas.obtenerNotas()
            res.send(notas)
        }
        catch(error) {
            console.log('error obtenerNotas', error)
        }
    }

    obtenerNotasAgrupadas = async (req,res) => {
        try{
            const notasAgrupadas = await this.servicioNotas.obtenerNotasAgrupadas()
            res.send({notasAgrupadas})
        }
        catch(error){
            console.log('error obtenerNotasAgrupadas', error)
        }
    }

    obtenerEstadisticasAlumnos = async (req,res) =>  {
        try{
            const estadisticas = await this.servicioNotas.obtenerEstadisticasAlumnos()
            res.send({estadisticas})
        }
        catch(error){
            console.log('error obtenerEstadisticasAlumnos', error)
        }
    }

    obtenerPromedioCurso = async (req,res) => {
        try{
            const promedio = await this.servicioNotas.obtenerPromedioCurso()
            res,send(promedio)
        }
        catch(error){
            console.log('error obtenerPromedioCurso', error)
        }
    }
}

export default ControladorNotas
