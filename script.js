// Nuevos datos del Excel
const dataFocos = {
  labels: [
    'Ciencia y Tecnología', 
    'Comunicación y Gestión', 
    'Morfología'
  ],
  datasets: [{
    label: 'Cantidad de Asignaturas',
    data: [21, 19, 16], // Conteo archivo PDF
    backgroundColor: [
      'rgba(166, 25, 46, 0.8)',   // Rojo Carmesí Intenso (Fuerte)
      'rgba(210, 105, 80, 0.75)',  // Terracota / Ladrillo (Medio)
      'rgba(240, 180, 185, 0.8)'   // Rosado Suave / Pastel (Claro)
    ],
    borderColor: [
      'rgba(166, 25, 46, 1)',
      'rgba(210, 105, 80, 1)',
      'rgba(240, 180, 185, 1)'
    ],
    borderWidth: 1.5
  }]
};
