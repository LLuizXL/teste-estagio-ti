import CardProjetos from "../components/CardProjetos";
import { profile } from "../contents/sobreMim";

export const SobreMim = () => {
  const resumo = profile["perfil"].resumo;
  const trabalhos = profile["projetos"];
  const foto = profile.perfil["foto"];
  return (
    <div className="px-5 py-3 d-flex flex-column gap-3">
      <main className="d-flex flex-md-row flex-column-reverse align-items-center text-center text-md-start justify-content-between">
        <section className="col-md-6">
          <h2 className="">SOBRE MIM</h2>
          <p className="text-secondary fw-bold  col-12 text-wrap fs-5">
            {resumo}
          </p>
        </section>

        <img
          className="profile-img col-md-4 col-12 rounded-top-5 "
          src={foto}
        />
      </main>

      <main className="text-center text-md-start">
        <h3 className="mb-3">Um pouco do meu trabalho:</h3>

        <article className="d-flex flex-column flex-md-row  gap-3 flex-wrap">
          {trabalhos.map((trab) => (
            <CardProjetos img={trab.img} projeto={trab.nome} github={trab.github} link={trab.link} />
          ))}
        </article>
      </main>
    </div>
  );
};
