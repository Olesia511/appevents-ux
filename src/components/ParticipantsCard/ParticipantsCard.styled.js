import styled from "styled-components";

export const CardWrapper = styled.li`
  display: flex;
  gap: 24px;
  border: ${(p) => p.theme.border.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 582px;
  height: 258px;
`;

export const EventDataWrapper = styled.div`
  width: 300px;
  height: 210px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    margin-right: 16px;
  }
`;

export const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 210px;
  height: 210px;
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
