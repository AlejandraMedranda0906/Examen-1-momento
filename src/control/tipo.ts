import { Evento, Evento2} from "../modelo/evento2";
function manejoEvento(evento: Evento): void {
  switch (evento.tipo) {
    case Evento2.Asteroide:
      console.log(`¡Daño causado por asteroide!: ${evento.peligroso}`);
      break;
    case Evento2.Aliens:
      console.log(`¡Se aproxima un alien!: ${evento.peligroso}`);
      break;
    case Evento2.AgujeroNegro:
      console.log(`¡ Se aproxima un agujero negro!: ${evento.peligroso}`);
      break;
    default:
      console.log(`Se desconoce`);
  }
}

export { manejoEvento };
