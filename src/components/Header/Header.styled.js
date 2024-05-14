import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: fixed;
  border-bottom: 3px solid ${(p) => p.theme.color.red};

  width: 100%;
  top: 0;
  left: 0;
  background: ${(p) => p.theme.color.whiteOrigin};
  z-index: 1000;
`;

export const Container = styled.div`
  width: 1312px;
`;
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 400px;
  margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  height: 24px;
  background: transparent;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &:after {
    content: "";
    display: block;
    padding-top: 24px;
    height: 5px;
    border-bottom: 3px solid transparent;
    transition: border-color 300ms ease-in-out;
  }

  &.active:after,
  &:hover:after {
    border-color: ${(p) => p.theme.color.red};
  }
`;
