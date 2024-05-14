import image from "../../assets/backgr-3.png";
import { styled } from "styled-components";

export const WelcomeSection = styled.section`
  height: 100%;
  width: 100vw;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
`;
export const Shadow = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 92px;
  letter-spacing: 0.6rem;
  color: ${(p) => p.theme.color.redSecond};
  text-align: center;
  margin-bottom: 40px;
`;

export const Title2 = styled.h2`
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 0.8;
  color: ${(p) => p.theme.color.white};
  text-align: center;
  margin-bottom: 100px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 40px 80px 60px;
`;

export const ImgFirst = styled.img`
  position: relative;
  height: 320px;
  width: 600px;
  border-radius: 150px;
  border: 12px solid ${(p) => p.theme.color.grey};
  overflow: hidden;

  opacity: 1;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  &.contain-card {
    object-fit: contain;
  }
`;
