import { Evento, TipEvento } from "../modelo/evento2";

function manejoEvento(tiempo: number, distancia: number, eventos: Evento[]): void {
  console.log(`Simulando viaje espacial por ${tiempo} tiempo y ${distancia} distancia...`);

  eventos.forEach(evento => {
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
  });
}

      export { manejoEvento };
