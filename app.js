// Translation Database
const translations = {
  ru: {
    nav_calculator: "Калькулятор",
    nav_nodes: "Статус серверов",
    nav_advantages: "Преимущества",
    nav_benchmarks: "Тесты",
    cta_free_test: "Тест-драйв",
    
    hero_badge: "🔥 Гарантия лучшей цены в СНГ",
    hero_title: "Получите 1 час рендеринга бесплатно <br><span class='gradient-text'>на RTX 4090</span>",
    hero_subtitle: "Сверхмощная GPU рендер-ферма с гарантией лучшей цены в СНГ. Полноценная шина PCI-E x16 без задержек. Убедитесь в скорости прямо сейчас!",
    hero_cta_primary: "Запустить бесплатный тест",
    hero_cta_secondary: "Рассчитать стоимость",
    
    feat_1_title: "100% PCI-E x16",
    feat_1_desc: "Без тормозов при загрузке текстур",
    feat_2_title: "От 50 руб/час",
    feat_2_desc: "Найдете дешевле — снизим цену",
    feat_3_title: "Любой софт",
    feat_3_desc: "Blender, Octane, Redshift и др.",
    
    card_render_speed: "Скорость рендера",
    
    calc_title: "Интерактивный калькулятор",
    calc_subtitle: "Выберите параметры серверов и мгновенно оцените ваш бюджет со скидкой за объем",
    calc_label_gpu: "Модель видеокарты",
    calc_label_gpus_count: "Количество видеокарт",
    calc_label_hours: "Время рендеринга (в часах)",
    
    calc_summary_title: "Итоговый расчет",
    calc_no_discount: "Скидка 0%",
    calc_discount_label: "Скидка {val}%",
    calc_price_from: "всего за проект",
    calc_base_cost: "Базовая стоимость:",
    calc_savings: "Ваша экономия:",
    calc_discount_scale_title: "Шкала оптовых скидок:",
    calc_cta_order: "Забронировать мощность",
    
    nodes_title: "Мониторинг серверов",
    nodes_subtitle: "Текущая загрузка оборудования в реальном времени. Все сервера подключены через PCI-E x16.",
    
    adv_title: "Честные х16 линии PCI-E",
    adv_subtitle: "Почему дешевые фермы от бывших майнеров рендерят медленнее и стоят дороже",
    adv_our_tag: "Решение F1 RENDER",
    adv_our_title: "Профессиональное железо (х16)",
    adv_our_l1_title: "Прямое подключение в разъем x16:",
    adv_our_l1_desc: "Пропускная способность до 32 ГБ/с. Сцены загружаются мгновенно.",
    adv_our_l2_title: "Максимальный лимит мощности (TDP):",
    adv_our_l2_desc: "Никакого даунвольтинга. Карты работают на частотах завода-изготовителя.",
    adv_our_l3_title: "Высокочастотные CPU:",
    adv_our_l3_desc: "Быстрая подготовка сцены (pre-processing) и кеширование кадров в однопотоке.",
    
    adv_comp_tag: "Типичная майнерская ферма",
    adv_comp_title: "Сборки на майнинг-райзерах (х1)",
    adv_comp_l1_title: "Подключение через райзер x1:",
    adv_comp_l1_desc: "Скорость шины в 16 раз ниже. Огромный боттлнек при загрузке 4К-текстур в память.",
    adv_comp_l2_title: "Жесткий даунвольтинг карт:",
    adv_comp_l2_desc: "Урезание энергопотребления ради экономии розеток снижает чистую скорость на 10-20%.",
    adv_comp_l3_title: "Дешевые медленные процессоры:",
    adv_comp_l3_desc: "Процессор не успевает обрабатывать сцену между кадрами. Видеокарты простаивают.",
    adv_exp_title: "💡 Как это влияет на ваш бюджет?",
    adv_exp_desc: "Рендер-фермы с дешевыми видеокартами на райзерах могут стоить на 10% дешевле в час, но из-за медленной шины PCI-E x1 подготовка и рендеринг каждого кадра анимации длится на 30-40% дольше. В итоге вы переплачиваете за общее время аренды и теряете драгоценные часы. У нас вы платите только за чистую, бескомпромиссную скорость.",
    
    bench_title: "Результаты бенчмарков",
    bench_subtitle: "Сравнение скорости рендеринга тестовых сцен на наших серверах",
    
    banner_title: "Убедитесь в скорости лично",
    banner_subtitle: "Мы бесплатно предоставим 1 тестовый час на серверах RTX 4090 для замера скорости вашего проекта.",
    banner_cta: "Начать бесплатный тест",
    
    footer_desc: "Профессиональный сервис GPU-рендеринга с гарантией лучшей цены и высокой производительности. Работаем напрямую без посредников.",
    footer_title_links: "Навигация",
    footer_title_contacts: "Контакты и связь",
    footer_lowest_price: "Найдете дешевле — снизим цену.",
    footer_agency_watermark: "Сделано в",
    
    modal_title: "Заявка на бесплатный тест",
    modal_desc: "Заполните форму, и мы предоставим вам доступ к серверу с 1 часом бесплатного рендеринга.",
    modal_label_name: "Ваше имя",
    modal_label_method: "Предпочтительный способ связи",
    modal_label_email: "Email",
    modal_label_gpu: "Какая карта нужна?",
    modal_label_software: "Ваш 3D софт / Рендерер",
    modal_label_details: "Детали проекта (размер сцены, анимация/статика, сроки)",
    modal_submit: "Отправить заявку",
    sticky_cta_order: "Заказать",
    
    success_title: "Заявка успешно отправлена!",
    success_desc: "Спасибо! Наш технический специалист свяжется с вами в Telegram или WhatsApp в течение 10–15 минут для выдачи доступов.",
    success_close: "Закрыть окно",
    
    node_card_gpu: "Карты:",
    node_card_load: "Нагрузка:",
    node_card_temp: "Темп:",
    node_status_rendering: "Рендерит",
    node_status_idle: "Свободен"
  },
  en: {
    nav_calculator: "Calculator",
    nav_nodes: "Server Status",
    nav_advantages: "Advantages",
    nav_benchmarks: "Benchmarks",
    cta_free_test: "Test Drive",
    
    hero_badge: "🔥 Best price guarantee in CIS",
    hero_title: "Get 1 hour of rendering free <br><span class='gradient-text'>on RTX 4090 cards</span>",
    hero_subtitle: "High-performance GPU render farm with a best price guarantee in CIS. Full PCI-E x16 direct bus. Benchmark your project today!",
    hero_cta_primary: "Start Free Test",
    hero_cta_secondary: "Calculate Cost",
    
    feat_1_title: "100% PCI-E x16",
    feat_1_desc: "No bottlenecks during texture loading",
    feat_2_title: "From $0.55/hour",
    feat_2_desc: "Find it cheaper — we will match & beat it",
    feat_3_title: "Any Software",
    feat_3_desc: "Blender, Octane, Redshift & more",
    
    card_render_speed: "Render Speed",
    
    calc_title: "Interactive Calculator",
    calc_subtitle: "Select server configurations and instantly estimate your budget with volume discounts",
    calc_label_gpu: "GPU Model",
    calc_label_gpus_count: "Number of GPUs",
    calc_label_hours: "Rendering Time (in hours)",
    
    calc_summary_title: "Final Estimate",
    calc_no_discount: "Discount 0%",
    calc_discount_label: "Discount {val}%",
    calc_price_from: "total project cost",
    calc_base_cost: "Base Cost:",
    calc_savings: "Your Savings:",
    calc_discount_scale_title: "Wholesale Discount Scale:",
    calc_cta_order: "Book Render Power",
    
    nodes_title: "Server Monitoring",
    nodes_subtitle: "Current live load of hardware. All nodes are connected directly via PCI-E x16 lanes.",
    
    adv_title: "Honest PCI-E x16 Lanes",
    adv_subtitle: "Why cheap miner rigs render slower and end up costing you more",
    adv_our_tag: "F1 RENDER Solution",
    adv_our_title: "Professional Hardware (x16)",
    adv_our_l1_title: "Direct x16 Connection:",
    adv_our_l1_desc: "Up to 32 GB/s bandwidth. Scenes load and compile instantly.",
    adv_our_l2_title: "Maximum Power Limit (TDP):",
    adv_our_l2_desc: "No downvolting. Video cards operate at full clock speeds.",
    adv_our_l3_title: "High-Frequency CPUs:",
    adv_our_l3_desc: "Ultra-fast scene pre-processing and frame preparation in single-thread operations.",
    
    adv_comp_tag: "Typical Miner Rig",
    adv_comp_title: "GPU Rigs on PCI-E x1 Risers",
    adv_comp_l1_title: "Connection via x1 Riser:",
    adv_comp_l1_desc: "16x slower bus speed. Huge bottleneck when transferring large 4K textures.",
    adv_comp_l2_title: "Severe GPU Downvolting:",
    adv_comp_l2_desc: "Cutting power limits to save electricity drops raw performance by 10-20%.",
    adv_comp_l3_title: "Cheap Low-Speed CPUs:",
    adv_comp_l3_desc: "Processors fail to process frames fast enough. Expensive GPUs sit idle waiting.",
    adv_exp_title: "💡 How does this impact your budget?",
    adv_exp_desc: "Render farms using cheap mining hardware on risers might charge 10% less per hour, but due to the slow PCI-E x1 bus, loading and preparing each frame takes 30-40% longer. Ultimately, you pay more for total lease time. With us, you pay strictly for raw, uncompromised speed.",
    
    bench_title: "Benchmark Results",
    bench_subtitle: "Comparison of render times for popular test scenes on our servers",
    
    banner_title: "Check the speed yourself",
    banner_subtitle: "We provide 1 free test hour on our RTX 4090 servers to benchmark your scene.",
    banner_cta: "Claim Free Hour",
    
    footer_desc: "Professional GPU render service with a best price guarantee and top performance. Direct lease, no middlemen.",
    footer_title_links: "Navigation",
    footer_title_contacts: "Get in Touch",
    footer_lowest_price: "Find it cheaper — we will match it.",
    footer_agency_watermark: "Made by",
    
    modal_title: "Free Test Request",
    modal_desc: "Fill out the form below, and we will set up a server node with 1 free hour of rendering.",
    modal_label_name: "Your Name",
    modal_label_method: "Preferred contact method",
    modal_label_email: "Email",
    modal_label_gpu: "Requested GPU",
    modal_label_software: "3D Software & Renderer",
    modal_label_details: "Project details (scene size, animation vs static, deadlines)",
    modal_submit: "Request Free Test",
    sticky_cta_order: "Order",
    
    success_title: "Request Sent Successfully!",
    success_desc: "Thank you! Our technical specialist will contact you via Telegram or WhatsApp in 10-15 minutes to grant server access.",
    success_close: "Close Window",
    
    node_card_gpu: "GPUs:",
    node_card_load: "Load:",
    node_card_temp: "Temp:",
    node_status_rendering: "Rendering",
    node_status_idle: "Available"
  }
};

