import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${(p) => p.theme.color.black};
  margin: 16px;
  width: 400px;
`;

export const FormInput = styled.input`
  position: relative;

  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  height: 56px;
  background: ${(p) => p.theme.color.whiteSecond};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};
  /* margin-bottom: 14px; */

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
    &:focus::placeholder,
    &:active::placeholder {
      position: absolute;
      top: 0;
      left: 18px;
    }
  }

  &::placeholder {
    color: ${(p) => p.theme.color.greyPlaceholder};
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: none;
  width: 400px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};
  margin-bottom: 14px;

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
    &:focus::placeholder,
    &:active::placeholder {
      position: absolute;
      top: 0;
      left: 18px;
    }
  }

  &::placeholder {
    color: ${(p) => p.theme.color.greyPlaceholder};
  }
`;

export const FormBtn = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 180px;
  height: 56px;
  background-color: ${(p) => p.theme.color.red};

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.whiteOrigin};
  transition: border-color 300ms ease-in-out;

  &:hover,
  :active {
    background: ${(p) => p.theme.color.redSecond};
  }
`;

export const RadioGroupWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 95px;
  margin-bottom: 64px;
`;

export const RadioLabel = styled.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;

export const RadioInputWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
  border-radius: 10px;
  width: 106px;
  height: 95px;
  transition: all 300ms ease;

  &.fully-integrated {
    width: 128px;
  }
  &.checked {
    border-color: ${(p) => p.theme.color.red};
    transform: scale(1.05);
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
`;

export const RadioLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 16px;
`;
