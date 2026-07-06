import TimelineLeft from "../components/TimeLine/TimelineLeft";
import TimelineRight from "../components/TimeLine/TimelineRight";

export const Formacao = () => {
  return (
    <main className="d-flex flex-column align-items-center">
      <h3>Trajetoria</h3>
      <section className="d-flex col-12 col-md-6 flex-column p-5">

        <TimelineLeft />
        <TimelineRight />
         <TimelineLeft />
        <TimelineRight />
         <TimelineLeft />
        <TimelineRight />
         <TimelineLeft />
        <TimelineRight />
      </section>
    </main>
  );
};
