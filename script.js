// =============================================================
// script.js — Electivos Diseño FAU UChile
// =============================================================
// Contenido:
//  1. Gráfico de barras apiladas  →  #graficoBarras
//  2. Gráfico de torta (focos)    →  #graficoFocos
//  3. Base de datos de electivos  →  baseDeDatos
//  4. Tabla dinámica + buscador   →  #cuerpoTabla / #buscador
// =============================================================


// ─────────────────────────────────────────────────────────────
// 1. GRÁFICO DE BARRAS APILADAS
//    ¿Visualidad y Medios es igual a Diseño Editorial?
// ─────────────────────────────────────────────────────────────

const dataBarras = {
  labels: ['Percepción y Semiótica', 'Curaduría y Narrativas', 'Experimentación y Crítica'],
  datasets: [
    {
      label: 'Enfoque Editorial / Tipográfico',
      data: [2, 3, 0],
      backgroundColor: '#54060E',
      borderWidth: 0
    },
    {
      label: 'Otras Disciplinas',
      data: [4, 3, 6],
      backgroundColor: '#FFC6CC',
      borderWidth: 0
    }
  ]
};

const configBarras = {
  type: 'bar',
  data: dataBarras,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '¿Visualidad y Medios es igual a Diseño Editorial?',
        font: {
          size: 16,
          family: "'Helvetica Neue', 'Arial', sans-serif",
          weight: 'bold'
        },
        padding: { top: 10, bottom: 20 }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Cantidad de Electivos Totales'
        },
        ticks: { stepSize: 1 }
      }
    }
  }
};


// ─────────────────────────────────────────────────────────────
// 2. GRÁFICO DE TORTA — DISTRIBUCIÓN POR FOCO ACADÉMICO
// ─────────────────────────────────────────────────────────────

const dataFocos = {
  labels: [
    'Ciencia y Tecnología',
    'Comunicación y Gestión',
    'Morfología'
  ],
  datasets: [{
    label: 'Cantidad de Asignaturas',
    data: [21, 19, 16],
    backgroundColor: [
      'rgba(166, 25, 46, 0.8)',   // Rojo Carmesí Intenso
      'rgba(210, 105, 80, 0.75)', // Terracota / Ladrillo
      'rgba(240, 180, 185, 0.8)'  // Rosado Suave / Pastel
    ],
    borderColor: [
      'rgba(166, 25, 46, 1)',
      'rgba(210, 105, 80, 1)',
      'rgba(240, 180, 185, 1)'
    ],
    borderWidth: 1.5
  }]
};

const configFocos = {
  type: 'pie',
  data: dataFocos,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: { font: { size: 12 } }
      },
      title: {
        display: true,
        text: 'Distribución de Asignaturas por Foco Académico',
        font: { size: 14, weight: 'bold' }
      }
    }
  }
};


// ─────────────────────────────────────────────────────────────
// 3. BASE DE DATOS DE ELECTIVOS
// ─────────────────────────────────────────────────────────────

