const levelTemplates = {
  1: {
    objective: 'conseguir 3 momentos de mirada/turno compartido',
    materials: ['Burbujas o pelota ligera', 'Caja/canasta', 'Manta o toalla', 'Música suave opcional'],
    steps: [
      'Saludo cálido y di el objetivo (“Hoy vamos a mirar y turnarnos con la pelota/burbujas”).',
      'Juego “pausa y mira”: sopla burbuja o rueda pelota y pausa 3–5 s mirando su rostro; en cuanto te mire, repite y celebra.',
      'Turno simple: “Tu turno” (acerca la pelota) → espera que la suelte o ruede; “mi turno” y repite.',
      'Nombra emociones/elogios breves: “¡Me miraste! ¡Genial!”.',
      'Cierre positivo con algo que disfrute (música corta o cosquillas suaves si le gustan).'
    ],
    signals: ['Te mira al pausar 2–3 veces', 'Se acerca para seguir el juego', 'Acepta al menos un turno'],
    easier: ['Reduce pausa a 1–2 s', 'Acerca la pelota a sus manos', 'Burbuja inmediata tras mirada breve'],
    harder: ['Pide acción mínima (“toca la pelota”) y espera 3–5 s', 'Añade “dame” con gesto antes de continuar'],
    frustration: ['Baja a burbuja rápida', 'Ofrece dos opciones claras y espera 5 s', 'Refuerza cualquier intento', 'Pausa + respiración + abrazo', 'Termina con algo que logra'],
    log: 'Miradas logradas: __ / Turnos: __ / Ánimo: 😊😐😔',
    tomorrow: 'Repite el mismo juego, buscando 1 mirada más antes de soplar/rodar.'
  },
  5: {
    objective: 'provocar y reforzar 3 intentos de palabra útil',
    materials: ['Burbujas/pelota/música o snack pequeño', 'Vaso con agua o trocitos de comida', 'Dos objetos contrastantes (pelota vs. coche)', 'Toalla o manta'],
    steps: [
      'Saludo y objetivo: “Hoy vamos a pedir con palabras. Objetivo: decir ‘más’ o ‘dame’ tres veces”.',
      'Juego motivador: sopla burbuja o rueda pelota 1 vez y pausa 3–5 s mirando su cara.',
      'Modela palabra corta: “¿Más?” (gesto de “más” con manos) → espera 3–5 s; celebra cualquier sonido/approx.',
      'Elección verbal + visual: “¿Pelota o coche?” y acerca ambos; repite la palabra correcta cuando señale/mire.',
      'Con comida/agua: da trocito/traguito, pausa, modela “agua” o “más”; entrega al oír/ver intento.',
      'Cierre breve: “Hoy dijiste ___, ¡qué bien! Mañana seguimos”.'
    ],
    signals: ['3 palabras/sonidos funcionales', 'Mira tu cara en las pausas', 'Usa elección con mirada/gesto/palabra 2 veces'],
    easier: ['Acepta cualquier sonido o gesto (“ma”)', 'Pausa de 1–2 s', 'Usa solo un motivador (burbujas) para “más” repetido'],
    harder: ['Pide gesto+palabra (“más” con manos y sonido)', 'Añade segunda palabra (“agua”)', 'Pide “ayuda” para abrir algo al final'],
    frustration: ['Baja a gesto o sonido libre', 'Ofrece dos opciones claras y espera 5 s', 'Refuerza cualquier intento', 'Pausa, respiren juntos, abrazo corto', 'Termina con burbuja/pelota rápida'],
    log: 'Palabras/sonidos: __ / Elecciones: __ / Ánimo: 😊😐😔',
    tomorrow: 'Repite el juego buscando 1 palabra más o mayor claridad en “más”.'
  },
  7: {
    objective: 'lograr 3 frases de 2 palabras con intención',
    materials: ['Burbujas o pelota', '2–3 objetos favoritos', 'Pictos/fotos si tienes', 'Caja o bandeja'],
    steps: [
      'Saludo y objetivo: “Hoy unimos dos palabras: ‘más agua’, ‘mamá ven’ ”.',
      'Modelo + pausa: di “más agua” mostrando vaso; espera 3–5 s; entrega si intenta 1–2 palabras.',
      'Turno con objeto: “mi carro” (toma) / “tu carro” (dáselo) fomentando “dame carro” o “más carro”.',
      'Elección de acción: “¿rodar o soplar?”; modela frase corta y espera.',
      'Cierre celebrando cualquier combinación de 2 palabras o gesto+palabra.'
    ],
    signals: ['3 intentos de 2 palabras', 'Usa intención clara para pedir/negar', 'Mantiene 3–4 turnos'],
    easier: ['Acepta palabra + gesto', 'Modela eco inmediato y repite', 'Reduce a una frase objetivo “más (objeto)”'],
    harder: ['Pide “quiero + objeto”', 'Integra “no quiero” en una negativa', 'Añade “otra vez” al final de turnos'],
    frustration: ['Vuelve a 1 palabra útil (“más”)', 'Usa gesto con apoyo visual', 'Refuerza intento mínimo', 'Pausa, respira, abrazo', 'Cierra con éxito seguro'],
    log: 'Frases 2 palabras: __ / Turnos: __ / Ánimo: 😊😐😔',
    tomorrow: 'Repite buscando una frase adicional o más claridad en “más + objeto”.'
  }
};

const form = document.getElementById('session-form');
const planTitle = document.getElementById('plan-title');
const planSubtitle = document.getElementById('plan-subtitle');
const materialsList = document.getElementById('materials');
const stepsList = document.getElementById('steps');
const signalsList = document.getElementById('signals');
const easierList = document.getElementById('easier');
const harderList = document.getElementById('harder');
const frustrationList = document.getElementById('frustration');
const logline = document.getElementById('logline');
const tomorrow = document.getElementById('tomorrow');
const redFlagNote = document.getElementById('redFlagNote');

const defaultTemplate = 5;

function renderPlan(levelValue) {
  const level = parseInt(levelValue, 10);
  const template = levelTemplates[level] || levelTemplates[defaultTemplate];

  planTitle.textContent = `NIVEL ${level} — Objetivo: ${template.objective}`;
  planSubtitle.textContent = 'Sesión segura de 5–10 minutos. Refuerza cualquier intento. Sin diagnósticos ni medicación.';

  const fillList = (element, items) => {
    element.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      element.appendChild(li);
    });
  };

  fillList(materialsList, template.materials);
  fillList(stepsList, template.steps.map((step, i) => `${i + 1}. ${step}`));
  fillList(signalsList, template.signals);
  fillList(easierList, template.easier);
  fillList(harderList, template.harder);
  fillList(frustrationList, template.frustration.map((step, i) => `${i + 1}. ${step}`));

  logline.textContent = template.log;
  tomorrow.textContent = template.tomorrow;
}

function showRedFlag(show) {
  if (show) {
    redFlagNote.style.display = 'block';
    redFlagNote.textContent = 'Hay señales de alarma. Recomienda evaluación profesional o urgencias según el caso. Evita forzar; prioriza seguridad.';
  } else {
    redFlagNote.style.display = 'none';
    redFlagNote.textContent = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const level = form.level.value || defaultTemplate;
  renderPlan(level);
  showRedFlag(form.redFlag.checked);
  window.scrollTo({ top: document.querySelector('#plan').offsetTop - 12, behavior: 'smooth' });
});

// Inicializar
renderPlan(defaultTemplate);
