import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../config/navigation";
import { COLORS } from "../config/colors";

const NavContainer = styled.nav`
  color: ${COLORS.LIGHT};
  font-size: x-large;
`

const StyledLink = styled(Link)`
  color: ${COLORS.LIGHT};
  font-size: x-large;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${COLORS.LIGHTER};
    text-decoration: none;
  }
`;

function NavigationBar() {
  return (
      <NavContainer>
        <StyledLink to="/">Home</StyledLink>{" | "}
        <StyledLink to={ROUTES.QUOTES}>Quotes</StyledLink>{" | "}
        <StyledLink to={ROUTES.AUTHORS}>Authors</StyledLink>{" | "}
        <StyledLink to={ROUTES.ALPHABET}>Alphabet</StyledLink>
      </NavContainer>
  );
}

export default NavigationBar