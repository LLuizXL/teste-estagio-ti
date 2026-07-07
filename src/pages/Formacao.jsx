import TimelineLeft from "../components/TimeLine/TimelineLeft";
import TimelineRight from "../components/TimeLine/TimelineRight";

export const Formacao = () => {
  return (
    <main className="d-flex flex-column position-relative">
      <h3 className="text-center">Trajetoria</h3>
      <section className="timeline d-flex col-12 flex-column p-5 align-items-center row-gap-md-0 row-gap-3">

       <TimelineLeft />
       <TimelineRight />
       <TimelineLeft />
       <TimelineRight />
       <TimelineLeft />
      </section>
    </main>
  );
};