// Global App State
let currentLang = 'ru';

// 1. Accent Theme Toggler
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const theme = btn.getAttribute('data-theme');
    document.body.className = `theme-${theme}`;
  });
});

// 2. Language Switcher Logic
const langToggleBtn = document.getElementById('langToggle');
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  langToggleBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
  document.documentElement.lang = currentLang;
  
  applyTranslations();
  updateContactInput(); // Translate the dynamic contact inputs
  calculatePrice(); // Recalculate with new currency values
  renderNodes();    // Refresh nodes text translations
});

function applyTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[currentLang][key]) {
      // If it contains html tags, set innerHTML, else textContent
      if (translations[currentLang][key].includes('<')) {
        el.innerHTML = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });
}

// 3. Calculator Logic
const gpuModelSelect = document.getElementById('gpuModel');
const gpuCountInput = document.getElementById('gpuCount');
const gpuCountVal = document.getElementById('gpuCountVal');
const renderHoursInput = document.getElementById('renderHours');
const renderHoursVal = document.getElementById('renderHoursVal');

const totalPriceEl = document.getElementById('totalPrice');
const currencyLabelEl = document.getElementById('currencyLabel');
const hourlyRateTextEl = document.getElementById('hourlyRateText');
const basePriceEl = document.getElementById('basePrice');
const savingsAmountEl = document.getElementById('savingsAmount');
const discountBadgeEl = document.getElementById('discountBadge');
const discountProgressEl = document.getElementById('discountProgress');

