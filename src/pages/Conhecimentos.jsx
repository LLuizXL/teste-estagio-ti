import { BsDatabase } from "react-icons/bs";
import Knowledges from "../components/Knowledges";

export const Conhecimentos = () => {
  return (
    <main className="container d-flex flex-column gap-5">
      <h2 className="">Minhas Habilidades e Especialidades: </h2>
      <section className="d-flex flex-wrap gap-5 justify-content-center">
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} Icon={BsDatabase} />
      </section>
    </main>
  );
};
