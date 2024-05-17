import { createGlobalStyle, styled } from "styled-components";

export const CalendarGlobalStyles = createGlobalStyle`


  .react-datepicker__input-container{
    margin-bottom: 14px;
  }
  
  .react-datepicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    border: 1px solid ${(p) => p.theme.color.blackSecond};
    background-color: ${(p) => p.theme.color.whiteOrigin};
    border-radius: 12px;
    padding: 16px;
    width: 325px;
    min-height: 273px;

  }

  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 293px;
    height: 58px;
    border-bottom: none;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 287px;
    height: 14px;
    border-bottom: none;
  }

  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    color: ${(p) => p.theme.color.black}
  }

  .react-datepicker__day-name {
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    text-align: center;
    color: ${(p) => p.theme.color.grey}
  }

  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.color.white};
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(p) => p.theme.color.black};
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 32px;
    color: ${(p) => p.theme.color.black};
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    cursor: pointer;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover,
  .react-datepicker__day:hover,
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${(p) => p.theme.color.grey};
    color: ${(p) => p.theme.color.white};
  }

  .react-datepicker__day.react-datepicker__day--disabled.react-datepicker__day--selected {
    background-color: ${(p) => p.theme.color.whiteOrigin};
  }

  .react-datepicker__day--outside-month {
    background-color: transparent;
    opacity: 0;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__month {
    width: 293px;
    min-height: 163px;
    margin: 0;
  }

  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 293px;
    min-height: 241px;
    margin: 0;
  }

  .react-datepicker__day--outside-month{
    color: ${(p) => p.theme.color.grey};
    opacity: 0.5;
  }

  .react-datepicker-wrapper .react-datepicker__input-container {
    display: inline-flex; 
    position: relative; 
  }

  .react-datepicker__tab-loop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9998; 
  }

  .react-datepicker-popper {
    z-index: 9999; 
  }

  .react-datepicker__day.react-datepicker__day--disabled {
    color: ${(p) => p.theme.color.grey};
    opacity: 0.3;
    background-color: ${(p) => p.theme.color.whiteOrigin};
    cursor: not-allowed;
  }

  .react-datepicker__input-container.react-datepicker__view-calendar-icon {
    flex-direction: row-reverse;
    border-radius: 10px;
    padding: 18px;
    width: 400px;
    height: 56px;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.color.whiteSecond};
    color: ${(p) => p.theme.color.black};
    border: none;
  }
`;

export const StyledMonthsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 293px;
  height: 24px;
  color: ${(p) => p.theme.color.white};
  margin-bottom: 20px;
`;

export const StyledBtnArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const StyledSvgArrowCalendar = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(p) => p.theme.color.black};
  stroke: ${(p) => p.theme.color.black};
  cursor: pointer;
`;

export const StyledMonthsName = styled.span`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.color.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  color: ${(p) => p.theme.color.white};

  & input {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
  }
`;

export const StyledInputDate = styled.input`
  background-color: ${(p) => p.theme.color.whiteSecond};
  color: ${(p) => p.theme.color.black};
  border: none;
  padding: 8px 8px 8px 0;

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
  }
`;

export const StyledSvgCalendar = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${(p) => p.theme.color.black};
  fill: ${(p) => p.theme.color.whiteSecond};
  stroke-width: 1.8;
  cursor: pointer;
`;
