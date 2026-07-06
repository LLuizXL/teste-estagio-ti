
import { FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import Knowledges from "../components/Knowledges";
import { profile } from "../contents/sobreMim";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";

export const Conhecimentos = () => {
  const conhecimentos = [
    {
      nome: "HTML&CSS",
      desc: "Conhecimento em HTML e CSS, incluindo boas práticas de desenvolvimento web, clean code e responsividade, masterização de layouts e design de interfaces. utilizando bootstrap",
      icon: FaHtml5,
    },
    {
      nome: "JavaScript",
      desc: "Conhecimento em JavaScript, incluindo programação orientada a objetos, manipulação do DOM e desenvolvimento de aplicações interativas.",
      icon: FaJs,
    },
    {
      nome: "React JS",
      desc: "Conhecimento em React JS, incluindo componentização, gerenciamento de estado, contextos e desenvolvimento de interfaces modernas.",
      icon: FaReact,
    },
    {
      nome: "C#",
      desc: "Conhecimento em C#, incluindo programação orientada a objetos, desenvolvimento de APIs RESTFUL, MVC E Microsservices e integração com o .NET Framework.",
      icon: TbBrandCSharp,
    },
    {
      nome: ".NET",
      desc: "Conhecimento em .NET, incluindo desenvolvimento de aplicações web, integração com bancos de dados e deploy de soluções.",
      icon: SiDotnet,
    },
    {
      nome: "Banco de Dados",
      desc: "Conhecimento em banco de dados, incluindo modelagem, administração de sistemas de gerenciamento de banco de dados e normalização de tabelas.",
      icon: BsDatabase,
    },
    {
      nome: "SQLServer",
      desc: "Conhecimento em SQL Server, incluindo design de banco de dados, otimização de consultas e administração de sistemas de gerenciamento de banco de dados.",
      icon: DiMsqlServer,
    },
    {
      nome: "Figma",
      desc: "Ferramenta que utilizo para design de interfaces, prototipagem e colaboração em equipe.",
      icon: FaFigma,
    },
  ]

  return (
    <main className="container d-flex flex-column gap-5">
      <h2 className="">Minhas Habilidades e Especialidades: </h2>
      <section className="d-flex flex-wrap gap-5 justify-content-center">
        {conhecimentos.map((knowledge) => (
          <Knowledges nome={knowledge.nome} descricao={knowledge.desc} Icon={knowledge.icon} />
        ))}
      </section>
    </main>
  );
};
