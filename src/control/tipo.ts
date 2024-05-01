import { Evento, TipEvento} from "../modelo/evento2";
function manejoEvento1(evento: Evento): void {
  switch (evento.tipo) {
    case TipEvento.Asteroide:
      console.log(`¡Daño causado por asteroide!: ${evento.peligroso}`);
      break;
    case TipEvento.Aliens:
      console.log(`¡Se aproxima un alien!: ${evento.peligroso}`);
      break;
    case TipEvento.AgujeroNegro:
      console.log(`¡ Se aproxima un agujero negro!: ${evento.peligroso}`);
      break;
    default:
      console.log(`Se desconoce`);
  }
}

export { manejoEvento1 };
