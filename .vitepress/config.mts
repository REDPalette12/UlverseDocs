import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  rewrites: {
    "docs/:rest*": ":rest*",
  },

  title: "Tales of the Eternal Core",
  description: "Wiki",
  cleanUrls: true,
  base: "/UlverseDocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    outline: {
      level: [2, 3],
    },

    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Characters",
        collapsed: true,
        items: [
          {
            text: "Council of Eight",
            collapsed: true,
            items: [
              {
                text: "Riley Non (former)",
                link: "/characters/non0",
              },
            ],
          },
          {
            text: "Aspharions",
            collapsed: true,
            items: [
              {
                text: "Aspharions Overview",
                link: "/characters/aspharions_overview",
              },
              { text: "Kaylus", link: "/characters/kaylus" },
              { text: "Obsolis", link: "/characters/obsolis" },
              { text: "Grand Architect", link: "/characters/g_architect" },
              { text: "Riley Umbra", link: "/characters/riley_umbra" },
            ],
          },
          {
            text: "Department heads",
            collapsed: true,
            items: [
              { text: "Red Palette", link: "/characters/red_palette" },
              { text: "Vixen Xalvinar", link: "/characters/vixen" },
              { text: "Voltt Xalvinar", link: "/characters/voltt" },
              { text: "Lariel Velstara", link: "/characters/lariel" },
              { text: "Brindle Vexiron", link: "/characters/brindle" },
              { text: "Ophis Tarvell", link: "/characters/ophis" },
              { text: "Eon", link: "/characters/eon" },
            ],
          },
          { text: "Aven Noa", link: "/characters/aven_noa" },
          { text: "Veyron Kael", link: "/characters/veyron_kael" },
          { text: "Veylan Solivis", link: "/characters/veylan_solivis" },
          {
            text: "Lyra Calwen",
            link: "/characters/lyra_calwen",
          },
          // {
          //   text: "Ship Crew",
          //   collapsed: true,
          //   items: [
          //     { text: "Captains", collapsed: true, items: [] },

          //     { text: "First Officers", collapsed: true, items: [] },
          //     { text: "Technical Officers", collapsed: true, items: [] },
          //   ],
          // },
          {
            text: "Void Beings",
            collapsed: true,
            items: [
              { text: "Ozul Umbra", link: "/characters/ozul_umbra" },
              { text: "Melaina Umbra", link: "/characters/melaina_umbra" },
            ],
          },
        ],
      },
      {
        text: "Species",
        collapsed: true,
        items: [
          {
            text: "Ulversian Races",
            collapsed: true,
            items: [
              { text: "Ulverse Races", link: "/species/ulverse_races" },
              { text: "Ulverse Elves", link: "/species/ulverse_elves" },
              {
                text: "Ulverse Humans",
                link: "/species/ulverse_humans",
              },
              {
                text: "Shared Ulversian Traits",
                link: "/species/shared_ulverse_traits",
              },
              {
                text: "Ulversian Healing",
                link: "/species/ulverse_healing",
              },
              {
                text: "Ulverse Hybrids",
                link: "/species/ulverse_hybrids",
              },
              {
                text: "Mechromorphs",
                link: "/species/mechromorphs",
              },
              {
                text: "Collective Existences",
                link: "/species/collective_existences",
              },
              {
                text: "People of the code",
                link: "/species/code_people",
              },
            ],
          },

          {
            text: "Ulversian animals",
            collapsed: true,
            items: [
              {
                text: "Animals of the isles",
                link: "/species/isle_animals",
              },
              {
                text: "Nyxara",
                link: "/species/nyxara",
              },
            ],
          },
          {
            text: "Other Species",
            collapsed: true,
            items: [
              {
                text: "Universal Errors",
                link: "/docs/species/universalerrors",
              },
            ],
          },
          {
            text: "Illnesses",
            collapsed: true,
            items: [
              {
                text: "Illnesses Overview",
                link: "/species/ill_overview",
              },
            ],
          },
          {
            text: "Disablities",
            collapsed: true,
            items: [
              {
                text: "Disabilities Overview",
                link: "/species/disability_overview",
              },
            ],
          },
        ],
      },
      {
        text: "Vehicles",
        collapsed: true,
        items: [
          {
            text: "Aurorian Armada",
            collapsed: true,
            items: [
              { text: "Aurorian Armada", link: "/vehicles/a_armada" },
              { text: "Astraeus", link: "/vehicles/astraeus" },
              { text: "Eclipsus", link: "/vehicles/eclipsus" },
              {
                text: "Ecliptian Aegis",
                link: "/vehicles/ecliptian_aegis",
              },
              {
                text: "Vast Horizon",
                link: "/vehicles/vast_horizon",
              },
            ],
          },
          {
            text: "Codehoppers",
            collapsed: true,
            items: [
              {
                text: "CodeHopper Overview",
                link: "/vehicles/codehop_overview",
              },
              {
                text: "The Chromavoyager",
                link: "/vehicles/red_codehop",
              },
            ],
          },
        ],
      },
      {
        text: "Technology",
        collapsed: true,
        items: [
          {
            text: "Weapons",
            collapsed: true,
            items: [
              { text: "V.O.R.T.E.X", link: "/technology/vortex" },
              { text: "A.N.V.I.L", link: "/technology/anvil" },
              { text: "M.I.R.A.G.E", link: "/technology/mirage" },
              { text: "R.W. Systems", link: "/technology/rws" },
            ],
          },
          {
            text: "Personal Systems",
            collapsed: true,
            items: [{ text: "Gear Tokens", link: "/technology/gear_tokens" }],
          },
          {
            text: "Power & Traversal Systems",
            collapsed: true,
            items: [
              {
                text: "Engines",
                collapsed: true,
                items: [
                  {
                    text: "Flight Engines",
                    collapsed: true,
                    items: [
                      {
                        text: "V.E.L.O.X. Engine",
                        link: "/technology/veloxengine",
                      },
                      {
                        text: "G.R.A.V. Engine",
                        link: "/technology/gravengine",
                      },
                      {
                        text: "PHASE-WAVE Engine",
                        link: "/technology/phasewaveengine",
                      },
                    ],
                  },
                  {
                    text: "Aquatic Engines",
                    collapsed: true,
                    items: [
                      {
                        text: "HYDRO-JET Engines",
                        link: "/technology/hydrojetengines",
                      },
                      {
                        text: "AQUA-GRAV Engines",
                        link: "/technology/aquagravengines",
                      },
                      {
                        text: "WAVESHIFT Engines",
                        link: "/technology/waveshiftengines",
                      },
                    ],
                  },
                  {
                    text: "Land Engines",
                    collapsed: true,
                    items: [
                      {
                        text: "MAG-STRIDE Engines",
                        link: "/technology/magstrideengines",
                      },
                      {
                        text: "T.R.E.A.D. Engines",
                        link: "/technology/treadengines",
                      },
                      {
                        text: "A.E.G.I.S. WALK Engines",
                        link: "/technology/aegiswalkengines",
                      },
                      {
                        text: "A.R.C. Climber Engines",
                        link: "/technology/arcclimberengines",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Warp Drives",
                collapsed: true,
                items: [
                  { text: "Warp Overview", link: "/technology/warp" },
                  {
                    text: "F.R.A.C.T.A.L. Jump-Drive",
                    link: "/technology/fractaldrive",
                  },
                  {
                    text: "R.I.F.T. SYNC' Drive",
                    link: "/technology/riftsync",
                  },
                  {
                    text: "C.O.D.E. Drive",
                    link: "/technology/codedrive",
                  },
                  {
                    text: "G.A.T.E. TETHER Drive",
                    link: "/technology/gatetether",
                  },
                  {
                    text: "W.A.R.P. RAIL Drive",
                    link: "/technology/warprail",
                  },
                  {
                    text: "W.E.A.V.E. Drive",
                    link: "/technology/weavedrive",
                  },
                  {
                    text: "Obselete Drives",
                    collapsed: true,
                    items: [
                      {
                        text: "C.O.R.E. Drive",
                        link: "/technology/coredrive",
                      },
                      {
                        text: "PHASE-Vor.T.E.X. Drive",
                        link: "/technology/phasevortexdrive",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Power Systems",
                collapsed: true,
                items: [
                  {
                    text: "C.C.E. Systems",
                    link: "/technology/ccesystems",
                  },
                  {
                    text: "C.S.E. Systems",
                    link: "/technology/csesystems",
                  },
                ],
              },
            ],
          },
          { text: "T.H.R.E.A.D.E Network", link: "/technology/threaden" },
        ],
      },
      {
        text: "Magic",
        collapsed: true,
        items: [
          {
            text: "Ulversian Magic",
            link: "/magic/magic_basics",
          },
          {
            text: "Spells",
            // collapsed: true,
            // items: [],
          },
          {
            text: "Magic Items",
            // collapsed: true,
            // items: [],
          },
          {
            text: "Wands",
            // collapsed: true,
            // items: [],
          },
          {
            text: "Staves",
            // collapsed: true,
            // items: [],
          },
        ],
      },
      {
        text: "Organisations",
        collapsed: true,
        items: [
          {
            text: "Ulverse High Council",
            link: "/organisations/high_council",
          },
          {
            text: "Council of Eight",
            link: "/organisations/council8",
          },
          {
            text: "PMA Department Heads",
            link: "/organisations/dep_heads",
          },
          {
            text: "The Watchers",
            link: "/organisations/watchers",
          },
          {
            text: "Vixen & Voltt Technologies",
            link: "/organisations/vixen_voltt_tech",
          },
          {
            text: "The Codebreakers",
            link: "/organisations/codebreakers",
          },
          {
            text: "The Ulversian Emergency Services (UES)",
            link: "/organisations/ues",
          },
        ],
      },
      {
        text: "Locations",
        collapsed: true,
        items: [
          { text: "Ulverse Isles", link: "/locations/ulverse_isles" },

          {
            text: "Cities And Settlements",
            collapsed: true,
            items: [
              { text: "Cities", link: "/locations/cities" },
              { text: "Machina Aeternum", link: "/locations/mechcity" },
            ],
          },
          {
            text: "S.O.L.A.R.I.S Stations",
            link: "/locations/solaris_stations",
          },
        ],
      },
      {
        text: "Ulverse Departments",
        collapsed: true,
        items: [],
      },
      {
        text: "Historical Events",
        collapsed: true,
        items: [
          {
            text: "War of the Shining Vortex",
            link: "/historical_events/WOTSV",
          },
        ],
      },
      {
        text: "Culture",
        collapsed: true,
        items: [
          {
            text: "Currency",
            link: "/culture/currency",
          },
          {
            text: "Ulversian calendar",
            link: "/culture/calendar",
          },
          {
            text: "Birth Traditions",
            collapsed: true,
            items: [
              {
                text: "'Birthdays'",
                link: "/culture/birthdays",
              },
              {
                text: "Twin Births",
                link: "/culture/twins",
              },
            ],
          },
          {
            text: "Family Traditions",
            collapsed: true,
            items: [
              {
                text: "Vyran Sigils",
                link: "/culture/vyren_sigils",
              },
            ],
          },
          {
            text: "Death Traditions",
            collapsed: true,
            items: [
              {
                text: "Death Traditions Overview",
                link: "/culture/dtoverview",
              },
            ],
          },
          { text: "Coming of age Traditions", items: [] },
          { text: "Marriage Traditions", items: [] },
          { text: "Festivals and Holidays", items: [] },
          {
            text: "Greetings and Introductions",
            link: "/culture/greetandintro",
          },
          {
            text: "Stories and Mythology",
            collapsed: true,
            items: [
              {
                text: "'Weaver of Horizons' Myth",
                link: "/culture/xeyara",
              },
            ],
          },
          {
            text: "Legal Systems",
            link: "/culture/legal_systems",
          },
          {
            text: "Basic Etiquette",
            link: "/culture/etiquette",
          },
        ],
      },
      {
        text: "Language",
        collapsed: true,
        items: [{ text: "Javaxian", link: "/language/javaxian" }],
      },
      {
        text: "Metals and Materials",
        collapsed: true,
        items: [
          {
            text: "Cosmora Crystals",
            link: "/materials/cosmoracrystals",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
