type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';

function navegar(direccion: Direccion): void {
  console.log(`Viaje a ${direccion}...`);
}

export { navegar };