// Rates database:
// RU (RUB per card hour) | EN (USD per card hour)
const pricingRates = {
  rtx4090: { ru: 100, en: 1.10 },
  rtx3090: { ru: 60, en: 0.65 },
  rtx3080: { ru: 50, en: 0.55 }
};

function calculatePrice() {
  const gpu = gpuModelSelect.value;
  const count = parseInt(gpuCountInput.value);
  const hours = parseInt(renderHoursInput.value);
  
  // Update slider displays
  gpuCountVal.textContent = count;
  renderHoursVal.textContent = currentLang === 'ru' ? `${hours} ч` : `${hours} hrs`;
  
  // Base rates selection
  const ratePerCard = pricingRates[gpu][currentLang];
  const totalBasePrice = ratePerCard * count * hours;
  
  // Discount rates definition based on total cost in RUB
  // We compute thresholds in equivalent currency
  const totalBasePriceRUB = pricingRates[gpu]['ru'] * count * hours;
  
  let discountPercentage = 0;
  if (totalBasePriceRUB >= 50000) {
    discountPercentage = 30;
  } else if (totalBasePriceRUB >= 30000) {
    discountPercentage = 20;
  } else if (totalBasePriceRUB >= 10000) {
    discountPercentage = 10;
  }
  
  const discountMultiplier = (100 - discountPercentage) / 100;
  const finalPrice = totalBasePrice * discountMultiplier;
  const savings = totalBasePrice - finalPrice;
  
  // Format values
  const currencySign = currentLang === 'ru' ? '₽' : '$';
  currencyLabelEl.textContent = currencySign;
  
  // Render prices formatted
  let formattedFinalPrice = '';
  if (currentLang === 'ru') {
    formattedFinalPrice = Math.round(finalPrice).toLocaleString('ru-RU');
    totalPriceEl.textContent = formattedFinalPrice;
    basePriceEl.textContent = `${Math.round(totalBasePrice).toLocaleString('ru-RU')} ₽`;
    savingsAmountEl.textContent = `${Math.round(savings).toLocaleString('ru-RU')} ₽`;
    
    // Update hourly rate string
    const hourlyCombined = ratePerCard * count;
    hourlyRateTextEl.textContent = `Сервер (${count} x ${gpu.toUpperCase().replace('RTX', 'RTX ')}) = ${hourlyCombined} ₽ / час`;
  } else {
    formattedFinalPrice = finalPrice.toFixed(1);
    totalPriceEl.textContent = formattedFinalPrice;
    basePriceEl.textContent = `$${totalBasePrice.toFixed(1)}`;
    savingsAmountEl.textContent = `$${savings.toFixed(1)}`;
    
    // Update hourly rate string
    const hourlyCombined = ratePerCard * count;
    hourlyRateTextEl.textContent = `Server (${count} x ${gpu.toUpperCase().replace('RTX', 'RTX ')}) = $${hourlyCombined.toFixed(2)} / hour`;
  }
  
  // Update Sticky Bar for mobile
  const stickyGpuInfoEl = document.getElementById('stickyGpuInfo');
  const stickyPriceEl = document.getElementById('stickyPrice');
  if (stickyGpuInfoEl && stickyPriceEl) {
    const gpuLabel = gpu.toUpperCase().replace('RTX', 'RTX ');
    const hrLabel = currentLang === 'ru' ? `${hours} ч` : `${hours} hrs`;
    stickyGpuInfoEl.textContent = `${count} x ${gpuLabel} • ${hrLabel}`;
    stickyPriceEl.textContent = currentLang === 'ru' ? `${formattedFinalPrice} ₽` : `$${formattedFinalPrice}`;
  }
  
  // Update Discount Badge
  if (discountPercentage > 0) {
    discountBadgeEl.textContent = translations[currentLang].calc_discount_label.replace('{val}', discountPercentage);
    discountBadgeEl.style.background = 'var(--success)';
  } else {
    discountBadgeEl.textContent = translations[currentLang].calc_no_discount;
    discountBadgeEl.style.background = 'var(--text-muted)';
  }
  
  // Update Discount Progress Bar in Calculator
  // Scale maxes at 50,000 RUB
  const progressPercent = Math.min(100, (totalBasePriceRUB / 50000) * 100);
  discountProgressEl.style.width = `${progressPercent}%`;
}

