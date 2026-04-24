/* ─── Getspecio — app.js ──────────────────────────────────────────────────────── */

// ── Placeholder configs for non-Lenovo brands ──────────────────────────────────
const PLACEHOLDER_CONFIGS = [
  // HP
  { _placeholder: true, brand: 'HP', model: 'EliteBook 840 G11', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 7 165U', ram: '16GB', storage: '512GB SSD',
    display_summary: '14" WUXGA IPS, 1920×1200', size: '14', panel: 'IPS',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: false, wwan: false, ethernet: false,
    color: 'Silver', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'HP', model: 'ProBook 460 G11', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 5 125U', ram: '16GB', storage: '512GB SSD',
    display_summary: '16" FHD IPS, 1920×1080', size: '16', panel: 'IPS',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: false, wwan: false, ethernet: true,
    color: 'Silver', ports: [], eans: [], series: '' },
  // Dell
  { _placeholder: true, brand: 'Dell', model: 'Latitude 7450', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 7 165U', ram: '32GB', storage: '1TB SSD',
    display_summary: '14" FHD+ IPS, 1920×1200', size: '14', panel: 'IPS',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: false, wwan: true, ethernet: false,
    color: 'Grey', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'Dell', model: 'XPS 13 9350', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 7 258V', ram: '32GB', storage: '1TB SSD',
    display_summary: '13.4" OLED, 2880×1800', size: '13.4', panel: 'OLED',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: true, wwan: false, ethernet: false,
    color: 'Graphite', ports: [], eans: [], series: '' },
  // ASUS
  { _placeholder: true, brand: 'ASUS', model: 'ExpertBook B5 B5404', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 5 125H', ram: '16GB', storage: '512GB SSD',
    display_summary: '14" FHD IPS, 1920×1080', size: '14', panel: 'IPS',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: false, wwan: false, ethernet: true,
    color: 'Black', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'ASUS', model: 'Zenbook 14 OLED', mtm: 'Coming soon',
    cpu: 'AMD Ryzen AI 9 365', ram: '32GB', storage: '1TB SSD',
    display_summary: '14" 3K OLED, 2880×1800', size: '14', panel: 'OLED',
    gpu: 'AMD Radeon Integrated', gpu_type: 'Integrated', touch: true, wwan: false, ethernet: false,
    color: 'Silver', ports: [], eans: [], series: '' },
  // Microsoft
  { _placeholder: true, brand: 'Microsoft', model: 'Surface Laptop 7', mtm: 'Coming soon',
    cpu: 'Snapdragon X Elite', ram: '32GB', storage: '1TB SSD',
    display_summary: '15" PixelSense, 2496×1664', size: '15', panel: 'IPS',
    gpu: 'Adreno X1 Elite', gpu_type: 'Integrated', touch: true, wwan: false, ethernet: false,
    color: 'Platinum', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'Microsoft', model: 'Surface Pro 11', mtm: 'Coming soon',
    cpu: 'Snapdragon X Plus', ram: '16GB', storage: '512GB SSD',
    display_summary: '13" PixelSense Flow, 2880×1920', size: '13', panel: 'IPS',
    gpu: 'Adreno Integrated', gpu_type: 'Integrated', touch: true, wwan: true, ethernet: false,
    color: 'Platinum', ports: [], eans: [], series: '' },
  // Samsung
  { _placeholder: true, brand: 'Samsung', model: 'Galaxy Book4 Pro', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 7 155H', ram: '16GB', storage: '512GB SSD',
    display_summary: '14" Dynamic AMOLED 2X, 2880×1800', size: '14', panel: 'OLED',
    gpu: 'Intel Arc Integrated', gpu_type: 'Integrated', touch: true, wwan: false, ethernet: false,
    color: 'Moonstone Grey', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'Samsung', model: 'Galaxy Book4 360', mtm: 'Coming soon',
    cpu: 'Intel Core Ultra 5 125H', ram: '16GB', storage: '512GB SSD',
    display_summary: '15.6" AMOLED, 1920×1080', size: '15.6', panel: 'OLED',
    gpu: 'Intel Integrated', gpu_type: 'Integrated', touch: true, wwan: false, ethernet: false,
    color: 'Silver', ports: [], eans: [], series: '' },
  // Apple
  { _placeholder: true, brand: 'Apple', model: 'MacBook Air 13" (M4)', mtm: 'Coming soon',
    cpu: 'Apple M4', ram: '16GB', storage: '512GB SSD',
    display_summary: '13.6" Liquid Retina, 2560×1664', size: '13.6', panel: 'IPS',
    gpu: 'Apple M4 10-core GPU', gpu_type: 'Integrated', touch: false, wwan: false, ethernet: false,
    color: 'Midnight', ports: [], eans: [], series: '' },
  { _placeholder: true, brand: 'Apple', model: 'MacBook Pro 14" (M4 Pro)', mtm: 'Coming soon',
    cpu: 'Apple M4 Pro', ram: '24GB', storage: '512GB SSD',
    display_summary: '14.2" Liquid Retina XDR, 3024×1964', size: '14.2', panel: 'IPS',
    gpu: 'Apple M4 Pro 20-core GPU', gpu_type: 'Integrated', touch: false, wwan: false, ethernet: false,
    color: 'Space Black', ports: [], eans: [], series: '' },
  // Chromebook
  { _placeholder: true, brand: 'Chromebook', model: 'Chromebook — Coming Soon', mtm: 'Coming soon',
    cpu: '—', ram: '—', storage: '—',
    display_summary: 'Chromebook configurations coming soon', size: '—', panel: '—',
    gpu: '—', gpu_type: '—', touch: false, wwan: false, ethernet: false,
    color: '—', ports: [], eans: [], series: '' },
];

