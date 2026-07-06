import { BsDatabase } from "react-icons/bs";
import Knowledges from "../components/Knowledges";
import { profile } from "../contents/sobreMim";

export const Conhecimentos = () => {
  const knowledge = profile.conhecimentos;

  return (
    <main className="container d-flex flex-column gap-5">
      <h2 className="">Minhas Habilidades e Especialidades: </h2>
      <section className="d-flex flex-wrap gap-5 justify-content-center">
        {knowledge.map((knowledge) => (
          <Knowledges nome={knowledge.nome} descricao={knowledge.desc} />
        ))}
      </section>
    </main>
  );
};
