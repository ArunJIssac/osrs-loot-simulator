// Wiki GE Item Mapping (IDs -> Name)
const WIKI_ITEM_IDS = {
  12924: "Tanzanite Fang",
  12932: "Magic Fang",
  12929: "Serpentine Visage",
  6570: "Uncut Onyx",
  22006: "Dragon Bones",
  21930: "Draconic Visage",
  22288: "Vorkath's Head",
  27618: "Venator Shard",
  13263: "Abyssal Bludgeon",
  13265: "Abyssal Dagger",
  4151: "Abyssal Whip",
  11828: "Armadyl Crossbow",
  11804: "Bandos Godsword",
  11832: "Bandos Chestplate",
  11834: "Bandos Tassets",
  28329: "Ultor Vestige",
  28338: "Executioner's Axe Head"
};

// Full Database Matching All Select Options
const BOSS_DATABASE = {
  vorkath: {
    name: "Vorkath",
    defaultKPH: 30,
    defaultSupplyCost: 16000,
    mainUniqueDropChance: 1 / 5000,
    guaranteed: [
      { item: "Superior Dragon Bones", qty: 2, defaultVal: 12000, icon: "🦴" },
      { item: "Blue Dragonhide", qty: 2, defaultVal: 3200, icon: "🛡️" }
    ],
    normalLootTable: [
      { item: "Dragon Bones", qty: 15, defaultVal: 3000, icon: "🦴" },
      { item: "Rune Longsword", qty: 2, defaultVal: 38000, icon: "⚔️" },
      { item: "Adamantite Ore", qty: 20, defaultVal: 22000, icon: "🪨" },
      { item: "Wrath Runes", qty: 60, defaultVal: 24000, icon: "✨" },
      { item: "Dragon Battleaxe", qty: 1, defaultVal: 120000, icon: "🪓" }
    ],
    uniqueLootTable: [
      { item: "Vorkath's Head", chance: 1 / 50, isUnique: true, defaultVal: 0, icon: "🐉" },
      { item: "Draconic Visage", chance: 1 / 5000, isUnique: true, defaultVal: 8500000, icon: "🛡️" },
      { item: "Vorki (Pet)", chance: 1 / 3000, isUnique: true, isPet: true, defaultVal: 0, icon: "🐾" }
    ]
  },
  zulrah: {
    name: "Zulrah",
    defaultKPH: 32,
    defaultSupplyCost: 14000,
    mainUniqueDropChance: 1 / 256,
    guaranteed: [
      { item: "Zulrah's Scales", qty: 220, defaultVal: 170, icon: "🐍" }
    ],
    normalLootTable: [
      { item: "Adder's Tongue", qty: 10, defaultVal: 8000, icon: "🌿" },
      { item: "Battlestaff", qty: 10, defaultVal: 82000, icon: "🪄" },
      { item: "Dragon Halberd", qty: 1, defaultVal: 80000, icon: "🗡️" },
      { item: "Mahogany Logs", qty: 50, defaultVal: 22000, icon: "🪵" }
    ],
    uniqueLootTable: [
      { item: "Tanzanite Fang", chance: 1 / 1024, isUnique: true, defaultVal: 14500000, icon: "🏹" },
      { item: "Magic Fang", chance: 1 / 1024, isUnique: true, defaultVal: 6800000, icon: "🔮" },
      { item: "Serpentine Visage", chance: 1 / 1024, isUnique: true, defaultVal: 3400000, icon: "🐍" },
      { item: "Uncut Onyx", chance: 1 / 1024, isUnique: true, defaultVal: 2000000, icon: "💎" },
      { item: "Pet Snakeling", chance: 1 / 4000, isUnique: true, isPet: true, defaultVal: 0, icon: "🐾" }
    ]
  },
  vardorvis: {
    name: "Vardorvis",
    defaultKPH: 38,
    defaultSupplyCost: 15000,
    mainUniqueDropChance: 1 / 136,
    guaranteed: [],
    normalLootTable: [
      { item: "Dragon Dart Tip", qty: 50, defaultVal: 45000, icon: "🎯" },
      { item: "Soul Runes", qty: 300, defaultVal: 60000, icon: "✨" },
      { item: "Runite Ore", qty: 10, defaultVal: 110000, icon: "🪨" }
    ],
    uniqueLootTable: [
      { item: "Ultor Vestige", chance: 1 / 1088, isUnique: true, defaultVal: 48000000, icon: "💍" },
      { item: "Executioner's Axe Head", chance: 1 / 1088, isUnique: true, defaultVal: 18000000, icon: "🪓" },
      { item: "Butch (Pet)", chance: 1 / 3000, isUnique: true, isPet: true, defaultVal: 0, icon: "🐾" }
    ]
  },
  phantom_muspah: {
    name: "Phantom Muspah",
    defaultKPH: 22,
    defaultSupplyCost: 22000,
    mainUniqueDropChance: 1 / 100,
    guaranteed: [],
    normalLootTable: [
      { item: "Cannonball", qty: 400, defaultVal: 64000, icon: "💣" },
      { item: "Ancient Essence", qty: 800, defaultVal: 72000, icon: "🧪" }
    ],
    uniqueLootTable: [
      { item: "Venator Shard", chance: 1 / 100, isUnique: true, defaultVal: 7100000, icon: "🏹" },
      { item: "Muphin (Pet)", chance: 1 / 2500, isUnique: true, isPet: true, defaultVal: 0, icon: "🐾" }
    ]
  }
};

