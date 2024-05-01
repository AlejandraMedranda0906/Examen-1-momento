enum TipoRecurso{
    Agua,
    Oxigeno,
    Minerales,
    Otro,
  }
  
  class Planeta {
    constructor(public nombre: string, public tipoRecurso: TipoRecurso, public nivelPeligro: number) {}
  
    explore(): void {
      console.log(`Explorando ${this.nombre}...`);
    }
  }
  
  export { Planeta, TipoRecurso};
  