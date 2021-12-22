import { useNavigate } from "react-router";
import styled from "styled-components";
import { ROUTES } from "../../config/navigation";

const Div = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  color: #ede0d4;
  border: 1px solid #ede0d4;
`;
const Name = styled.div`
  color: #ede0d4;
  font-size: xx-large;
`;
const Short = styled.div`
  align-self: center;
  font-size: x-large;
  font-style: italic;
`;

const AuthorItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Div onClick={() => navigate(`${ROUTES.AUTHORS}/${data.name}`)}>
      <Name>
        {data.name}
      </Name>
        <Short>{data.short}</Short>
    </Div>
  );
};

export default AuthorItem;
