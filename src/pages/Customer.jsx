import { Link, useParams } from "react-router-dom";
import members from "../members";

const Customer = () => {
  const { id } = useParams();

  const { name } = members.find((item) => item.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
