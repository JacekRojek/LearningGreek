import data from "../data/authors.json";
import AuthorItem from "../components/Authors/authorItem";

const Authors = () => {
  return (
    <div>
      {data.map((d, i) => (
        <AuthorItem key={i} data={d} />
      ))}
    </div>
  );
}

export default Authors;
