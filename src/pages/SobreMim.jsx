import CardProjetos from "../components/CardProjetos";
import { profile } from "../contents/sobreMim";

export const SobreMim = () => {
  const resumo = profile["perfil"].resumo;
  const trabalhos = profile["projetos"];
  const foto = profile.perfil["foto"];
  return (
    <div className="px-5 py-3 d-flex flex-column gap-3">
      <section
        className="d-flex flex-md-row flex-column-reverse gap-3 align-items-center text-center text-md-start justify-content-between"
        aria-labelledby="aboutHeading"
      >
        <article className="col-md-6">
          <h1 id="aboutHeading">SOBRE MIM</h1>
          <p className=" fw-bold  col-12 text-wrap fs-5">
           {resumo}
          </p>
        </article>

        <section>
          <img
            className="profile-img img-fluid rounded-start-5 d-none d-md-block"
            src="https://placehold.co/400x400"
            alt="Foto de perfil profissional em desktop"
          />
          <img
            className="profile-img d-block d-md-none img-fluid rounded-top-5"
            src="https://placehold.co/400x500"
            alt="Foto de perfil profissional em mobile"
          />
        </section>
      </section>
      <section
        className="text-center text-md-start"
        aria-labelledby="projectsHeading"
      >
        <h2 id="projectsHeading" className="mb-3 ">
          Um pouco do meu trabalho:
        </h2>

        <article
          className="d-flex flex-column flex-md-row gap-5 gap-md-3 flex-wrap"
          role="list"
        >
          <div role="listitem">
            {trabalhos.map((trab) => { 

              <CardProjetos
              img={"https://placehold.co/200x200"}
              projeto={"Trab 1"}
              github={"https://github.com/LLuizXL"}
              link={"https://luiz.com"}
              />
            })}
          </div>
      
        </article>
      </section>
    </div>
  );
};
