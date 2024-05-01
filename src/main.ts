import  Nave_Espacial  from "./vista/nave-space";
import { Planeta, TipoRecurso } from "./modelo/planeta2";
import { Evento, TipEvento } from "./modelo/evento2";
import { navegar } from "./control/direccion";
import { ColeccionRecursos } from "./control/funcion";
import { Usuario } from "./control/usuario";
import { simulacionTiempo } from "./control/simulacion"
import { manejoEvento1 } from "./control/tipo";
// Instancia de la nave espacial
const mySpaceship: Nave_Espacial = {
  salud: 100,
  capacidadDeCarga: 200,
  velocidad: 10,
};

// Creacion de planetas
const mercurio = new Planeta("mercurio", TipoRecurso.Agua, 2);
const venus = new Planeta("venus", TipoRecurso.Oxigeno, 5);
const tierra= new Planeta("tierra", TipoRecurso.Minerales, 1);

// Explorar algunos planetas
mercurio.explore();
venus.explore();
tierra.explore();

// Crear algunos eventos
const asteroide = new Evento(TipEvento.Asteroide, 8);
const aliens = new Evento(TipEvento.Aliens, 6);
const agujeroNegro = new Evento(TipEvento.AgujeroNegro, 3);

// Manejar eventos
manejoEvento1(asteroide);
manejoEvento1(aliens);
manejoEvento1(agujeroNegro);

// Navegar en diferentes direcciones
navegar('Norte');
navegar('Este');
navegar('Sur');
navegar('Oeste');

simulacionTiempo(5);

const planetaSeleccionado = Usuario([tierra, mercurio, venus]);
console.log(`Ha seleccionado viajar a ${planetaSeleccionado.nombre}`);

const recursoColeccionado = new ColeccionRecursos<string>();

const recursosDisponibles = [
  { recurso: 'Agua', maxVeces: 3 },
  { recurso: 'Oxigeno', maxVeces: 4 },
  { recurso: 'Minerales', maxVeces: 2 }
];

for (const recursoInfo of recursosDisponibles) {
  const cantidadRecoleccion = Math.floor(Math.random() * (recursoInfo.maxVeces + 4)); 
  for (let i = 0; i < cantidadRecoleccion; i++) {
    recursoColeccionado.add(recursoInfo.recurso);
  }
}
console.log("Recursos coleccionados:", recursoColeccionado.getAll());


