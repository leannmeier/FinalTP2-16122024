class NotasMem {

    constructor() {
        this.notas = [
            {"id" : 1, "nombre": "Juan", "apellido": "Perez","nota": 8,},
            {"id" : 2, "nombre": "Ana", "apellido": "Suarez", "nota": 9,},
            {"id" : 3, "nombre": "Juan", "apellido": "Perez", "nota": 5,},
            {"id" : 4, "nombre": "Pedro", "apellido": "Gomez", "nota": 6,},
            {"id" : 5, "nombre": "Ana", "apellido": "Suarez", "nota": 10,},
        ]
    }

    getNextId(notas) {
        const lg = notas.length
        return lg? parseInt(notas[lg-1]?.id || 0) + 1 : 1
    }

    guardarNota = async nota => {
        try {
            const id = this.getNextId(this.notas)
            const notaNew = {id, ...nota}
            this.notas.push(notaNew)
            return notaNew
        }
        catch(error) {
            console.log('error en guardarNota:',error)
            return {}
        }
    }

    obtenerNotas = async () => {
        try {
            return this.notas
        }
        catch(error) {
            console.log('error en obtenerNotas', error)
            return []
        }
    }
}

export default NotasMem