// ── State ──────────────────────────────────────────────────────────────────────
const state = {
  brand:   new Set(),
  size:     '',
  cpuBrand: '',
  cpu:      '',
  gpuType:  '',
  gpu:      '',
  ram:      new Set(),
  storage:  new Set(),
  panel:    new Set(),
  touch:    '',
  hz:           '',
  connectivity: '',
  color:    new Set(),
  search:   '',
  sort:     'model',
  page:     0,
};
const PAGE_SIZE = 48;
let filtered = [];

// ── DOM refs ───────────────────────────────────────────────────────────────────
const cardsGrid    = document.getElementById('cardsGrid');
const noResults    = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const configCount  = document.getElementById('configCount');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn  = document.getElementById('loadMoreBtn');
const cpuSelect    = document.getElementById('cpuFilter');
const gpuSelect    = document.getElementById('gpuFilter');
const sortSelect   = document.getElementById('sortSelect');
const searchInput  = document.getElementById('searchFilter');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

// ── Populate dynamic dropdowns ─────────────────────────────────────────────────
function buildDropdown(el, values, placeholder) {
  el.innerHTML = `<option value="">${placeholder}</option>`;
  values.forEach(v => {
    if (!v) return;
    const opt = document.createElement('option');
    opt.value = v; opt.textContent = v;
    el.appendChild(opt);
  });
}

const allCPUs = [...new Set(CONFIGS.map(c => c.cpu))].filter(Boolean).sort();
const allGPUs = [...new Set(CONFIGS.map(c => c.gpu))].filter(Boolean).sort();
const allSizes = [...new Set(CONFIGS.map(c => c.size))].filter(Boolean)
  .map(Number).sort((a, b) => a - b);

// ── Dynamic chip builder ──────────────────────────────────────────────────────────
function buildChips(groupId, values) {
  const group = document.getElementById(groupId);
  if (!group) return;
  values.forEach(({ value, label }) => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.value = value;
    btn.textContent = label;
    group.appendChild(btn);
  });
}

// Screen size chips
buildChips('sizeFilter', allSizes.map(sz => ({ value: String(sz), label: sz + '"' })));

// RAM chips — dedupe by GB prefix (8GB, 16GB etc), sort numerically
const allRamLabels = [...new Set(CONFIGS.map(c => c.ram.match(/(\d+GB)/)?.[1]).filter(Boolean))]
  .sort((a, b) => parseInt(a) - parseInt(b));
buildChips('ramFilter', allRamLabels.map(v => ({ value: v, label: v })));

// Storage chips — dedupe by capacity prefix (256GB, 512GB, 1TB etc), sort by size
const toBytes = s => { const m = s.match(/([\d.]+)\s*(TB|GB)/i); return m ? parseFloat(m[1]) * (m[2].toUpperCase()==='TB'?1024:1) : 0; };
const allStorageLabels = [...new Set(CONFIGS.map(c => c.storage.match(/(\d+(?:\.\d+)?(?:TB|GB))/i)?.[1]).filter(Boolean))]
  .sort((a, b) => toBytes(a) - toBytes(b));
buildChips('storageFilter', allStorageLabels.map(v => ({ value: v, label: v })));

// Panel chips — all unique panel types
const allPanels = [...new Set(CONFIGS.map(c => c.panel).filter(Boolean))].sort();
buildChips('panelFilter', allPanels.map(v => ({ value: v, label: v })));

// Colour chips — all unique colours
const allColours = [...new Set(CONFIGS.map(c => c.color).filter(Boolean))].sort();
buildChips('colorFilter', allColours.map(v => ({ value: v, label: v })));

buildDropdown(cpuSelect, allCPUs, 'Any processor model');
buildDropdown(gpuSelect, allGPUs, 'Any GPU model');

configCount.textContent = `${CONFIGS.length.toLocaleString()} configurations`;

// ── Port tag helper ──────────────────────────────────────────────────────────
// Only surfaces TB4 (grouped), HDMI, RJ45, 3.5mm, SD Card.
// All USB-A and USB-C variants are intentionally hidden — TB4 covers the
// high-speed USB-C story; USB-A counts add noise without helping users filter.
const PORT_ALLOWLIST = ['HDMI', 'RJ45', '3.5mm', 'SD Card'];

function buildPortTags(ports, limit) {
  const tb4Count = (ports || []).filter(p => p === 'TB4' || p.includes('Thunderbolt 4')).length;
  const others = (ports || []).filter(p =>
    PORT_ALLOWLIST.some(allowed => p.includes(allowed))
  );
  const tags = [];
  if (tb4Count > 0) tags.push(`TB4 ×${tb4Count}`);
  others.forEach(p => tags.push(p));
  const capped = limit ? tags.slice(0, limit) : tags;
  return capped;
}

// ── Copy to clipboard with fallback ──────────────────────────────────────────
function copyToClipboard(text, btn, defaultLabel) {
  function onSuccess() {
    btn.textContent = '✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = defaultLabel; btn.classList.remove('copied'); }, 1800);
  }
  function onFail() {
    // execCommand fallback for sandboxed iframes
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      onSuccess();
    } catch (_) {
      btn.textContent = '✗ Failed';
      setTimeout(() => { btn.textContent = defaultLabel; }, 1800);
    }
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess, onFail);
  } else {
    onFail();
  }
}

