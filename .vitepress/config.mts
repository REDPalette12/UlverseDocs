import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tales of the Eternal Core",
  description: "Wiki",
  cleanUrls: true,
  base: "/UlverseDocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Introduction",
        link: "/docs/",
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
                link: "/docs/characters/non0",
              },
            ],
          },
          {
            text: "Aspharions",
            collapsed: true,
            items: [
              {
                text: "Aspharions Overview",
                link: "/docs/characters/aspharions_overview",
              },
              { text: "Kaylus", link: "/docs/characters/kaylus" },
              { text: "Obsolis", link: "/docs/characters/obsolis" },
              { text: "Grand Architect", link: "/docs/characters/g_architect" },
              { text: "Riley Umbra", link: "/docs/characters/riley_umbra" },
            ],
          },
          {
            text: "Department heads",
            collapsed: true,
            items: [
              { text: "Red Palette", link: "/docs/characters/red_palette" },
              { text: "Vixen Xalvinar", link: "/docs/characters/vixen" },
              { text: "Voltt Xalvinar", link: "/docs/characters/voltt" },
              { text: "Lariel Velstara", link: "/docs/characters/lariel" },
              { text: "Brindle Vexiron", link: "/docs/characters/brindle" },
              { text: "Ophis Tarvell", link: "/docs/characters/ophis" },
              { text: "Eon", link: "/docs/characters/eon" },
            ],
          },
          { text: "Aven Noa", link: "/docs/characters/aven_noa" },
          { text: "Veyron Kael", link: "/docs/characters/veyron_kael" },
          { text: "Veylan Solivis", link: "/docs/characters/veylan_solivis" },
          {
            text: "Ship Crew",
            collapsed: true,
            items: [
              { text: "Captains", collapsed: true, items: [] },

              { text: "First Officers", collapsed: true, items: [] },
              { text: "Technical Officers", collapsed: true, items: [] },
            ],
          },
          {
            text: "Void Beings",
            collapsed: true,
            items: [
              { text: "Ozul Umbra", link: "/docs/characters/ozul_umbra" },
              { text: "Melaina Umbra", link: "/docs/characters/melaina_umbra" },
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
              { text: "Ulverse Races", link: "/docs/species/ulverse_races" },
              { text: "Ulverse Elves", link: "/docs/species/ulverse_elves" },
              {
                text: "Ulverse Humans",
                link: "/docs/species/ulverse_humans",
              },
              {
                text: "Ulverse Hybrids",
                link: "/docs/species/ulverse_hybrids",
              },
              {
                text: "Mechromorphs",
                link: "/docs/species/mechromorphs",
              },
              {
                text: "Collective Existences",
                link: "/docs/species/collective_existences",
              },
              {
                text: "People of the code",
                link: "/docs/species/code_people",
              },
            ],
          },

          {
            text: "Ulversian animals",
            collapsed: true,
            items: [
              {
                text: "Animals of the isles",
                link: "/docs/species/isle_animals",
              },
              {
                text: "Nyxara",
                link: "/docs/species/nyxara",
              },
            ],
          },
          {
            text: "Illnesses",
            collapsed: true,
            items: [
              {
                text: "Illnesses Overview",
                link: "/docs/species/ill_overview",
              },
            ],
          },
          {
            text: "Disablities",
            collapsed: true,
            items: [
              {
                text: "Disabilities Overview",
                link: "/docs/species/diability_overview",
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
              { text: "Aurorian Armada", link: "/docs/vehicles/a_armada" },
              { text: "Astraeus", link: "/docs/vehicles/astraeus" },
              { text: "Eclipsus", link: "/docs/vehicles/eclipsus" },
              {
                text: "Ecliptian Aegis",
                link: "/docs/vehicles/ecliptian_aegis",
              },
            ],
          },
          {
            text: "Codehoppers",
            collapsed: true,
            items: [
              {
                text: "CodeHopper Overview",
                link: "/docs/vehicles/codehop_overview",
              },
              {
                text: "The Chromavoyager",
                link: "/docs/vehicles/red_codehop",
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
              { text: "V.O.R.T.E.X", link: "/docs/technology/vortex" },
              { text: "A.N.V.I.L", link: "/docs/technology/anvil" },
              { text: "M.I.R.A.G.E", link: "/docs/technology/mirage" },
              { text: "R.W. Systems", link: "/docs/technology/rws" },
            ],
          },
          {
            text: "Personal Systems",
            collapsed: true,
            items: [
              { text: "Gear Tokens", link: "/docs/technology/gear_tokens" },
            ],
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
                        link: "/docs/technology/veloxengine",
                      },
                      {
                        text: "G.R.A.V. Engine",
                        link: "/docs/technology/gravengine",
                      },
                      {
                        text: "PHASE-WAVE Engine",
                        link: "/docs/technology/phasewaveengine",
                      },
                    ],
                  },
                  {
                    text: "Aquatic Engines",
                    collapsed: true,
                    items: [
                      {
                        text: "HYDRO-JET Engines",
                        link: "/docs/technology/hydrojetengines",
                      },
                      {
                        text: "AQUA-GRAV Engines",
                        link: "/docs/technology/aquagravengines",
                      },
                      {
                        text: "WAVESHIFT Engines",
                        link: "/docs/technology/waveshiftengines",
                      },
                    ],
                  },
                  {
                    text: "Land Engines",
                    collapsed: true,
                    items: [
                      {
                        text: "MAG-STRIDE Engines",
                        link: "/docs/technology/magstrideengines",
                      },
                      {
                        text: "T.R.E.A.D. Engines",
                        link: "/docs/technology/treadengines",
                      },
                      {
                        text: "A.E.G.I.S. WALK Engines",
                        link: "/docs/technology/aegiswalkengines",
                      },
                      {
                        text: "A.R.C. Climber Engines",
                        link: "/docs/technology/arcclimberengines",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Warp Drives",
                collapsed: true,
                items: [
                  { text: "Warp Overview", link: "/docs/technology/warp" },
                  {
                    text: "F.R.A.C.T.A.L. Jump-Drive",
                    link: "/docs/technology/fractaldrive",
                  },
                  {
                    text: "R.I.F.T. SYNC' Drive",
                    link: "/docs/technology/riftsync",
                  },
                  {
                    text: "C.O.D.E. Drive",
                    link: "/docs/technology/codedrive",
                  },
                  {
                    text: "G.A.T.E. TETHER Drive",
                    link: "/docs/technology/gatetether",
                  },
                  {
                    text: "W.A.R.P. RAIL Drive",
                    link: "/docs/technology/warprail",
                  },
                  {
                    text: "W.E.A.V.E. Drive",
                    link: "/docs/technology/weavedrive",
                  },
                  {
                    text: "W.E.A.V.E. Drive",
                    link: "/docs/technology/warprail",
                  },
                  {
                    text: "Obselete Drives",
                    collapsed: true,
                    items: [
                      {
                        text: "C.O.R.E. Drive",
                        link: "/docs/technology/coredrive",
                      },
                      {
                        text: "PHASE-Vor.T.E.X. Drive",
                        link: "/docs/technology/phasevortexdrive",
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
                    link: "/docs/technology/ccesystems",
                  },
                  {
                    text: "C.S.E. Systems",
                    link: "/docs/technology/csesystems",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Magic",
        collapsed: true,
        items: [
          {
            text: "Spells",
            collapsed: true,
            items: [],
          },
          {
            text: "Magic Items",
            collapsed: true,
            items: [],
          },
          {
            text: "Wands",
            collapsed: true,
            items: [],
          },
          {
            text: "Staves",
            collapsed: true,
            items: [],
          },
        ],
      },
      {
        text: "Organisations",
        collapsed: true,
        items: [
          {
            text: "Ulverse High Council",
            link: "/docs/organisations/high_council",
          },
          {
            text: "Council of Eight",
            link: "/docs/organisations/council8",
          },
          {
            text: "PMA Department Heads",
            link: "/docs/organisations/dep_heads",
          },
          {
            text: "The Watchers",
            link: "/docs/organisations/watchers",
          },
          {
            text: "Vixen & Voltt Technologies",
            link: "/docs/organisations/vixen_voltt_tech",
          },
          {
            text: "The Codebreakers",
            link: "/docs/organisations/codebreakers",
          },
        ],
      },
      {
        text: "Locations",
        collapsed: true,
        items: [
          { text: "Ulverse Isles", link: "/docs/locations/ulverse_isles" },

          {
            text: "Cities And Settlements",
            collapsed: true,
            items: [
              { text: "Cities", link: "/docs/locations/cities" },
              { text: "Machina Aeternum", link: "/docs/locations/mechcity" },
            ],
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
            link: "/docs/historical_events/WOTSV",
          },
        ],
      },
      {
        text: "Culture",
        collapsed: true,
        items: [
          { text: "Birth Traditions", items: [] },
          {
            text: "Death Traditions",
            collapsed: true,
            items: [
              {
                text: "Death Traditions Overview",
                link: "/docs/culture/dtoverview",
              },
            ],
          },
          { text: "Coming of age Traditions", items: [] },
          { text: "Marriage Traditions", items: [] },
          { text: "Festivals and Holidays", items: [] },
          {
            text: "Greetings and Introductions",
            link: "/docs/culture/greetandintro",
          },
        ],
      },
      {
        text: "Language",
        collapsed: true,
        items: [{ text: "Javaxian", link: "/docs/language/javaxian" }],
      },
      {
        text: "Metals and Materials",
        collapsed: true,
        items: [
          {
            text: "Cosmora Crystals",
            link: "/docs/materials/cosmoracrystals",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
