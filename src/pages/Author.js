import { useParams } from "react-router";


const Author = () => {
  const params = useParams();
  return (
    <div>
      <h1>Author {params.name}</h1>
    </div>
  );
}

export default Author;
