import  Nave_Espacial  from "./vista/nave-espacial";
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
const tierra = new Planeta("Tierra", TipoRecurso.Agua, 2);
const marte = new Planeta("Marte", TipoRecurso.Oxigeno, 5);
const luna = new Planeta("Luna", TipoRecurso.Minerales, 1);

// Explorar algunos planetas
tierra.explore();
marte.explore();
luna.explore();

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

const planetaSeleccionado = Usuario([tierra, marte, luna]);
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


