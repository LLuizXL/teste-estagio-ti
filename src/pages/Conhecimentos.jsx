import Knowledges from "../components/Knowledges";

export const Conhecimentos = () => {
  return (
    <main className="container d-flex flex-column gap-5">
      <h2 className="">Minhas Habilidades e Especialidades: </h2>
      <section className="d-flex flex-wrap gap-5 justify-content-center">
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />
        <Knowledges nome={"nome 2"} descricao={"descricao da habilidade"} />  
      </section>
    </main>
  );
};
