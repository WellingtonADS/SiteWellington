/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/startup.jpg";

const imageAltText = "A professional coder working at a desk with multiple monitors and a baseball glove.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Dynamics 365, como posso usar no dia-a-dia?",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dio.me/articles/microsoft-dynamics-365-como-posso-usar-no-dia-a-dia",
  },
  {
    title: "Desenvolvimento de 7 MVP",
    description:
      "App para Lanchonetes, App para Barbearia, App de Orçamento, App para Loja Virtual, App para Agendamento, App de Fidelidade, App para Advogados",
    
  },
  {
    title: "Site IdeiaCode",
    description:
      "Criação de site para a empresa IdeiaCode. Hospedado na google cloud, com domínio próprio.",
    url: "https://www.ideiacode.com",
  },
  {
    title: "Particioação no programa de pre-aceleração da Prefeitura de Manaus",
    description:
      "Objetivo da pré-aceleração: Realizar ações para disseminar o empreendedorismo e a inovação na cidade de Manaus. Preparar as startups para que o MVP esteja apto a ser comercializado.",
    
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
