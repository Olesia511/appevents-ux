import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.color.backdrop};

  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 0 40px 40px;
  border: none;
  border-radius: 20px;
  background-color: ${(p) => p.theme.color.whiteOrigin};
  overflow: hidden;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 32px;
  height: 32px;
  z-index: 2500;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.whiteOriginOpacity};
`;

export const ModalClosetSvg = styled.svg`
  width: 32px;
  height: 32px;
  stroke-width: 3;
  stroke: ${(p) => p.theme.color.black};
  fill: green;
`;

export const ModalChildren = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 40px;
  }

  &::-webkit-scrollbar-track {
    margin: 40px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 36px;
    border: 16px solid transparent;
    background-clip: content-box;
    background-color: #d9d9d9;
  }
`;