const baseDeDatos = [
  { "N° REAL REAL": 1,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Materiales y procesos industriales, desde una perspectiva de ciclo de la vida",                                "COD.": "AUD5I006",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 2,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Bocetaje avanzado para el diseño del producto",                                                                   "COD.": "AUD5I007",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 3,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Herramientas computacionales II, modelamiento paramétrico",                                                        "COD.": "AUD5I008",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 4,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Teoría y práctica del diseño de calzado",                                                                          "COD.": "AUD5I009",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 5,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Innovación para la sostenibilidad",                                                                                "COD.": "AUD5I010",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 6,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Procesos avanzados de fabricación",                                                                                "COD.": "AUD5I011",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 7,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Comunicación, prototipado e implementación de servicios",                                                          "COD.": "AUD5I012",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 8,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Biobased materials for the built environment",                                                                     "COD.": "AUD5I013",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 9,   "MENCIÓN": "Mención I y S",         "ELECTIVO": "Design sketching. Bocetaje para Diseñadores Industriales",                                                         "COD.": "AUD5I014",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 10,  "MENCIÓN": "mención I y S",         "ELECTIVO": "Diseño de accesorios con reinvención de materiales",                                                               "COD.": "AUD5I015",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 11,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Herramientas computacionales III. Análisis y fabricación avanzada asistidos por computador",                      "COD.": "AUD5I016",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 12,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Complementos sostenibles y Joyería contemporánea",                                                                 "COD.": "AUD5I017",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 13,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Creatividad para el Diseño industrial y servicios",                                                                "COD.": "AUD5I018",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 14,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Exploración creativa con los materiales y sus tecnologías",                                                        "COD.": "AUD5I019",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 15,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Enfoques investigativos en Diseño, innovación y creatividad",                                                      "COD.": "AUD5I020, AUD5V020", "CRÉDITOS": 3 },
  { "N° REAL REAL": 16,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Introducción al Desarrollo Front End con HTML, CSS y JavaScript",                                                  "COD.": "AUD5I021, AUD5V021", "CRÉDITOS": 3 },
  { "N° REAL REAL": 17,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Diseño de interfaz electrónica mediante Arduino",                                                                  "COD.": "AUD5I022",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 18,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Gamificación para el Diseño industrial y servicios",                                                               "COD.": "AUD5I023",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 19,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Laboratorio de oficios contemporáneos",                                                                            "COD.": "AUD5I024",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 20,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "BattleBots: Interfacultades",                                                                                     "COD.": "AUD5I025",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 21,  "MENCIÓN": "Troncal mención I y S", "ELECTIVO": "Prototipado y comunicación de experiencias y servicios",                                                           "COD.": "AUD5I026",           "CRÉDITOS": 6 },
  { "N° REAL REAL": 22,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Técnicas de intervención y experimentación textil",                                                                "COD.": "AUD5I027",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 23,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Patrimonio y restauración arquitectónica",                                                                         "COD.": "AUD5I028, AUDIV042", "CRÉDITOS": 3 },
  { "N° REAL REAL": 24,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Gestión y producción de arquitectura interior",                                                                    "COD.": "AUD5I029",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 25,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Artesanías: cultura, técnica y producto.",                                                                         "COD.": "AUD5I031",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 26,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Construcción en madera",                                                                                          "COD.": "AUD5I032",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 27,  "MENCIÓN": "Mención I y S",         "ELECTIVO": "Arquitectura sin Residuos - Diseño, Prefabricación e Industrialización",                                          "COD.": "AUD5I033",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 28,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Introducción a la programación para el Diseño de interacción",                                                    "COD.": "AUD5V0010",          "CRÉDITOS": 3 },
  { "N° REAL REAL": 29,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Animación Digital",                                                                                               "COD.": "AUD5V0011",          "CRÉDITOS": 3 },
  { "N° REAL REAL": 30,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Introducción a la Ilustración",                                                                                   "COD.": "AUD5V0012",          "CRÉDITOS": 3 },
  { "N° REAL REAL": 31,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Diseño editorial",                                                                                                "COD.": "AUD5V006",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 32,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Lenguaje y composición fotográfica para el diseño",                                                                "COD.": "AUD5V007, AUD5V010", "CRÉDITOS": 3 },
  { "N° REAL REAL": 33,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Infografía",                                                                                                      "COD.": "AUD5V008",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 34,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Tipografía",                                                                                                      "COD.": "AUD5V009",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 35,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Tipografía: cultura y sociedad",                                                                                  "COD.": "AUD5V011",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 36,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Diseño y Cultura Visual en Chile",                                                                                "COD.": "AUD5V012",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 37,  "MENCIÓN": "Mención V y M",         "ELECTIVO": "Creatividad y diseño",                                                                                            "COD.": "AUD5V013",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 101, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Crítica cultural, visualidades feministas y disidencias",                                                         "COD.": "AUDIV021",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 102, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Realidad virtual para diseño y arquitectura",                                                                     "COD.": "AUDIV022",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 103, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Diseño automotriz",                                                                                               "COD.": "AUDIV023",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 104, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Internet de las cosas para vivienda social",                                                                      "COD.": "AUDIV024",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 105, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "La interacción del Color; su anatomía y lenguaje",                                                                "COD.": "AUDIV025",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 106, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Sociedad y Moda",                                                                                                 "COD.": "AUDIV026",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 107, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Inteligencia Artificial",                                                                                         "COD.": "AUDIV027",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 108, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Programa Chiloé: Territorio, paisaje y cultura del Archipiélago",                                                "COD.": "AUDIV028",           "CRÉDITOS": 6 },
  { "N° REAL REAL": 109, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Interventions in public space",                                                                                   "COD.": "AUDIV029",           "CRÉDITOS": 6 },
  { "N° REAL REAL": 110, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Produciendo un hábitat accesible",                                                                                "COD.": "AUDIV031",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 111, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Paisajes Energéticos",                                                                                            "COD.": "AUDIV033",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 112, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Taller práctico de experimentación de materiales",                                                                "COD.": "AUDIV034",           "CRÉDITOS": 6 },
  { "N° REAL REAL": 113, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Proceso, creatividad y proyecto",                                                                                 "COD.": "AUDIV035",           "CRÉDITOS": 6 },
  { "N° REAL REAL": 114, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Movilidad Urbana y Ciudad Sustentable",                                                                           "COD.": "AUDIV036",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 115, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Espacio público y ciudades saludables",                                                                           "COD.": "AUDIV037",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 116, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "La ciudad moderna y sus representaciones simbólicas",                                                             "COD.": "AUDIV038",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 117, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Iluminación Natural: diseño eficiente en espacios arquitectónicos",                                               "COD.": "AUDIV039",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 118, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Patrimonio material e inmaterial del Valle Central de Chile",                                                     "COD.": "AUDIV040",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 119, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Geografía feminista",                                                                                             "COD.": "AUDIV041",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 120, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Fundamentos de Economía",                                                                                         "COD.": "AUDIV049",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 121, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Panorama del pensamiento estético",                                                                               "COD.": "AUDIV050",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 122, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "English for Work Purposes",                                                                                       "COD.": "AUDIV051",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 123, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Procesos digitales",                                                                                              "COD.": "AUDIV052",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 124, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Fundamentos de Diseño Digital",                                                                                   "COD.": "AUDIV053",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 125, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Patrimonio + Turismo: su dimensión arquitectónica y cultura",                                                     "COD.": "AUDIV054",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 126, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Entorno construido, experiencia urbana y bienestar",                                                              "COD.": "AUDIV055",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 127, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Curso interdisciplinario PIES (Programa de Innovación a Emprendimiento Sostenible)",                              "COD.": "AUDIV056",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 128, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Croquis y dibujo arquitectónico en 100 páginas",                                                                  "COD.": "AUDIV057",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 129, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Muralismo en Chile: espacio público y contexto político",                                                         "COD.": "AUDIV058",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 130, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Geografías participativas; investigación, acción y divulgación comunitaria",                                      "COD.": "AUDIV060",           "CRÉDITOS": 3 },
  { "N° REAL REAL": 131, "MENCIÓN": "Ambas Menciones",       "ELECTIVO": "Territorios periféricos: representaciones, agenciamientos, convivencias",                                         "COD.": "AUDIV061",           "CRÉDITOS": 3 }
];


// ─────────────────────────────────────────────────────────────
// 4. TABLA DINÁMICA + BUSCADOR
// ─────────────────────────────────────────────────────────────

/**
 * Renderiza las filas de la tabla según el arreglo recibido.
 * @param {Array} datos
 */
function mostrarDatos(datos) {
  const cuerpoTabla = document.getElementById('cuerpoTabla');
  if (!cuerpoTabla) return;

  cuerpoTabla.innerHTML = '';

  datos.forEach(item => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td><strong>${item.ELECTIVO}</strong></td>
      <td>${item['MENCIÓN'] || '–'}</td>
      <td><code>${item['COD.']}</code></td>
      <td>${item['CRÉDITOS']}</td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}


// ─────────────────────────────────────────────────────────────
// INICIALIZACIÓN — se ejecuta una vez que el DOM está listo
// ─────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {

  // Gráfico de barras apiladas
  const canvasBarras = document.getElementById('graficoBarras');
  if (canvasBarras) {
    new Chart(canvasBarras.getContext('2d'), configBarras);
  }

  // Gráfico de torta (focos académicos)
  const canvasFocos = document.getElementById('graficoFocos');
  if (canvasFocos) {
    new Chart(canvasFocos.getContext('2d'), configFocos);
  }

  // Tabla inicial con todos los electivos
  mostrarDatos(baseDeDatos);

  // Buscador en tiempo real
  const inputBuscador = document.getElementById('buscador');
  if (inputBuscador) {
    inputBuscador.addEventListener('input', function () {
      const textoBuscado = this.value.toLowerCase();

      const datosFiltrados = baseDeDatos.filter(item => {
        const nombre  = (item.ELECTIVO      || '').toLowerCase();
        const mencion = (item['MENCIÓN']    || '').toLowerCase();
        const codigo  = (item['COD.']       || '').toLowerCase();
        return nombre.includes(textoBuscado) ||
               mencion.includes(textoBuscado) ||
               codigo.includes(textoBuscado);
      });

      mostrarDatos(datosFiltrados);
    });
  }

});