// ── Filter logic ───────────────────────────────────────────────────────────────
function getActivePool() {
  const brands = state.brand; // now a Set
  // No brand selected → show all Lenovo configs (real data)
  if (brands.size === 0) return CONFIGS;
  // Only Lenovo selected → real configs
  if (brands.size === 1 && brands.has('Lenovo')) return CONFIGS;
  // Mix of brands
  const result = [];
  if (brands.has('Lenovo')) result.push(...CONFIGS);
  PLACEHOLDER_CONFIGS.forEach(c => { if (brands.has(c.brand)) result.push(c); });
  return result;
}

function applyFilters() {
  const s = state;
  const pool = getActivePool();

  filtered = pool.filter(c => {
    if (c._placeholder) return true; // placeholders always pass through when brand is selected

    if (s.size   && c.size   !== s.size)   return false;

    if (s.cpuBrand) {
      if (s.cpuBrand === 'Intel' && !c.cpu.startsWith('Intel')) return false;
      if (s.cpuBrand === 'AMD'   && !c.cpu.startsWith('AMD'))   return false;
    }
    if (s.cpu && c.cpu !== s.cpu) return false;

    if (s.gpuType && c.gpu_type !== s.gpuType) return false;
    if (s.gpu && c.gpu !== s.gpu) return false;

    // Multi-select: pass if config matches ANY selected value
    if (s.ram.size > 0     && ![...s.ram].some(v => c.ram.startsWith(v)))       return false;
    if (s.storage.size > 0 && ![...s.storage].some(v => c.storage.includes(v))) return false;
    if (s.panel.size > 0   && !s.panel.has(c.panel))                            return false;
    if (s.color.size > 0   && !s.color.has(c.color))                            return false;

    if (s.touch !== '') {
      if (s.touch === 'true'  && !c.touch) return false;
      if (s.touch === 'false' &&  c.touch) return false;
    }
    if (s.hz) {
      const hzMatch = (c.display_summary || '').match(/(\d+)Hz/);
      const rate = hzMatch ? parseInt(hzMatch[1]) : 60;
      if (s.hz === '60'  && rate !== 60)  return false;
      if (s.hz === '90'  && rate < 90)   return false;
      if (s.hz === '120' && rate < 120)  return false;
    }
    if (s.connectivity === '4g'      && !c.wwan)              return false;
    if (s.connectivity === 'ethernet' && !c.ethernet)          return false;


    if (s.search) {
      const q = s.search.toLowerCase();
      const haystack = [c.mtm, c.model, c.cpu, c.gpu, c.display, c.ports?.join(' '), c.eans?.join(' ')]
        .join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // Sort (skip sort for placeholder cards)
  filtered.sort((a, b) => {
    if (a._placeholder && b._placeholder) return 0;
    if (a._placeholder) return 1;
    if (b._placeholder) return -1;
    const k = s.sort;
    if (k === 'ram')        return (parseInt(a.ram)||0) - (parseInt(b.ram)||0);
    if (k === 'storage')    return toBytes(a.storage||'') - toBytes(b.storage||'');
    if (k === 'price-asc')  return getDummyListings(a)[0].price - getDummyListings(b)[0].price;
    if (k === 'price-desc') return getDummyListings(b)[0].price - getDummyListings(a)[0].price;
    return (a[k]||'').localeCompare(b[k]||'');
  });

  state.page = 0;
  renderCards(true);
}

// ── Render cards ───────────────────────────────────────────────────────────────
function renderCards(reset = false) {
  if (reset) cardsGrid.innerHTML = '';

  const total   = filtered.length;
  const start   = state.page * PAGE_SIZE;
  const slice   = filtered.slice(start, start + PAGE_SIZE);
  const showing = Math.min(start + PAGE_SIZE, total);

  noResults.style.display = total === 0 ? 'flex' : 'none';
  resultsCount.textContent = total === 0
    ? 'No results'
    : total === CONFIGS.length
    ? `All ${total.toLocaleString()} configurations`
    : `${showing.toLocaleString()} of ${total.toLocaleString()} results`;

  slice.forEach(c => cardsGrid.appendChild(c._placeholder ? buildPlaceholderCard(c) : buildCard(c)));

  const hasMore = showing < total;
  loadMoreWrap.style.display = hasMore ? 'flex' : 'none';
  if (hasMore) loadMoreBtn.textContent = `Show more (${(total - showing).toLocaleString()} remaining)`;
}

// ── Build a placeholder card ──────────────────────────────────────────────────
function buildPlaceholderCard(c) {
  const card = document.createElement('div');
  card.className = 'card card-placeholder';

  card.innerHTML = `
    <div class="card-image card-image--placeholder">
      <svg class="card-image-icon" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="44" height="28" rx="3" stroke="currentColor" stroke-width="1.5"/>
        <rect x="8" y="6" width="32" height="18" rx="1.5" fill="currentColor" opacity="0.08"/>
        <path d="M16 34h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M21 30v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M27 30v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span class="coming-soon-label">Coming Soon</span>
    </div>
    <div class="card-header">
      <div class="card-model">${c.model}</div>
      <span class="badge badge-coming-soon">Preview</span>
    </div>
    <div class="card-specs">
      <div class="spec-row"><span class="spec-label">CPU</span><span class="spec-value">${c.cpu}</span></div>
      <div class="spec-row"><span class="spec-label">RAM</span><span class="spec-value">${c.ram}</span></div>
      <div class="spec-row"><span class="spec-label">Storage</span><span class="spec-value">${c.storage}</span></div>
    </div>
    <div class="card-display">${c.display_summary || '—'}</div>
    <div class="card-footer card-footer--placeholder">
      <span class="placeholder-note">Full data coming when ${c.brand} goes live</span>
    </div>
  `;

  return card;
}

// ── Clean CPU string for modal ───────────────────────────────────────────────────
// "Intel Core Ultra 7 258V, 8C (4P+4LPE)/8T, Max Turbo up to 4.8GHz, 12MB..."
// → "Intel Core Ultra 7 258V · 8 cores · 4.8GHz"
function cleanCPU(raw) {
  if (!raw) return '—';
  const name = raw.split(',')[0].split('(')[0].trim();
  // Intel max turbo
  const intelGhz = raw.match(/up to ([\d.]+)GHz/);
  // AMD max GHz (second value in "2.0 / 5.0GHz")
  const amdGhz = raw.match(/[\d.]+\s*\/\s*([\d.]+)GHz/);
  const ghz = intelGhz ? intelGhz[1] + 'GHz' : amdGhz ? amdGhz[1] + 'GHz' : null;

  // Intel core topology: "12C (2P + 8E + 2LPE) / 14T" → "(2P+8E+2LPE, 14T)"
  const intelTopology = raw.match(/\d+C\s*\(([^)]+)\)\s*\/\s*(\d+T)/);
  // Intel simple: "8C / 8T" (no breakdown)
  const intelSimple = !intelTopology && raw.match(/(\d+C)\s*\/\s*(\d+T)/);
  // AMD: "(8C / 16T," → "8C/16T"
  const amdTopology = raw.match(/\((\d+C\s*\/\s*\d+T)/);

  let topology = null;
  if (intelTopology) {
    const breakdown = intelTopology[1].replace(/\s+/g, '').replace(/\+/g, '+');
    topology = `(${breakdown}, ${intelTopology[2]})`;
  } else if (intelSimple) {
    topology = `(${intelSimple[1]}/${intelSimple[2]})`;
  } else if (amdTopology) {
    topology = `(${amdTopology[1].replace(/\s+/g, '')})` ;
  }

  return [name, ghz, topology].filter(Boolean).join(' · ');
}

// ── Clean GPU string for modal ───────────────────────────────────────────────────
// "Integrated Intel Arc Graphics 140V" → "Intel Arc Graphics 140V"
// "Integrated Intel Arc 140T GPU Functions as Intel Graphics" → "Intel Arc 140T"
function cleanGPU(raw) {
  if (!raw) return '—';
  return raw
    .replace(/^Integrated\s+/i, '')
    .replace(/\s+Functions as.*$/i, '')
    .replace(/\s+GPU$/i, '')
    // NVIDIA: strip everything after the VRAM size e.g. "8GB GDDR7, Boost..."
    .replace(/(\d+GB\s+\w+),.*$/i, '$1')
    // Also strip bare ", Boost..." if no VRAM pattern matched
    .replace(/,.*$/i, '')
    .trim();
}

// ── Clean display string for modal ──────────────────────────────────────────────────
// "14" WUXGA (1920x1200) IPS 500nits Anti-glare" → "14" · 1920×1200 · IPS · 500 nits"
// "15.3" 2.8K OLED 500nits 100% DCI-P3 30-120Hz VRR" → "15.3" · 2880×1800 · OLED · 500 nits · 120Hz"
function cleanDisplay(raw) {
  if (!raw) return '—';
  const parts = [];
  // Size
  const size = raw.match(/^([\d.]+)"/);
  if (size) parts.push(size[1] + '"');
  // Resolution from parentheses e.g. (1920x1200)
  const res = raw.match(/\((\d{3,4}[x×]\d{3,4})\)/);
  if (res) parts.push(res[1].replace('x', '×'));
  // Panel type
  const panel = raw.match(/\b(OLED|IPS|TN|VA|AMOLED)\b/);
  if (panel) parts.push(panel[1]);
  // Brightness
  const nits = raw.match(/(\d+)\s*nits?/);
  if (nits) parts.push(nits[1] + ' nits');
  // Refresh rate — prefer max value e.g. "30-120Hz" → 120Hz
  const hz = raw.match(/(?:\d+-)(\d+)Hz|\b(\d{2,3})Hz\b/);
  if (hz) parts.push((hz[1] || hz[2]) + 'Hz');
  return parts.join(' · ') || raw;
}

// ── Short display string for card spec row ───────────────────────────────────────
// Produces e.g. "14"  1920×1200  60Hz" or "15.6"  2560×1600  165Hz"
function buildDisplayShort(c) {
  const parts = [];
  if (c.size)  parts.push(c.size + '"');
  // extract resolution from display_summary or display string
  const resSrc = c.display_summary || c.display || '';
  const resMatch = resSrc.match(/(\d{3,4}[×x×]\d{3,4})/);
  if (resMatch) parts.push(resMatch[1].replace('x', '×'));
  // extract refresh rate
  const hzMatch = resSrc.match(/(\d{2,3})\s*Hz/);
  if (hzMatch) parts.push(hzMatch[1] + 'Hz');
  return parts.join('  ·  ') || '—';
}

// ── Build a card ───────────────────────────────────────────────────────────────
function buildCard(c) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${c.model} — ${c.cpu}, ${c.ram}, ${c.storage}`);

  const panelBadge = c.panel === 'OLED'
    ? `<span class="badge badge-oled">OLED</span>`
    : c.panel ? `<span class="badge badge-ips">${c.panel}</span>` : '';

  const touchTag = c.touch ? `<span class="tag tag-touch">Touch</span>` : '';

  // Port tags — TB4 grouped, USB-C generics dropped, capped at 6
  const portTagsHtml = buildPortTags(c.ports, 6)
    .map(p => `<span class="port-tag">${p}</span>`).join('');

  // GPU line — only show if meaningful
  const gpuLine = c.gpu && c.gpu !== 'Intel Integrated' && c.gpu !== 'AMD Radeon Integrated'
    ? `<div class="spec-row"><span class="spec-label">GPU</span><span class="spec-value">${c.gpu}</span></div>`
    : '';

  card.innerHTML = `
    <div class="card-image card-image--laptop">
      <svg class="card-image-icon" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="44" height="28" rx="3" stroke="currentColor" stroke-width="1.5"/>
        <rect x="8" y="6" width="32" height="18" rx="1.5" fill="currentColor" opacity="0.08"/>
        <path d="M16 34h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M21 30v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M27 30v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="card-header">
      <div class="card-model">${c.model}</div>
    </div>
    <div class="card-port-row">
      ${panelBadge}
      ${portTagsHtml}
    </div>
    <div class="card-specs">
      <div class="spec-row"><span class="spec-label">CPU</span><span class="spec-value">${c.cpu}</span></div>
      ${gpuLine}
      <div class="spec-row"><span class="spec-label">RAM</span><span class="spec-value">${c.ram}</span></div>
      <div class="spec-row"><span class="spec-label">Storage</span><span class="spec-value">${c.storage}</span></div>
      <div class="spec-row"><span class="spec-label">Display</span><span class="spec-value">${buildDisplayShort(c)}</span></div>
    </div>
    <div class="card-price-row">
      <span class="card-price">From £${getDummyListings(c)[0].price.toLocaleString()}</span>
      <span class="card-price-retailers">3 retailers</span>
    </div>
    <div class="card-footer">
      <div class="mtm-wrap">
        <span class="mtm-code">${c.mtm}</span>
      </div>
      <div class="card-tags">${touchTag}</div>
    </div>
  `;

  // Copy button with fallback
  // copy-btn-inline removed
  card.querySelector('.copy-btn-inline')?.addEventListener('click', e => {
    e.stopPropagation();
    const btn = e.currentTarget;
    copyToClipboard(btn.dataset.mtm, btn, 'Copy');
  });

  card.addEventListener('click', () => openModal(c));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(c); });
  return card;
}

// ── Dummy price data (placeholder until Awin feed is live) ───────────────────
const RETAILERS = [
  { name: 'Currys',        logo: 'CU', url: 'https://www.currys.co.uk' },
  { name: 'Laptops Direct',logo: 'LD', url: 'https://www.laptopsdirect.co.uk' },
  { name: 'John Lewis',    logo: 'JL', url: 'https://www.johnlewis.com' },
];

// Generate a deterministic-looking dummy price from the MTM string
function dummyPrice(mtm, offset = 0) {
  let hash = 0;
  for (let i = 0; i < mtm.length; i++) hash = (hash * 31 + mtm.charCodeAt(i)) & 0xffff;
  const base = 599 + (hash % 1400);          // £599 – £1,999
  return Math.round((base + offset) / 10) * 10; // round to nearest £10
}

function getDummyListings(c) {
  const base = dummyPrice(c.mtm);
  return [
    { ...RETAILERS[0], price: base,      stock: 'In Stock' },
    { ...RETAILERS[1], price: base - 20, stock: 'In Stock' },
    { ...RETAILERS[2], price: base + 10, stock: 'Low Stock' },
  ].sort((a, b) => a.price - b.price);
}

// ── Modal ──────────────────────────────────────────────────────────────────────
function openModal(c) {
  const panelBadge = c.panel === 'OLED'
    ? `<span class="badge badge-oled" style="margin-left:8px">OLED</span>`
    : c.panel ? `<span class="badge badge-ips" style="margin-left:8px">${c.panel}</span>` : '';

  // Modal port tags — same TB4 grouping, no cap
  const portTagsModal = buildPortTags(c.ports, 0)
    .map(p => `<span class="modal-port-tag">${p}</span>`).join('');

  // Modal image gallery (placeholder state)
  const modalGallery = `
    <div class="modal-gallery">
      <div class="modal-gallery-main">
        <svg class="modal-gallery-icon" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="74" height="46" rx="4" stroke="currentColor" stroke-width="2"/>
          <rect x="12" y="9" width="56" height="32" rx="2" fill="currentColor" opacity="0.07"/>
          <path d="M28 57h24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M36 51v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M44 51v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="modal-gallery-label">Product images coming soon</span>
      </div>
      <div class="modal-gallery-thumbs">
        <div class="modal-gallery-thumb modal-gallery-thumb--active"></div>
        <div class="modal-gallery-thumb"></div>
        <div class="modal-gallery-thumb"></div>
      </div>
    </div>
  `;

  modalContent.innerHTML = `
    ${modalGallery}

    <div class="modal-header">
      <div class="modal-model">${c.model}</div>
      <div class="modal-port-header">
        ${panelBadge}
        ${portTagsModal}
      </div>
    </div>

    <div>
      <p class="modal-section-title">Specification</p>
      <div class="modal-specs">
        <div class="modal-spec-row full-width">
          <span class="modal-spec-label">Processor</span>
          <span class="modal-spec-value">${cleanCPU(c.cpu_raw || c.cpu)}</span>
        </div>
        <div class="modal-spec-row full-width">
          <span class="modal-spec-label">Graphics (GPU)</span>
          <span class="modal-spec-value">${cleanGPU(c.gpu_raw || c.gpu)}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Memory</span>
          <span class="modal-spec-value">${c.ram}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Storage</span>
          <span class="modal-spec-value">${c.storage}</span>
        </div>
        <div class="modal-spec-row full-width">
          <span class="modal-spec-label">Display</span>
          <span class="modal-spec-value">${cleanDisplay(c.display)}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Touchscreen</span>
          <span class="modal-spec-value">${c.touch ? 'Yes' : 'No'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Keyboard</span>
          <span class="modal-spec-value">${c.keyboard || '—'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Operating System</span>
          <span class="modal-spec-value">${c.os || '—'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="modal-spec-label">Colour</span>
          <span class="modal-spec-value">${c.color || '—'}</span>
        </div>
        <div class="modal-spec-row full-width modal-spec-row--code">
          <span class="modal-spec-label">Product Code</span>
          <span class="modal-spec-value mono">${c.mtm}</span>
        </div>
      </div>
    </div>



    <div>
      <p class="modal-section-title">Where to Buy <span class="price-disclaimer">· prices updated recently</span></p>
      <div class="retailer-table">
        ${getDummyListings(c).map((r, i) => `
          <div class="retailer-row${i === 0 ? ' retailer-best' : ''}">
            <div class="retailer-info">
              <span class="retailer-logo-chip">${r.logo}</span>
              <span class="retailer-name">${r.name}</span>
              ${i === 0 ? '<span class="best-price-tag">Best price</span>' : ''}
            </div>
            <div class="retailer-right">
              <span class="retailer-stock ${r.stock === 'In Stock' ? 'stock-in' : 'stock-low'}">${r.stock}</span>
              <span class="retailer-price">£${r.price.toLocaleString()}</span>
              <a href="${r.url}" target="_blank" rel="noopener" class="btn-retailer">View Deal ↗</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <p class="modal-disclaimer">Specs are sourced from manufacturer data and may vary. Always check the full specification with the retailer before purchasing. Prices and availability may differ. Any purchase is solely between you and the retailer — getspecio accepts no responsibility for errors or omissions.</p>

  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';


}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Accordion ──────────────────────────────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const id   = trigger.dataset.accordion;
    const body = document.getElementById(`body-${id}`);
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    trigger.classList.toggle('active', !isOpen);
  });
});

// ── Update accordion dot (active indicator) ────────────────────────────────────
function updateDot(id, active) {
  const dot = document.getElementById(`dot-${id}`);
  if (dot) dot.classList.toggle('visible', active);
}

// ── Chip group handler ─────────────────────────────────────────────────────────
// multi=true: clicking a value chip toggles it; clicking Any clears all.
// multi=false: single-select (original behaviour).
function setupChipGroup(id, stateKey, dotId, onChange, multi = false) {
  const group = document.getElementById(id);
  if (!group) return;
  group.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    if (chip.disabled || chip.classList.contains('chip--disabled')) return;
    const val = chip.dataset.value;
    if (multi) {
      const set = state[stateKey];
      if (val === '') {
        // Any — clear all selections
        set.clear();
        group.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.value === ''));
      } else {
        // Deactivate the Any chip
        const anyChip = group.querySelector('.chip[data-value=""]');
        if (anyChip) anyChip.classList.remove('active');
        if (set.has(val)) {
          set.delete(val);
          chip.classList.remove('active');
          // If nothing selected, re-activate Any
          if (set.size === 0) {
            if (anyChip) anyChip.classList.add('active');
          }
        } else {
          set.add(val);
          chip.classList.add('active');
        }
      }
      updateDot(dotId || stateKey, set.size > 0);
    } else {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state[stateKey] = val;
      updateDot(dotId || stateKey, !!val);
    }
    if (onChange) onChange();
    applyFilters();
  });
}

// ── Wire up all filters ────────────────────────────────────────────────────────
setupChipGroup('brandFilter', 'brand', 'brand', () => {
  // When switching brands, reset spec filters that may not apply
  state.cpu = ''; state.cpuBrand = ''; state.gpu = ''; state.gpuType = '';
  cpuSelect.value = ''; gpuSelect.value = '';
  buildDropdown(cpuSelect, allCPUs, 'Any processor model');
  buildDropdown(gpuSelect, allGPUs, 'Any GPU model');
  // Reset chip actives for cpu/gpu brand
  document.querySelectorAll('#cpuBrandFilter .chip, #gpuTypeFilter .chip').forEach(c =>
    c.classList.toggle('active', c.dataset.value === '')
  );
}, true);
setupChipGroup('sizeFilter',     'size',     'size');
setupChipGroup('cpuBrandFilter', 'cpuBrand', 'cpu', () => {
  const brand = state.cpuBrand;
  cpuSelect.innerHTML = '<option value="">Any processor model</option>';
  allCPUs.filter(cpu => !brand || cpu.startsWith(brand)).forEach(cpu => {
    const opt = document.createElement('option');
    opt.value = cpu; opt.textContent = cpu;
    cpuSelect.appendChild(opt);
  });
  state.cpu = ''; cpuSelect.value = '';
});
setupChipGroup('gpuTypeFilter',  'gpuType',  'gpu', () => {
  const type = state.gpuType;
  gpuSelect.innerHTML = '<option value="">Any GPU model</option>';
  const filtered_gpus = allGPUs.filter(g => {
    if (!type) return true;
    const conf = CONFIGS.find(c => c.gpu === g);
    return conf && conf.gpu_type === type;
  });
  filtered_gpus.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g; opt.textContent = g;
    gpuSelect.appendChild(opt);
  });
  state.gpu = ''; gpuSelect.value = '';
});
setupChipGroup('ramFilter',      'ram',      'ram',     null, true);
setupChipGroup('storageFilter',  'storage',  'storage', null, true);
setupChipGroup('panelFilter',    'panel',    'display', null, true);
setupChipGroup('touchFilter',    'touch',    'display');
setupChipGroup('hzFilter',           'hz',           'hz');
setupChipGroup('connectivityFilter', 'connectivity', 'connectivity');
setupChipGroup('colorFilter',    'color',    'colour',  null, true);

cpuSelect.addEventListener('change', () => {
  state.cpu = cpuSelect.value;
  updateDot('cpu', !!state.cpu);
  applyFilters();
});
gpuSelect.addEventListener('change', () => {
  state.gpu = gpuSelect.value;
  updateDot('gpu', !!state.gpu);
  applyFilters();
});
sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; applyFilters(); });

let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = searchInput.value.trim();
    updateDot('search', !!state.search);
    applyFilters();
  }, 250);
});

// ── Load more ──────────────────────────────────────────────────────────────────
loadMoreBtn.addEventListener('click', () => { state.page++; renderCards(false); });

// ── Reset ──────────────────────────────────────────────────────────────────────
function resetAll() {
  // Clear Sets
  state.brand.clear(); state.ram.clear(); state.storage.clear();
  state.panel.clear(); state.color.clear();
  // Reset scalar values
  Object.assign(state, {
    size:'', cpuBrand:'', cpu:'', gpuType:'', gpu:'',
    touch:'', hz:'', connectivity:'',
    search:'', sort:'model', page: 0
  });
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.value === ''));
  document.querySelectorAll('.accordion-dot').forEach(d => d.classList.remove('visible'));
  cpuSelect.value = ''; gpuSelect.value = '';
  sortSelect.value = 'model'; searchInput.value = '';
  buildDropdown(cpuSelect, allCPUs, 'Any processor model');
  buildDropdown(gpuSelect, allGPUs, 'Any GPU model');
  applyFilters();
}
document.getElementById('resetBtn').addEventListener('click', resetAll);
document.getElementById('resetBtn2')?.addEventListener('click', resetAll);

// ── Dark mode toggle ───────────────────────────────────────────────────────────
(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root   = document.documentElement;
  let theme    = 'dark';
  root.setAttribute('data-theme', theme);

  const sunIcon  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  const updateIcon = () => { if (toggle) toggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon; };
  updateIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateIcon();
    });
  }
})();

// ── Tag styles for RJ45 ────────────────────────────────────────────────────────
const ethStyle = document.createElement('style');
ethStyle.textContent = `.tag-eth{background:var(--color-surface-offset);color:var(--color-text-muted);border:1px solid var(--color-border);}`;
document.head.appendChild(ethStyle);

// ── Init ───────────────────────────────────────────────────────────────────────
applyFilters();

// ── Legal modal content ────────────────────────────────────────────────────────
const LEGAL_PAGES = {
  about: `
    <div class="legal-page">
      <h2>About getspecio</h2>
      <span class="legal-updated">Last updated: April 2026</span>
      <p>getspecio is a free laptop finder tool designed to help you cut through the confusion of laptop shopping. Instead of sifting through vague marketing descriptions, getspecio lets you filter by the exact specs that matter — processor, RAM, storage, display, ports — and gives you a precise model number so you know exactly what you're getting.</p>
      <h3>Why we built it</h3>
      <p>Buying a laptop should be straightforward. But manufacturer websites list dozens of near-identical configurations, retailers bundle different specs under the same product name, and search results rarely surface the specific combination you need. getspecio solves that by indexing real UK market configurations and making them searchable.</p>
      <h3>How it works</h3>
      <p>Laptop specification data is sourced from official manufacturer product reference documents and affiliate feed data. Configurations are filtered to UK market availability. We show you the product code so you can verify the exact spec on the manufacturer's site or with the retailer before buying.</p>
      <h3>Affiliate disclosure</h3>
      <p>getspecio is free to use. We earn a small commission when you click through to a retailer and make a purchase. This never affects the order in which results are shown — our filters are purely spec-based. The commission helps keep the site running and free for everyone.</p>
      <h3>Get in touch</h3>
      <p>Questions, suggestions, or spotted an error? Email us at <a href="mailto:hello@getspecio.co.uk">hello@getspecio.co.uk</a></p>
    </div>
  `,

  privacy: `
    <div class="legal-page">
      <h2>Privacy Policy</h2>
      <span class="legal-updated">Last updated: April 2026</span>
      <p>Your privacy matters to us. This policy explains what data getspecio collects, why, and how it is used.</p>
      <h3>What we collect</h3>
      <ul>
        <li><strong>Usage data</strong> — pages visited, filters used, and links clicked, collected anonymously to help us understand how the site is being used.</li>
        <li><strong>Affiliate tracking cookies</strong> — if you click through to a retailer, Awin (our affiliate network) may place a cookie on your device to track whether a purchase is made. This is used solely to attribute commission and does not identify you personally.</li>
      </ul>
      <h3>What we do not collect</h3>
      <p>getspecio has no user accounts, no sign-up forms, and does not collect your name, email address, or payment information. We do not sell any data to third parties.</p>
      <h3>Third-party links</h3>
      <p>When you click "View Deal", you are taken to a third-party retailer website. Their privacy policy applies from that point. We are not responsible for how those sites handle your data.</p>
      <h3>Affiliate network — Awin</h3>
      <p>We participate in the Awin affiliate programme. Awin may set cookies to track referrals and purchases. For more information, see <a href="https://www.awin.com/gb/privacy" target="_blank" rel="noopener">Awin's Privacy Policy</a>.</p>
      <h3>Your rights</h3>
      <p>Under UK GDPR, you have the right to access, correct, or request deletion of any personal data we hold about you. As we collect no personally identifiable information, there is typically nothing to action — but if you have any concerns, contact us at <a href="mailto:hello@getspecio.co.uk">hello@getspecio.co.uk</a>.</p>
      <h3>Changes to this policy</h3>
      <p>We may update this policy as the site evolves. The date at the top of this page reflects the most recent revision.</p>
    </div>
  `,

  terms: `
    <div class="legal-page">
      <h2>Terms of Use</h2>
      <span class="legal-updated">Last updated: April 2026</span>
      <p>By using getspecio, you agree to these terms. Please read them — they're short.</p>
      <h3>What getspecio is</h3>
      <p>getspecio is an informational tool. We help you find laptop configurations that match your requirements and provide product codes so you can verify specs and make informed decisions. We are not a retailer and do not sell laptops.</p>
      <h3>Accuracy of information</h3>
      <p>Specification data is sourced from manufacturer documents and is provided in good faith. However, manufacturers update their product lines frequently, and we cannot guarantee that every specification listed is current or complete. <strong>Always verify the full specification with the retailer before purchasing.</strong></p>
      <h3>Prices</h3>
      <p>Prices shown are indicative and sourced from third-party retailers. They may change at any time without notice. getspecio is not responsible for pricing errors or discrepancies between what is shown here and what a retailer charges.</p>
      <h3>Affiliate links</h3>
      <p>Links to retailers are affiliate links. We may earn a commission if you make a purchase after clicking through. This does not affect the price you pay. Any contract of sale is solely between you and the retailer — getspecio is not a party to that transaction.</p>
      <h3>Limitation of liability</h3>
      <p>getspecio is provided "as is" without warranties of any kind. We are not liable for any loss or damage arising from your use of this site or reliance on the information it contains.</p>
      <h3>Governing law</h3>
      <p>These terms are governed by the laws of England and Wales.</p>
      <h3>Contact</h3>
      <p><a href="mailto:hello@getspecio.co.uk">hello@getspecio.co.uk</a></p>
    </div>
  `,

  cookies: `
    <div class="legal-page">
      <h2>Cookie Policy</h2>
      <span class="legal-updated">Last updated: April 2026</span>
      <p>This policy explains how getspecio uses cookies and similar tracking technologies.</p>
      <h3>What are cookies?</h3>
      <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work properly and to provide information to site owners.</p>
      <h3>How we use cookies</h3>
      <ul>
        <li><strong>Affiliate tracking cookies</strong> — when you click a "View Deal" link, Awin (our affiliate network) places a cookie on your device. This cookie records the click so that if you go on to purchase within the cookie window (typically 30 days), the sale can be attributed to getspecio and we earn a small commission. The cookie does not identify you personally.</li>
        <li><strong>Your preferences</strong> — we store your cookie consent choice locally on your device so we don't ask you again on every visit.</li>
      </ul>
      <h3>What we do not use cookies for</h3>
      <p>We do not use cookies for advertising, profiling, or any purpose other than affiliate attribution and remembering your preference.</p>
      <h3>If you decline cookies</h3>
      <p>You can still use getspecio fully if you decline cookies. Retailer links will still work and you can still purchase from retailers — we just may not receive commission for that sale. Some retailers also use server-side tracking as a fallback, which may still attribute the referral without a cookie.</p>
      <h3>Managing cookies</h3>
      <p>You can control and delete cookies through your browser settings. For more information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener">allaboutcookies.org</a>.</p>
      <h3>Contact</h3>
      <p>Questions about our use of cookies? <a href="mailto:hello@getspecio.co.uk">hello@getspecio.co.uk</a></p>
    </div>
  `,
};

// ── Legal modal wiring ─────────────────────────────────────────────────────────
const legalOverlay  = document.getElementById('legalModalOverlay');
const legalContent  = document.getElementById('legalModalContent');
const legalClose    = document.getElementById('legalModalClose');

function openLegal(page) {
  legalContent.innerHTML = LEGAL_PAGES[page] || '';
  legalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLegal() {
  legalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

legalClose.addEventListener('click', closeLegal);
legalOverlay.addEventListener('click', e => { if (e.target === legalOverlay) closeLegal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLegal(); });

document.querySelectorAll('[data-legal]').forEach(btn => {
  btn.addEventListener('click', () => openLegal(btn.dataset.legal));
});

// ── Cookie banner ──────────────────────────────────────────────────────────────
const cookieBanner  = document.getElementById('cookieBanner');
const cookieAccept  = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');
const cookiePolicyBtn = document.getElementById('cookiePolicyBtn');

// Use a JS variable (not localStorage — sandboxed iframes block it)
let cookieConsent = null;

function showCookieBanner() { cookieBanner.classList.add('visible'); }
function hideCookieBanner() { cookieBanner.classList.remove('visible'); }

// Show banner if no decision made yet
if (cookieConsent === null) showCookieBanner();

cookieAccept.addEventListener('click', () => {
  cookieConsent = 'accepted';
  hideCookieBanner();
});
cookieDecline.addEventListener('click', () => {
  cookieConsent = 'declined';
  hideCookieBanner();
});
cookiePolicyBtn.addEventListener('click', () => {
  hideCookieBanner();
  openLegal('cookies');
});
