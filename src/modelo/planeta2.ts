enum planeta2 {
    Agua,
    Oxigeno,
    Minerales,
    Otro,
  }
  
  class Planeta {
    constructor(public nombre: string, public tipoRecurso: planeta2, public nivelPeligro: number) {}
  
    explore(): void {
      console.log(`Explorando ${this.nombre}...`);
    }
  }
  
  export { Planeta, planeta2 };
  