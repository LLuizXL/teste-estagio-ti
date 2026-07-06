import CardProjetos from "../components/CardProjetos";
import { profile } from "../contents/sobreMim";

export const SobreMim = () => {
  const resumo = profile["perfil"].resumo;

  const trabalhos = profile["projetos"];
  return (
    <div className="px-5 py-3 d-flex flex-column gap-3">
      <main className="d-flex flex-md-row flex-column-reverse gap-3 align-items-center text-center text-md-start justify-content-between">
        <section className="col-md-6">
          <h2 className="">SOBRE MIM</h2>
          <p className="text-secondary fw-bold  col-12 text-wrap fs-5">
            {resumo}
          </p>
        </section>

       
          <img
            className="container-imagem d-none d-md-block"
            src="src/assets/foto1.jpeg"
            />
          <img
            className="d-block d-md-none img-fluid"
            src="https://placehold.co/400x500"
            alt=""
            />
        
      </main>
      <main className="text-center text-md-start">
        <h3 className="mb-3 text-secondary">Um pouco do meu trabalho:</h3>

        <article className="d-flex flex-column flex-md-row  gap-3 flex-wrap">
          {trabalhos.map((trab) => (
            <CardProjetos img={trab.img} projeto={trab.nome} />
          ))}
        </article>
      </main>
    </div>
  );
};
