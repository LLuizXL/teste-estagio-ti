import TimelineLeft from "../components/TimeLine/TimelineLeft";
import TimelineRight from "../components/TimeLine/TimelineRight";
import { profile } from "../contents/sobreMim";

export const Formacao = () => {
  const formacao = profile.formacao
  return (
    <main className="d-flex flex-column position-relative">
      <h3 className="text-center">Trajetoria</h3>
      <section className="timeline d-flex col-12 flex-column p-5 align-items-center row-gap-md-0 row-gap-3">

       <TimelineLeft ano={formacao[0].periodo} nome={formacao[0].nome} descricao={formacao[0].instituicao} graducao={""}  />
       <TimelineRight ano={formacao[1].periodo} nome={formacao[1].nome} descricao={formacao[1].instituicao} graducao={""}/>
       <TimelineLeft ano={formacao[2].periodo} nome={formacao[2].nome} descricao={formacao[2].instituicao} graducao={""}/>
       <TimelineRight ano={formacao[3].periodo} nome={formacao[3].nome} descricao={formacao[3].instituicao} graducao={""} />
       <TimelineLeft ano={formacao[4].periodo} nome={formacao[4].nome} descricao={formacao[4].instituicao} graducao={""}/>
      </section>
    </main>
  );
};