let liveWikiPrices = {};
let currentLogs = [];
let filterMode = "ALL";

// Fetch Prices Safely Without Browser Security Violations
async function fetchWikiPrices() {
  const statusPulse = document.getElementById("apiPulse");
  const statusText = document.getElementById("apiStatusText");

  try {
    // Browsers forbid setting 'User-Agent' manually in fetch headers
    const response = await fetch("https://prices.runescape.wiki/api/v1/osrs/latest");
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    liveWikiPrices = data.data || {};

    statusPulse.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
    statusText.innerText = "GE Wiki Sync Active";
    statusText.parentElement.className = "flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono";
  } catch (err) {
    statusPulse.className = "w-2 h-2 rounded-full bg-amber-400";
    statusText.innerText = "GE Offline (Defaults Active)";
  }
}

function getItemPrice(itemName, fallbackVal) {
  for (let [id, name] of Object.entries(WIKI_ITEM_IDS)) {
    if (name === itemName && liveWikiPrices[id]) {
      return liveWikiPrices[id].high || fallbackVal;
    }
  }
  return fallbackVal;
}

document.addEventListener("DOMContentLoaded", async () => {
  populateBossSelect();
  if (window.lucide) lucide.createIcons();
  
  await fetchWikiPrices();

  document.getElementById("bossSelect").addEventListener("change", handleBossChange);
  document.getElementById("simBtn").addEventListener("click", runSimulation);
  document.getElementById("downloadZipBtn").addEventListener("click", downloadProjectZip);
  
  document.getElementById("filterAll").addEventListener("click", () => setFilter("ALL"));
  document.getElementById("filterUniques").addEventListener("click", () => setFilter("UNIQUES"));

  handleBossChange();
  runSimulation(); // Initial run on load
});

function populateBossSelect() {
  const bossSelect = document.getElementById("bossSelect");
  bossSelect.innerHTML = Object.keys(BOSS_DATABASE)
    .map(key => `<option value="${key}">${BOSS_DATABASE[key].name}</option>`)
    .join("");
}

function handleBossChange() {
  const bossKey = document.getElementById("bossSelect").value;
  const boss = BOSS_DATABASE[bossKey];
  if (!boss) return;
  document.getElementById("kphInput").value = boss.defaultKPH;
  document.getElementById("supplyInput").value = boss.defaultSupplyCost;
}

function setFilter(mode) {
  filterMode = mode;
  document.getElementById("filterAll").className = mode === "ALL" ? "text-xs px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-bold" : "text-xs px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300";
  document.getElementById("filterUniques").className = mode === "UNIQUES" ? "text-xs px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-bold" : "text-xs px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300";
  renderKillLog();
}

