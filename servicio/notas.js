import NotasMem from '../model/DAOs/notasMem.js'

class ServicioNotas {

    constructor() {
        this.notasMem = new NotasMem()
    }

    agruparNotas = () => {
        const notas = this.notasMem.obtenerNotas();
        const agrupado = {};
        notas.forEach(({ nombre, apellido, nota }) => {
          const clave = `${nombre} ${apellido}`;
          if (!agrupado[clave]) agrupado[clave] = [];
          agrupado[clave].push(nota);
        });
      
        return Object.entries(agrupado).map(([clave, notas]) => {
          const [nombre, apellido] = clave.split(' ');
          return { nombre, apellido, notas };
        });
      };

    guardarNota = async(req,res) => {
        const { nombre, apellido, nota } = req.body;
        if (!nombre || !apellido || nota == undefined || isNaN(nota) || nota < 0 || nota > 10) {
            return res.status(400).json({ errorMsg: 'Los datos ingresados no son válidos.' });
        }
        const nuevaNota = { id: nextId++, nombre, apellido, nota: parseFloat(nota) };
        this.servicioNotas.guardarNota(nuevaNota);

        console.log(`Nota registrada: ${JSON.stringify(nuevaNota)}`);
        res.status(201).json(nuevaNota);
    }

    async obtenerNotas() {
        return await this.notasMem.obtenerNotas()
    }

    obtenerNotasAgrupadas = async (req, res) => {
        const agrupadas = this.agruparNotas()
        res.json(agrupadas)
    }

    obtenerEstadisticasAlumnos = async (req, res) => {
        const agrupadas = agruparNotas();
        const estadisticas = agrupadas.map(({ nombre, apellido, notas }) => {
        const cantidad = notas.length;
        const suma = notas.reduce((acc, val) => acc + val, 0);
        const promedio = parseFloat((suma / cantidad).toFixed(2));
        const minima = Math.min(...notas);
        const maxima = Math.max(...notas);

        return { nombre, apellido, promedio, cantidad, minima, maxima };
    });

    res.json(estadisticas);
    }

    obtenerPromedioCurso = (req,res) => {
        if (notas.length === 0) {
            return res.json({ promedio: 0 });
        }
        const sumaTotal = notas.reduce((acc, { nota }) => acc + nota, 0);
        const promedio = parseFloat((sumaTotal / notas.length).toFixed(2));
        res.json({ promedio });
    }
}

export default ServicioNotas
