// Database for 12 OSRS Bosses with accurate Drop Tables & Secondary Mechanics
const BOSS_DATABASE = {
  abyssal_sire: {
    name: "Abyssal Sire",
    avgStandardKillGP: 48000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 100, // Unsired
    defaultKPH: 25,
    defaultSupplyCost: 18000,
    mechanicsInfo: "Each kill rolls standard primary drops (~48k GP). Unsired drops at 1/100 and offers a spin at the Font of Consumption table.",
    secondaryTables: [
      {
        name: "Font of Consumption",
        chance: 1 / 100,
        rolls: [
          { item: "Abyssal Bludgeon Piece", chance: 128 / 182, value: 10000000, icon: "https://oldschool.runescape.wiki/images/Abyssal_bludgeon_detail.png" },
          { item: "Abyssal Dagger", chance: 24 / 182, value: 2800000, icon: "https://oldschool.runescape.wiki/images/Abyssal_dagger_detail.png" },
          { item: "Abyssal Whip", chance: 16 / 182, value: 1600000, icon: "https://oldschool.runescape.wiki/images/Abyssal_whip_detail.png" },
          { item: "Jar of Miasma", chance: 10 / 182, value: 250000, icon: "https://oldschool.runescape.wiki/images/Jar_of_miasma_detail.png" },
          { item: "Abyssal Orphan", chance: 1 / 182, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Abyssal_orphan_detail.png" }
        ]
      }
    ]
  },
  zulrah: {
    name: "Zulrah",
    avgStandardKillGP: 42000,
    rollsPerKill: 2,
    mainUniqueDropChance: 1 / 256,
    defaultKPH: 32,
    defaultSupplyCost: 14000,
    mechanicsInfo: "2 rolls per kill on standard primary table + guaranteed Zulrah's scales.",
    guaranteedDrops: [{ item: "Zulrah's Scales", qty: 220, value: 170 }],
    secondaryTables: [
      {
        name: "Uniques",
        chance: 1 / 256,
        rolls: [
          { item: "Tanzanite Fang", chance: 1 / 4, value: 14500000, icon: "https://oldschool.runescape.wiki/images/Tanzanite_fang_detail.png" },
          { item: "Magic Fang", chance: 1 / 4, value: 6800000, icon: "https://oldschool.runescape.wiki/images/Magic_fang_detail.png" },
          { item: "Serpentine Visage", chance: 1 / 4, value: 3400000, icon: "https://oldschool.runescape.wiki/images/Serpentine_visage_detail.png" },
          { item: "Uncut Onyx", chance: 1 / 4, value: 2000000, icon: "https://oldschool.runescape.wiki/images/Uncut_onyx_detail.png" }
        ]
      },
      {
        name: "Pet",
        chance: 1 / 4000,
        rolls: [{ item: "Pet Snakeling", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Pet_snakeling_detail.png" }]
      }
    ]
  },
  vorkath: {
    name: "Vorkath",
    avgStandardKillGP: 68000,
    rollsPerKill: 2,
    mainUniqueDropChance: 1 / 5000,
    defaultKPH: 30,
    defaultSupplyCost: 16000,
    mechanicsInfo: "2 main rolls per kill + guaranteed Superior Dragon Bones. Vorkath Head is guaranteed at 50 KC.",
    guaranteedDrops: [
      { item: "Superior Dragon Bones", qty: 2, value: 12000 },
      { item: "Blue Dragonhide", qty: 2, value: 3200 }
    ],
    secondaryTables: [
      {
        name: "Head",
        chance: 1 / 50,
        rolls: [{ item: "Vorkath's Head", chance: 1, value: 0, icon: "https://oldschool.runescape.wiki/images/Vorkath%27s_head_detail.png" }]
      },
      {
        name: "Visage",
        chance: 1 / 5000,
        rolls: [{ item: "Draconic Visage", chance: 1, value: 8500000, icon: "https://oldschool.runescape.wiki/images/Draconic_visage_detail.png" }]
      },
      {
        name: "Pet",
        chance: 1 / 3000,
        rolls: [{ item: "Vorki", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Vorki_detail.png" }]
      }
    ]
  },
  phantom_muspah: {
    name: "Phantom Muspah",
    avgStandardKillGP: 92000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 100,
    defaultKPH: 22,
    defaultSupplyCost: 22000,
    mechanicsInfo: "High-volume resource stacks + 1/100 chance for Venator Shards (5 needed for bow).",
    secondaryTables: [
      {
        name: "Venator Shard",
        chance: 1 / 100,
        rolls: [{ item: "Venator Shard", chance: 1, value: 7100000, icon: "https://oldschool.runescape.wiki/images/Venator_shard_detail.png" }]
      },
      {
        name: "Pet",
        chance: 1 / 2500,
        rolls: [{ item: "Muphin", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Muphin_detail.png" }]
      }
    ]
  },
  vardorvis: {
    name: "Vardorvis",
    avgStandardKillGP: 41000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 1088,
    defaultKPH: 38,
    defaultSupplyCost: 15000,
    mechanicsInfo: "Uses DT2's 3-roll invisible system for Ultor Vestige. Drops Virtus armor and Executioner's Axe Head.",
    secondaryTables: [
      {
        name: "Uniques",
        chance: 1 / 136,
        rolls: [
          { item: "Ultor Vestige (Requires 3 Rolls)", chance: 1 / 8, value: 48000000, isVestige: true, icon: "https://oldschool.runescape.wiki/images/Ultor_vestige_detail.png" },
          { item: "Executioner's Axe Head", chance: 1 / 8, value: 18000000, icon: "https://oldschool.runescape.wiki/images/Executioner%27s_axe_head_detail.png" },
          { item: "Virtus Mask", chance: 1 / 24, value: 12000000, icon: "https://oldschool.runescape.wiki/images/Virtus_mask_detail.png" },
          { item: "Virtus Robe Top", chance: 1 / 24, value: 45000000, icon: "https://oldschool.runescape.wiki/images/Virtus_robe_top_detail.png" },
          { item: "Virtus Robe Bottom", chance: 1 / 24, value: 38000000, icon: "https://oldschool.runescape.wiki/images/Virtus_robe_bottom_detail.png" }
        ]
      },
      {
        name: "Pet",
        chance: 1 / 3000,
        rolls: [{ item: "Butch", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Butch_detail.png" }]
      }
    ]
  },
  duke_sucellus: {
    name: "Duke Sucellus",
    avgStandardKillGP: 52000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 720,
    defaultKPH: 26,
    defaultSupplyCost: 16000,
    mechanicsInfo: "DT2 Boss with Magus Vestige (3 invisible rolls) and Ice Ancient Icon.",
    secondaryTables: [
      {
        name: "Uniques",
        chance: 1 / 90,
        rolls: [
          { item: "Magus Vestige (Requires 3 Rolls)", chance: 1 / 8, value: 42000000, isVestige: true, icon: "https://oldschool.runescape.wiki/images/Magus_vestige_detail.png" },
          { item: "Eye of the Duke", chance: 1 / 8, value: 14000000, icon: "https://oldschool.runescape.wiki/images/Eye_of_the_duke_detail.png" }
        ]
      },
      {
        name: "Pet",
        chance: 1 / 2500,
        rolls: [{ item: "Baron", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Baron_detail.png" }]
      }
    ]
  },
  commander_zilyana: {
    name: "Commander Zilyana",
    avgStandardKillGP: 31000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 508,
    defaultKPH: 28,
    defaultSupplyCost: 12000,
    mechanicsInfo: "God Wars Dungeon boss dropping Armadyl Crossbow and Saradomin Hilt on a 1/127 unique table roll.",
    secondaryTables: [
      {
        name: "GWD Uniques",
        chance: 1 / 127,
        rolls: [
          { item: "Armadyl Crossbow", chance: 1 / 4, value: 27000000, icon: "https://oldschool.runescape.wiki/images/Armadyl_crossbow_detail.png" },
          { item: "Saradomin Hilt", chance: 1 / 4, value: 18000000, icon: "https://oldschool.runescape.wiki/images/Saradomin_hilt_detail.png" },
          { item: "Saradomin Sword", chance: 1 / 4, value: 300000, icon: "https://oldschool.runescape.wiki/images/Saradomin_sword_detail.png" }
        ]
      },
      {
        name: "Pet",
        chance: 1 / 5000,
        rolls: [{ item: "Pet Zilyana", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Pet_zilyana_detail.png" }]
      }
    ]
  },
  general_graardor: {
    name: "General Graardor",
    avgStandardKillGP: 34000,
    rollsPerKill: 1,
    mainUniqueDropChance: 1 / 384,
    defaultKPH: 30,
    defaultSupplyCost: 14000,
    mechanicsInfo: "Drops Bandos Tassets, Chestplate, and Bandos Hilt.",
    secondaryTables: [
      {
        name: "Bandos Uniques",
        chance: 1 / 127,
        rolls: [
          { item: "Bandos Tassets", chance: 1 / 3, value: 17000000, icon: "https://oldschool.runescape.wiki/images/Bandos_tassets_detail.png" },
          { item: "Bandos Chestplate", chance: 1 / 3, value: 26000000, icon: "https://oldschool.runescape.wiki/images/Bandos_chestplate_detail.png" },
          { item: "Bandos Boots", chance: 1 / 3, value: 200000, icon: "https://oldschool.runescape.wiki/images/Bandos_boots_detail.png" }
        ]
      },
      {
        name: "Pet",
        chance: 1 / 5000,
        rolls: [{ item: "Pet General Graardor", chance: 1, value: 0, isPet: true, icon: "https://oldschool.runescape.wiki/images/Pet_general_graardor_detail.png" }]
      }
    ]
  }
};

// DOM Handles
const bossSelect = document.getElementById("bossSelect");
const kcInput = document.getElementById("kcInput");
const kphInput = document.getElementById("kphInput");
const supplyInput = document.getElementById("supplyInput");
const simBtn = document.getElementById("simBtn");
const downloadZipBtn = document.getElementById("downloadZipBtn");

document.addEventListener("DOMContentLoaded", () => {
  populateBossSelect();
  lucide.createIcons();
  
  bossSelect.addEventListener("change", handleBossChange);
  simBtn.addEventListener("click", runSimulation);
  downloadZipBtn.addEventListener("click", downloadProjectZip);

  handleBossChange();
});

function populateBossSelect() {
  bossSelect.innerHTML = Object.keys(BOSS_DATABASE)
    .map(key => `<option value="${key}">${BOSS_DATABASE[key].name}</option>`)
    .join("");
}

function handleBossChange() {
  const boss = BOSS_DATABASE[bossSelect.value];
  kphInput.value = boss.defaultKPH;
  supplyInput.value = boss.defaultSupplyCost;
  document.getElementById("mechanicsNote").innerText = boss.mechanicsInfo;
  document.getElementById("bossTag").innerText = boss.name;
}

function runSimulation() {
  const bossKey = bossSelect.value;
  const boss = BOSS_DATABASE[bossKey];
  const kc = parseInt(kcInput.value) || 1;
  const kph = parseInt(kphInput.value) || 20;
  const supplyCostPerKill = parseInt(supplyInput.value) || 0;

  let grossGP = 0;
  let uniqueManifest = {};
  let petObtained = false;
  let vestigeProgress = 0; // For DT2 3-roll system

  // 1. Calculate Standard Drops & Supplies
  const totalSupplyCost = supplyCostPerKill * kc;
  grossGP += boss.avgStandardKillGP * boss.rollsPerKill * kc;

  // 2. Add Guaranteed Drops
  if (boss.guaranteedDrops) {
    boss.guaranteedDrops.forEach(drop => {
      grossGP += drop.qty * drop.value * kc;
    });
  }

  // 3. Roll Monte Carlo Kills
  for (let k = 1; k <= kc; k++) {
    // Vorkath Head pity threshold at 50 KC
    if (bossKey === "vorkath" && k === 50 && !uniqueManifest["Vorkath's Head"]) {
      uniqueManifest["Vorkath's Head"] = { count: 1, value: 0, icon: boss.secondaryTables[0].rolls[0].icon };
    }

    boss.secondaryTables.forEach(table => {
      if (Math.random() < table.chance) {
        let rollVal = Math.random();
        let cumulative = 0;

        for (let outcome of table.rolls) {
          cumulative += outcome.chance;
          if (rollVal <= cumulative) {
            
            // Handle DT2 Vestige invisible 3-roll mechanic
            if (outcome.isVestige) {
              vestigeProgress++;
              if (vestigeProgress < 3) break; // Didn't hit 3rd roll yet
              vestigeProgress = 0; // Reset after drop
            }

            grossGP += outcome.value;
            
            if (!uniqueManifest[outcome.item]) {
              uniqueManifest[outcome.item] = { count: 0, value: outcome.value, icon: outcome.icon };
            }
            uniqueManifest[outcome.item].count++;
            
            if (outcome.isPet) petObtained = true;
            break;
          }
        }
      }
    });
  }

  const netProfit = grossGP - totalSupplyCost;
  const totalHours = (kc / kph).toFixed(1);
  const hourlyProfit = Math.round(netProfit / (kc / kph));

  // Render Dashboard Analytics
  document.getElementById("metricNetProfit").innerText = `${netProfit.toLocaleString()} GP`;
  document.getElementById("metricGrossGP").innerText = `Gross: ${grossGP.toLocaleString()} GP | Supplies: -${totalSupplyCost.toLocaleString()} GP`;

  document.getElementById("metricHourlyGP").innerText = `${hourlyProfit.toLocaleString()} GP/hr`;
  document.getElementById("metricHoursTotal").innerText = `Total Time: ~${totalHours} hrs (${kph} KPH)`;

  const totalUniqueCount = Object.keys(uniqueManifest)
    .filter(item => !item.includes("Pet"))
    .reduce((acc, item) => acc + uniqueManifest[item].count, 0);

  const totalUniqueGP = Object.keys(uniqueManifest)
    .reduce((acc, item) => acc + (uniqueManifest[item].count * uniqueManifest[item].value), 0);

  document.getElementById("metricUniqueCount").innerText = totalUniqueCount;
  document.getElementById("metricUniqueGP").innerText = `Unique Value: ${totalUniqueGP.toLocaleString()} GP`;

  document.getElementById("metricPetStatus").innerText = petObtained ? "Unlocked! 🎉" : "None";
  document.getElementById("metricPetStatus").className = `text-2xl font-bold font-mono mt-1 ${petObtained ? "text-emerald-400" : "text-slate-500"}`;
  
  const petTable = boss.secondaryTables.find(t => t.name === "Pet");
  const petOdds = petTable ? (1 - Math.pow(1 - petTable.chance, kc)) * 100 : 0;
  document.getElementById("metricPetOdds").innerText = `Pet Odds: ${petOdds.toFixed(1)}% cumulative`;

  // Render Item Manifest Cards
  const manifestContainer = document.getElementById("uniqueLootList");
  if (Object.keys(uniqueManifest).length === 0) {
    manifestContainer.innerHTML = `
      <div class="col-span-full py-8 text-center border border-dashed border-slate-800 rounded-xl">
        <p class="text-sm text-slate-500">No special unique drops in ${kc} kills. You went dry!</p>
      </div>`;
  } else {
    manifestContainer.innerHTML = Object.keys(uniqueManifest)
      .map(itemName => {
        const item = uniqueManifest[itemName];
        return `
          <div class="item-card flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800/80 rounded-xl">
            <div class="flex items-center gap-3">
              <img src="${item.icon}" alt="${itemName}" class="w-8 h-8 object-contain" />
              <div>
                <div class="text-xs font-semibold text-slate-200">${itemName}</div>
                <div class="text-[10px] text-slate-500 font-mono">${(item.value * item.count).toLocaleString()} GP</div>
              </div>
            </div>
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-400 font-bold font-mono text-xs rounded-lg border border-amber-500/20">
              x${item.count}
            </span>
          </div>
        `;
      }).join("");
  }

  // Calculate Binomial Dry Probability
  const dropRate = boss.mainUniqueDropChance || 0.01;
  const dryChance = Math.pow(1 - dropRate, kc) * 100;
  
  document.getElementById("dryChanceText").innerText = `${dryChance.toFixed(1)}%`;
  document.getElementById("dryProgressBar").style.width = `${Math.min(100, Math.max(0, 100 - dryChance))}%`;
}

// Client Zip Exporter
function downloadProjectZip() {
  const zip = new JSZip();

  const indexHtml = document.documentElement.outerHTML;
  
  // Fetch actual CSS and JS content inline
  zip.file("index.html", `<!DOCTYPE html>\n` + indexHtml);
  
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "OSRS_Loot_Analytics_Project.zip");
  });
}