// Add event listeners for calculator inputs
gpuModelSelect.addEventListener('change', calculatePrice);
gpuCountInput.addEventListener('input', calculatePrice);
renderHoursInput.addEventListener('input', calculatePrice);

// 4. Server Nodes Mocking Data & Live simulation
const nodesData = [
  { id: 'F1-A', gpu: '2 x RTX 4090 (24GB)', status: 'rendering', load: 88, temp: 72 },
  { id: 'F1-B', gpu: '2 x RTX 4090 (24GB)', status: 'idle', load: 0, temp: 34 },
  { id: 'F1-C', gpu: '4 x RTX 3090 (24GB)', status: 'rendering', load: 92, temp: 69 },
  { id: 'F1-D', gpu: '4 x RTX 3080 (10GB)', status: 'rendering', load: 85, temp: 67 },
  { id: 'F1-E', gpu: '4 x RTX 3080 (10GB)', status: 'idle', load: 0, temp: 32 },
  { id: 'F1-F', gpu: '3 x RTX 3090 (24GB)', status: 'idle', load: 0, temp: 35 }
];

const nodesContainer = document.getElementById('nodesContainer');

function renderNodes() {
  nodesContainer.innerHTML = '';
  
  nodesData.forEach(node => {
    const isRendering = node.status === 'rendering';
    const statusText = isRendering 
      ? translations[currentLang].node_status_rendering 
      : translations[currentLang].node_status_idle;
    const badgeClass = isRendering ? 'rendering' : 'idle';
    
    const cardHtml = `
      <div class="node-card">
        <div class="node-header">
          <span class="node-title">Node ${node.id}</span>
          <span class="node-status-badge ${badgeClass}">
            ${isRendering ? '<span class="pulse-dot"></span> ' : ''}${statusText}
          </span>
        </div>
        <div class="node-gpu">
          <span class="text-muted">${translations[currentLang].node_card_gpu}</span> ${node.gpu}
        </div>
        <div class="node-details">
          <span>${translations[currentLang].node_card_load} <strong class="accent-text">${node.load}%</strong></span>
          <span>${translations[currentLang].node_card_temp} <strong class="accent-text">${node.temp}°C</strong></span>
        </div>
        <div class="gpu-load-bar">
          <div class="gpu-load-progress" style="width: ${node.load}%; background-color: ${isRendering ? 'var(--accent)' : 'var(--success)'}; box-shadow: 0 0 10px ${isRendering ? 'var(--accent)' : 'var(--success)'}; animation: none;"></div>
        </div>
      </div>
    `;
    nodesContainer.insertAdjacentHTML('beforeend', cardHtml);
  });
}

