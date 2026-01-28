const characters = [
  {
    text: "Council of Eight",
    collapsed: true,
    items: [
      { text: "Oralyn Non (former)", link: "/characters/non0" },
      { text: "Oralyn Ulu ", link: "/characters/ulu1" },
      { text: "Oralyn Troa ", link: "/characters/troa2" },
      { text: "Oralyn San ", link: "/characters/san3" },
      { text: "Oralyn Uko ", link: "/characters/uko4" },
      { text: "Oralyn Noa ", link: "/characters/noa5" },
      { text: "Oralyn Lan ", link: "/characters/lan6" },
      { text: "Oralyn Oro ", link: "/characters/oro7" },
      { text: "Oralyn Loa ", link: "/characters/loa8" },
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
      {
        text: "Cosmic Aspharions",
        collapsed: true,
        items: [
          { text: "Oscar Umbra", link: "/characters/oscar_umbra" },
          { text: "Kaylus", link: "/characters/kaylus" },
          { text: "Kosmos", link: "/characters/kosmos" },
          { text: "Gravon", link: "/characters/gravon" },
          { text: "Elaris", link: "/characters/elaris" },
          { text: "Noctis", link: "/characters/noctis" },
          { text: "Nykthos", link: "/characters/nykthos" },
          { text: "Chrona", link: "/characters/chrona" },
          {
            text: "Night & Day sisters",
            collapsed: true,
            items: [
              { text: "Solenyra", link: "/characters/solenyra" },
              { text: "Nytherra", link: "/characters/nytherra" },
            ],
          },
        ],
      },
      {
        text: "Elemental Aspharions",
        collapsed: true,
        items: [
          { text: "Ignis", link: "/characters/ignis" },
          { text: "Magnar", link: "/characters/magnar" },
          { text: "Terris", link: "/characters/terris" },
          { text: "Ferron", link: "/characters/ferron" },
          { text: "Aquarion", link: "/characters/aquarion" },
          { text: "Cryona", link: "/characters/cryona" },
          { text: "Florin", link: "/characters/florin" },
          { text: "Mycelis", link: "/characters/mycelis" },
          { text: "Zephyra", link: "/characters/zephyra" },
          { text: "Voltaris", link: "/characters/voltaris" },
          { text: "Sona", link: "/characters/sona" },
        ],
      },
      {
        text: "Conceptual Aspharions",
        collapsed: true,
        items: [
          { text: "Enygma", link: "/characters/enygma" },
          { text: "Fictor", link: "/characters/fictor" },
          { text: "Lexor", link: "/characters/lexor" },
          { text: "Somniel", link: "/characters/somniel" },
          { text: "Somnivis", link: "/characters/somnivis" },
          { text: "Elthyn", link: "/characters/elthyn" },
          { text: "Psyvra", link: "/characters/psyvra" },
          { text: "Askryn", link: "/characters/askryn" },
          { text: "Mnenos", link: "/characters/mnenos" },
          { text: "Nexara", link: "/characters/nexara" },
          { text: "Kynthis", link: "/characters/kynthis" },
        ],
      },
      {
        text: "Creative Aspharions",
        collapsed: true,
        items: [
          { text: "Grand Architect", link: "/characters/g_architect" },
          { text: "Cadenza", link: "/characters/cadenza" },
          { text: "Chomus", link: "/characters/chomus" },
          { text: "Feyra", link: "/characters/feyra" },
          {
            text: "Culinary siblings",
            collapsed: true,
            items: [
              { text: "Pottel", link: "/characters/pottel" },
              { text: "Salia", link: "/characters/salia" },
              { text: "Dulcina", link: "/characters/dulcina" },
            ],
          },
        ],
      },
      {
        text: "Life Aspharions",
        collapsed: true,
        items: [
          { text: "Vitalis", link: "/characters/vitalis" },
          { text: "Entros", link: "/characters/entros" },
          { text: "Myrkoth", link: "/characters/myrkoth" },
          { text: "Enduriel", link: "/characters/enduriel" },
          { text: "Veridyn", link: "/characters/veridyn" },
          { text: "Elanith", link: "/characters/elanith" },
          { text: "Kayas", link: "/characters/kayas" },
        ],
      },
      {
        text: "Construct Aspharions",
        collapsed: true,
        items: [
          { text: "Macharion", link: "/characters/macharion" },
          { text: "Glitchis", link: "/characters/glitchis" },
        ],
      },
      {
        text: "Conflict Aspharions",
        collapsed: true,
        items: [
          { text: "Obsolis", link: "/characters/obsolis" },
          { text: "Strauros", link: "/characters/strauros" },
          { text: "Lyria", link: "/characters/lyria" },
        ],
      },
      {
        text: "Societal Aspharions",
        collapsed: true,
        items: [
          { text: "Alythra", link: "/characters/alythra" },
          { text: "Theron", link: "/characters/theron" },
        ],
      },
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
  { text: "Lyra Calwen", link: "/characters/lyra_calwen" },
  { text: "Praxion", link: "/characters/praxion" },
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
];

export default characters;
