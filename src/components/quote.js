import { useNavigate } from "react-router";
import styled from "styled-components";
import { ROUTES } from "../config/navigation";

const Div = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  border: 1px solid #ede0d4;
`;
const Text = styled.div`
  color: #ede0d4;
  font-size: xx-large;
`;
const Author = styled.div`
  color: #ede0d4;
  align-self: flex-end;
  font-size: x-large;
  font-style: italic;
  &:hover {
    cursor: pointer;
  }
`;

const Quote = ({ data }) => {
  const navigate = useNavigate();
  return (
  <Div>
    <Text>{data.quote}</Text>
    <Author onClick={() => navigate(`${ROUTES.AUTHORS}/${data.author}`)}>
      {data.author} {data.source}
    </Author>
  </Div>
)};

export default Quote;
