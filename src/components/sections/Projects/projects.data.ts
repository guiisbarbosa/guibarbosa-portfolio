import pokemon from "@assets/pokemon.png";
import expertNotes from "@assets/expert-notes.png";
import cardapioOnline from "@assets/cardapio-online.png";
import batPass from "@assets/bat-pass.jpg"
import portfolioMobile from "@assets/portfolio-mobile.jpg"
import apiPodcast from "@assets/api-podcast.png"

export const projects = [
  {
    title: "Pokémon List",
    description:
      "Projeto desenvolvido em ReactJS consumindo a PokéAPI, como forma de aprendizado de teste técnico para o Curso Dev Quest.",
    image: pokemon,
    technologies: ["ReactJS", "JavaScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/pokemon-list",
    livePreviewUrl: "https://pokemon-list-gold-two.vercel.app",
  },
  {
    title: "Expert Notes",
    description:
      "Aplicação criada durante o NLW promovido pela Rocketseat, onde é possível criar notas através da digitação de textos e também captação de voz.",
    image: expertNotes,
    technologies: ["ReactJS", "TypeScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/nlw-expert-notes",
    livePreviewUrl: "https://nlw-expert-notes-three-nu.vercel.app",
  },
  {
    title: "Cardápio online",
    description:
      "Cardápio desenvolvido para uma lanchonete fictícias, contando com a possibilidade de adicionar e remover intens no carrinho e finalizar o pedido através do Whtasapp.",
    image: cardapioOnline,
    technologies: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/cardapio-online",
    livePreviewUrl: "https://guiisbarbosa.github.io/cardapio-online/",
  },
  {
    title: "BatPass Generator",
    description: "Um gerador de senhas com temática do Batman, desenvolvido durante um bootcamp de React Native da DIO.",
    image: batPass,
    technologies: ["React Native", "TypeScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/bat-pass-generator",
  },
  {
    title: "Portfólio Mobile",
    description: "Aplicação mobile, como um portfólio, desenvolvida em React Native, para praticar meus conhecimentos na tecnologia.",
    image:
      portfolioMobile,
    technologies: ["React Native", "TypeScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/portfolio-mobile",
  },
  {
    title: "API Podcast Manager",
    description: "API desenvolvida em Node.js sem utilização de frameworks para fins de aprendizado, criada durante Bootcamp da DIO.",
    image: apiPodcast,
    technologies: ["Node.js", "JavaScript"],
    repositoryUrl: "https://github.com/guiisbarbosa/podcast-manager-node-ts-api-without-framework"
  }
];