function runSimulation() {
  const bossKey = document.getElementById("bossSelect").value;
  const boss = BOSS_DATABASE[bossKey];
  if (!boss) return;

  const targetKC = parseInt(document.getElementById("kcInput").value) || 100;
  const kph = parseInt(document.getElementById("kphInput").value) || 30;
  const supplyCost = parseInt(document.getElementById("supplyInput").value) || 0;

  currentLogs = [];
  let grossGP = 0;
  let uniqueCount = 0;
  let uniqueGP = 0;
  let petObtained = false;
  let uniqueHitsSummary = [];

  for (let kc = 1; kc <= targetKC; kc++) {
    let killLoot = [];
    let killValue = 0;
    let hitUnique = false;
    let hitPet = false;

    // Guaranteed Drops
    if (boss.guaranteed) {
      boss.guaranteed.forEach(g => {
        const val = getItemPrice(g.item, g.defaultVal);
        const itemVal = val * g.qty;
        killLoot.push({ name: g.item, qty: g.qty, value: itemVal, icon: g.icon, isUnique: false });
        killValue += itemVal;
      });
    }

    // Standard Drops
    if (boss.normalLootTable && boss.normalLootTable.length > 0) {
      const randomNormal = boss.normalLootTable[Math.floor(Math.random() * boss.normalLootTable.length)];
      const normVal = getItemPrice(randomNormal.item, randomNormal.defaultVal);
      killLoot.push({ name: randomNormal.item, qty: randomNormal.qty, value: normVal, icon: randomNormal.icon, isUnique: false });
      killValue += normVal;
    }

    // Unique Rolls
    if (boss.uniqueLootTable) {
      boss.uniqueLootTable.forEach(u => {
        const hitPity = (bossKey === "vorkath" && kc === 50 && u.item === "Vorkath's Head");
        
        if (Math.random() < u.chance || hitPity) {
          const uVal = getItemPrice(u.item, u.defaultVal);
          hitUnique = true;
          if (u.isPet) hitPet = true;
          
          killLoot.push({ name: u.item, qty: 1, value: uVal, icon: u.icon, isUnique: true, isPet: u.isPet });
          killValue += uVal;
          uniqueCount++;
          uniqueGP += uVal;

          uniqueHitsSummary.push({ kc, item: u.item, value: uVal, icon: u.icon, isPet: u.isPet });
        }
      });
    }

    grossGP += killValue;
    if (hitPet) petObtained = true;

    currentLogs.push({
      kc,
      loot: killLoot,
      totalValue: killValue,
      containsUnique: hitUnique,
      containsPet: hitPet
    });
  }

  // Dashboard Metrics Update
  const totalSupplyCost = supplyCost * targetKC;
  const netProfit = grossGP - totalSupplyCost;
  const totalHours = (targetKC / kph).toFixed(1);
  const hourlyProfit = Math.round(netProfit / (targetKC / kph));

  document.getElementById("metricNetProfit").innerText = `${netProfit.toLocaleString()} GP`;
  document.getElementById("metricGrossGP").innerText = `Gross: ${grossGP.toLocaleString()} GP | Supplies: -${totalSupplyCost.toLocaleString()} GP`;
  document.getElementById("metricHourlyGP").innerText = `${hourlyProfit.toLocaleString()} GP/hr`;
  document.getElementById("metricHoursTotal").innerText = `Total Time: ~${totalHours} hrs`;
  document.getElementById("metricUniqueCount").innerText = uniqueCount;
  document.getElementById("metricUniqueGP").innerText = `Unique Value: ${uniqueGP.toLocaleString()} GP`;

  document.getElementById("metricPetStatus").innerText = petObtained ? "Unlocked! 🎉" : "None";
  document.getElementById("metricPetStatus").className = `text-2xl font-bold font-mono mt-1 ${petObtained ? "text-emerald-400" : "text-slate-500"}`;

  const dryChance = Math.pow(1 - boss.mainUniqueDropChance, targetKC) * 100;
  document.getElementById("dryChanceText").innerText = `${dryChance.toFixed(1)}%`;
  document.getElementById("dryProgressBar").style.width = `${Math.min(100, Math.max(0, 100 - dryChance))}%`;

  renderKillLog();
  renderUniqueSummary(uniqueHitsSummary);
}

function renderKillLog() {
  const container = document.getElementById("killLogContainer");
  const filtered = filterMode === "UNIQUES" ? currentLogs.filter(l => l.containsUnique) : currentLogs;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500 text-sm">No kills match criteria.</div>`;
    return;
  }

  container.innerHTML = filtered.map(log => {
    let cardStyle = "bg-slate-950 border-slate-800/80";
    if (log.containsPet) cardStyle = "kill-card-pet";
    else if (log.containsUnique) cardStyle = "kill-card-unique";

    return `
      <div class="p-3.5 border rounded-xl flex items-center justify-between transition ${cardStyle}">
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold px-2 py-1 bg-slate-900 border border-slate-700/80 rounded-md text-amber-400">
            KC #${log.kc}
          </span>
          <div class="flex items-center gap-2 overflow-x-auto">
            ${log.loot.map(item => `
              <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-lg ${item.isUnique ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold' : 'bg-slate-900/60 text-slate-300'} text-xs">
                <span>${item.icon}</span>
                <span>${item.name}</span>
                <span class="text-[10px] text-slate-400 font-mono">x${item.qty}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <span class="text-xs font-mono font-bold text-emerald-400 shrink-0 ml-2">
          +${log.totalValue.toLocaleString()} GP
        </span>
      </div>
    `;
  }).join('');
}

function renderUniqueSummary(uniques) {
  const container = document.getElementById("uniqueSummaryList");
  if (uniques.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500 text-sm">No unique drops hit yet.</div>`;
    return;
  }

  container.innerHTML = uniques.map(u => `
    <div class="p-3 bg-slate-950 border ${u.isPet ? 'border-purple-500/50' : 'border-amber-500/40'} rounded-xl flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="text-xl">${u.icon}</span>
        <div>
          <div class="text-xs font-bold ${u.isPet ? 'text-purple-400' : 'text-amber-400'}">${u.item}</div>
          <div class="text-[10px] text-slate-500 font-mono">Obtained at KC #${u.kc}</div>
        </div>
      </div>
      <span class="text-xs font-mono font-semibold text-slate-200">
        ${u.value > 0 ? u.value.toLocaleString() + ' GP' : 'Untradeable'}
      </span>
    </div>
  `).join('');
}

function downloadProjectZip() {
  const zip = new JSZip();
  zip.file("index.html", document.documentElement.outerHTML);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, "OSRS_Loot_Analytics_Fixed.zip"));
}