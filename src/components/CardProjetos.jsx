import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const CardProjetos = (props) => {
  // Tambem vai ter os links para o projeto, que vai aparecer no evento hover apenas
  return (
    <div className="link d-flex flex-column text-center align-items-center"> 
        <figure>
          <img src={props.img} width={200} height={200} alt="" />
        </figure>
        <p>{props.projeto}</p>
        <div className="d-flex flex-row gap-3">

         { props.link && (
           <a className="link" href={props.link}><BsBoxArrowUpRight size={30}/></a>
          )}
          <a  href={props.github}><BsGithub className="link" size={30}/></a>
          </div>

    </div>
  );
};

export default CardProjetos;
