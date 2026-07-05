import CardProjetos from "../components/CardProjetos"


export const SobreMim = () => {
    const idade = new Date().getFullYear - 2007
  return (
       <div className="px-5 py-3 d-flex flex-column gap-3 ">
      <main className="d-flex flex-md-row flex-column-reverse gap-3 align-items-center text-center text-md-start justify-content-between">
        <section className="col-md-6">
          <h2>SOBRE MIM</h2>
          <p className="fw-bold  col-12 text-muted text-wrap fs-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat ultrices dui non venenatis. In at felis a lacus ultricies efficitur. Suspendisse et quam sed
             nunc maximus congue ut nec ligula. Quisque imperdiet gravida orci, sit amet
             congue arcu rhoncus a. In convallis varius orci at maximus. Duis ullamcorper iaculis erat, a sagittis mi tempor nec
          </p>
        </section>

        <section>
          <img
            className="img-fluid rounded-bottom-5 d-none d-md-block"
            src="https://placehold.co/400x400"
          />
          <img className="d-block d-md-none" src="https://placehold.co/400x500" alt="" />
        </section>

      </main>
      <main className="text-center text-md-start">
          <h3>Um pouco do meu trabalho:</h3>
        <article className="d-flex flex-row gap-3">
           <CardProjetos img={"https://placehold.co/200x200"} projeto={"Trab 1"} />
           <CardProjetos img={"https://placehold.co/200x200"} projeto={"Trab 2"} />
           <CardProjetos img={"https://placehold.co/200x200"} projeto={"Trab 3"} />

        </article>
      </main>
    </div>
  )
}
