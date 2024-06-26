import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const CardWrapper = styled.li`
  display: flex;
  gap: 24px;
  border: ${(p) => p.theme.border.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`;

export const EventDataWrapper = styled.div`
  width: 526px;
  height: 310px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    margin-right: 16px;
  }
`;

export const EventData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const EventsBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const StyledLinkBtn = styled(NavLink)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 16px 40px;
  width: 166px;
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

export const Description = styled.div`
  width: 500px;
  height: 140px;
  font-size: 18px;
  color: ${(p) => p.theme.color.grey};
  text-align: start;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const TitleOrganizer = styled.h3`
  margin-bottom: 20px;
`;

export const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 290px;
  height: 310px;
  background-color: ${(p) => p.theme.color.whiteSecond};
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;
`;
