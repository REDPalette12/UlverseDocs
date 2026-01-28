import { defineConfig } from "vitepress";

// catagories
import characters from "./catagories/characters";
import species from "./catagories/species";
import vehicles from "./catagories/vehicles";
import technology from "./catagories/technology";
import magic from "./catagories/magic";
import organisations from "./catagories/organisations";
import locations from "./catagories/locations";
import departments from "./catagories/departments";
import events from "./catagories/events";
import culture from "./catagories/culture";
import language from "./catagories/language";
import materials from "./catagories/materials";

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
        items: characters,
      },
      {
        text: "Species",
        collapsed: true,
        items: species,
      },
      {
        text: "Vehicles",
        collapsed: true,
        items: vehicles,
      },
      {
        text: "Technology",
        collapsed: true,
        items: technology,
      },
      {
        text: "Magic",
        collapsed: true,
        items: magic,
      },
      {
        text: "Organisations",
        collapsed: true,
        items: organisations,
      },
      {
        text: "Locations",
        collapsed: true,
        items: locations,
      },
      {
        text: "Ulverse Departments",
        collapsed: true,
        items: departments,
      },
      {
        text: "Historical Events",
        collapsed: true,
        items: events,
      },
      {
        text: "Culture",
        collapsed: true,
        items: culture,
      },
      {
        text: "Language",
        collapsed: true,
        items: language,
      },
      {
        text: "Metals and Materials",
        collapsed: true,
        items: materials,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
