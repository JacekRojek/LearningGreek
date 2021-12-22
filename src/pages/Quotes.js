import styled from "styled-components";
import Quote from "../components/quote";
import data from "../data/quotes.json";

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

function Quotes() {
  return (
    <Div>
      {data.map((d, i) => (
        <Quote key={i} data={d} />
      ))}
    </Div>
  );
}

export default Quotes;
