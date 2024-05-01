import { Evento, Evento2 } from "../modelo/evento2";

function simularSpace(tiempo: number, distancia: number, eventos: Evento[]): void {
  console.log(`Simulando viaje espacial por ${tiempo} tiempo y ${distancia} distancia...`);

  eventos.forEach(evento => {
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
  });
}

      export { simularSpace };
