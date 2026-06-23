// =======================================================
// CONFIGURACIÓN DEL GRÁFICO DE FOCOs
// =======================================================

// 1. Datos procesados del PDF
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
      'rgba(166, 25, 46, 0.8)',   // Rojo Carmesí Intenso
      'rgba(210, 105, 80, 0.75)',  // Terracota / Ladrillo
      'rgba(240, 180, 185, 0.8)'   // Rosado Suave / Pastel
    ],
    borderColor: [
      'rgba(166, 25, 46, 1)',
      'rgba(210, 105, 80, 1)',
      'rgba(240, 180, 185, 1)'
    ],
    borderWidth: 1.5
  }]
};

// 2. Objeto de configuración gráfico tipo 'pie'
const configFocos = {
  type: 'pie',
  data: dataFocos,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right', // ordenada a la derecha
        labels: {
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Distribución de Asignaturas por Foco Académico',
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    }
  }
};

// 3. Inicialización final del gráfico en el canvas 
const ctxFocos = document.getElementById('graficoFocos').getContext('2d');
new Chart(ctxFocos, configFocos);