// Simulated real-time server load fluctuations
setInterval(() => {
  nodesData.forEach(node => {
    if (node.status === 'rendering') {
      // Fluctuating load & temp for active rendering
      node.load = Math.floor(Math.random() * (98 - 75 + 1)) + 75;
      node.temp = Math.floor(Math.random() * (75 - 65 + 1)) + 65;
    } else {
      // Occasional job starting simulation
      if (Math.random() > 0.95) {
        node.status = 'rendering';
        node.load = 80;
        node.temp = 62;
      }
    }
    
    // Occasional job finishing simulation
    if (node.status === 'rendering' && node.load > 0 && Math.random() > 0.97) {
      node.status = 'idle';
      node.load = 0;
      node.temp = 35;
    }
  });
  renderNodes();
}, 4000);

// 5. Modal Handling
const modalOverlay = document.getElementById('modalTest');
const openModalButtons = document.querySelectorAll('.open-modal-btn');
const modalCloseBtn = document.getElementById('modalClose');
const successCloseBtn = document.getElementById('successCloseBtn');
const leadForm = document.getElementById('leadForm');
const modalBody = document.getElementById('modalBody');
const modalSuccess = document.getElementById('modalSuccess');

let leadSource = 'test';

openModalButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Check if clicked from calculator results card or sticky bottom bar
    if (btn.classList.contains('btn-block') && btn.closest('.calc-results-card') || btn.closest('.calc-sticky-bar')) {
      leadSource = 'calculator';
    } else {
      leadSource = 'test';
    }
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Delay resets slightly to allow closing transition
  setTimeout(() => {
    modalBody.style.display = 'block';
    modalSuccess.style.display = 'none';
    leadForm.reset();
  }, 300);
}

