import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  "Dev & HelpDesk",
  `Trabalho como Desenvolvedor Full full-stack e Prestando suporte para operadores financeiros`,
  "Desenvolvedor Full Stack e Suporte",
  "Dev & HelpDesk",
  "Mar 2024 - Atual"
);

hoverChangeExperience(
  "Suporte & HelpDesk",
  `Trabalho como suporte e Helpdesk para operadores financeiros`,
  "Suporte e HelpDesk",
  "Suporte & HelpDesk",
  "Mai 2024 - Atual"
);


