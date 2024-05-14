import { Container, HeaderContainer, NavWrapper, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <NavWrapper>
          <StyledLink exact="true" to="/">
            Home
          </StyledLink>

          <StyledLink to="/events">Events</StyledLink>
        </NavWrapper>
      </Container>
    </HeaderContainer>
  );
};