modalCloseBtn.addEventListener('click', closeModal);
successCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Form Submission handling
leadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const clientName = document.getElementById('clientName').value;
  const clientContact = document.getElementById('clientContact').value;
  
  let methodLabel = '';
  if (currentLang === 'ru') {
    methodLabel = selectedMethod === 'telegram' ? 'Telegram' :
                  selectedMethod === 'whatsapp' ? 'WhatsApp' :
                  selectedMethod === 'phone' ? 'Телефон' : 'Email';
  } else {
    methodLabel = selectedMethod === 'telegram' ? 'Telegram' :
                  selectedMethod === 'whatsapp' ? 'WhatsApp' :
                  selectedMethod === 'phone' ? 'Phone' : 'Email';
  }
  
  let messageText = '';
  
  if (leadSource === 'calculator') {
    // Get calculator details for context
    const gpu = gpuModelSelect.value.toUpperCase().replace('RTX', 'RTX ');
    const count = gpuCountInput.value;
    const hours = renderHoursInput.value;
    const price = document.getElementById('totalPrice').textContent;
    const currency = currentLang === 'ru' ? '₽' : '$';
    
    messageText = `<b>🔔 Новая заявка на бронирование мощности!</b>\n\n` +
                  `👤 <b>Имя:</b> ${clientName}\n` +
                  `💬 <b>Способ связи (${methodLabel}):</b> ${clientContact}\n\n` +
                  `📊 <b>Выбранная конфигурация:</b>\n` +
                  `• Видеокарта: ${gpu}\n` +
                  `• Количество: ${count} шт.\n` +
                  `• Время рендера: ${hours} ч.\n` +
                  `• Итоговая стоимость: ${price} ${currency}\n\n` +
                  `⏱ <i>Отправлено: ${new Date().toLocaleString('ru-RU')}</i>`;
  } else {
    messageText = `<b>🎁 Новая заявка на бесплатный тест-драйв!</b>\n\n` +
                  `👤 <b>Имя:</b> ${clientName}\n` +
                  `💬 <b>Способ связи (${methodLabel}):</b> ${clientContact}\n\n` +
                  `⏱ <i>Отправлено: ${new Date().toLocaleString('ru-RU')}</i>`;
  }

  // Google Apps Script Web App URL (Secure Proxy)
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzZirLWfIlkNG9MVQ3rCMbX0kdsmcQUwWoE1VSXEMuf1cXa1j-VBOF2DQ50cfUqJ2V26Q/exec';
  
  fetch(googleScriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain' // Using text/plain to bypass CORS preflight check
    },
    body: JSON.stringify({
      message: messageText
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log('Lead submitted successfully:', data);
  })
  .catch(err => {
    console.error('Failed to submit lead:', err);
  });

  // Transition to success screen inside modal
  modalBody.style.display = 'none';
  modalSuccess.style.display = 'block';
});

// 6. Mobile sticky bottom bar visibility logic via IntersectionObserver
const calculatorSection = document.getElementById('calculator');
if (calculatorSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add('calc-active');
      } else {
        // Hide the bar only if the calculator is below the viewport (user scrolled up past it)
        if (entry.boundingClientRect.top > 0) {
          document.body.classList.remove('calc-active');
        }
      }
    });
  }, {
    rootMargin: '150px 0px 0px 0px',
    threshold: 0.01
  });
  
  observer.observe(calculatorSection);
}

// 7. Contact Method Selector Logic
let selectedMethod = 'telegram';
const methodButtons = document.querySelectorAll('.method-btn');
const contactInputLabel = document.getElementById('contactInputLabel');
const clientContactInput = document.getElementById('clientContact');

const contactConfig = {
  telegram: {
    ru: { label: "Ваш Telegram (@username или телефон)", placeholder: "@username или +7..." },
    en: { label: "Your Telegram (@username or phone)", placeholder: "@username or +1..." }
  },
  whatsapp: {
    ru: { label: "Ваш номер для WhatsApp", placeholder: "+7 (999) 000-00-00" },
    en: { label: "Your WhatsApp number", placeholder: "+1 (555) 000-0000" }
  },
  phone: {
    ru: { label: "Номер телефона для звонка", placeholder: "+7 (999) 000-00-00" },
    en: { label: "Phone number for call", placeholder: "+1 (555) 000-0000" }
  },
  email: {
    ru: { label: "Ваш адрес Email", placeholder: "example@mail.com" },
    en: { label: "Your Email address", placeholder: "example@domain.com" }
  }
};

methodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    methodButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMethod = btn.dataset.method;
    updateContactInput();
  });
});

function updateContactInput() {
  const config = contactConfig[selectedMethod][currentLang];
  contactInputLabel.textContent = config.label;
  clientContactInput.placeholder = config.placeholder;
  
  // Update browser autocomplete/keyboard hints dynamically
  if (selectedMethod === 'email') {
    clientContactInput.type = 'email';
  } else if (selectedMethod === 'phone' || selectedMethod === 'whatsapp') {
    clientContactInput.type = 'tel';
  } else {
    clientContactInput.type = 'text';
  }
}

// Initializing Layouts & Rates
applyTranslations();
updateContactInput();
calculatePrice();
renderNodes();
