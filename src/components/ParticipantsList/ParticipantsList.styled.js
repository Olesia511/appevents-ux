import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  background: ${(p) => p.theme.color.whiteOrigin};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  transition: transform 300ms ease-in-out, background 300ms ease-in-out;

  &:hover {
    border-color: ${(p) => p.theme.color.red};
  }

  &.disabl {
    display: none;
  }
`;

export const TextWrapper = styled.h3`
  margin: 40px 20px;
  padding: 80px 20px;
  text-align: center;
  align-items: center;
  width: 480px;
  height: 200px;
  border-radius: 20px;
  border: solid 2px ${(p) => p.theme.color.red};
`;

export const StyledLinkBtn = styled(NavLink)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 16px 40px;
  width: 180px;
  height: 56px;
  border-radius: 200px;
  background: ${(p) => p.theme.color.red};
  font-family: inherit;
  font-weight: 500;
  line-height: inherit;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.whiteOrigin};
  transition: transform 300ms ease-in-out, background 300ms ease-in-out;

  &:hover,
  :active {
    background: ${(p) => p.theme.color.redSecond};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;
