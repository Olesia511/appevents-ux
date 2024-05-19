// import sprite from "assets/sprite.svg";
import { forwardRef, useState, useEffect, useRef } from "react";
import { format, subMonths, addMonths } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper, StyledSvgCalendar, StyledMonthsWrapper } from "./StyledDatePicker.styled";
import { StyledBtnArrow, StyledMonthsName, StyledSvgArrowCalendar, StyledInputDate } from "./StyledDatePicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../redux/dateBirth/slice";

import { selectorDateBirth } from "../../redux/dateBirth/selectors";

const StyledDatepicker = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const selectDate = useSelector(selectorDateBirth);

  const [currentMonth, setCurrentMonth] = useState("");

  const datePickerRef = useRef(null);

  useEffect(() => {
    setCurrentMonth(format(selectDate, "MMMM yyyy"));
  }, [selectDate]);

  const handlePreviousMonth = () => {
    const newDate = subMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()));
  };

  const handleNextMonth = () => {
    const newDate = addMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()));
  };

  const handleDateChange = (newDate) => {
    if (newDate && !isNaN(newDate.getTime())) {
      dispatch(changeDate(newDate.toISOString()));
    }
  };

  const CustomInput = forwardRef(({ value, onKeyDown }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [prevValue, setPrevValue] = useState("");

    useEffect(() => {
      setInputValue(value);
      setPrevValue(value);
    }, [value]);

    const handleChange = (e) => {
      const value = e.target.value.replace(/\D/g, "");

      let formattedValue = value;
      if (value.length > 2 && value.length < 5) {
        formattedValue = value.slice(0, 2) + "/" + value.slice(2);
      } else if (value.length >= 5) {
        formattedValue = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
      }

      setInputValue(formattedValue);

      if (e.target.value.length === 10) {
        const [day, month, year] = formattedValue.split("/");
        const newDate = new Date(`${year}-${month}-${day}`);

        if (!isNaN(newDate.getTime())) {
          setInputValue(format(newDate, "dd/MM/yyyy"));
          dispatch(changeDate(newDate.toISOString()));
          handleDateChange(newDate);
        }
      }
    };

    const handleBlur = () => {
      if (!isValidDate(inputValue) || inputValue.trim() === "") {
        setInputValue(prevValue);
      }

      if (!isValidDate(inputValue) || inputValue.trim() === "") {
        setInputValue(format(selectDate, "dd/MM/yyyy"));
      }
    };

    const isValidDate = (dateString) => {
      const datePattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
      return datePattern.test(dateString);
    };

    const handleEnterPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const formattedDate = inputValue.replace(/\//g, "");
        const day = formattedDate.substring(0, 2);
        const month = formattedDate.substring(2, 4);
        const year = formattedDate.substring(4, 8);

        let newDate;

        if (year.length < 4) {
          const currentYear = new Date().getFullYear();
          newDate = new Date(`${currentYear}-${month}-${day}`);
        } else {
          newDate = new Date(`${year}-${month}-${day}`);
        }

        if (!isNaN(newDate.getTime())) {
          dispatch(changeDate(newDate.toISOString()));

          setInputValue(format(newDate, "dd/MM/yyyy"));
          return;
        }

        setInputValue(format(selectDate, "dd/MM/yyyy"));
      }
    };

    return (
      <TitleWrapper>
        <StyledInputDate
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            handleEnterPress(e);
            onKeyDown(e);
          }}
          ref={ref}
        />
      </TitleWrapper>
    );
  });

  CustomInput.displayName = "CustomInput";

  return (
    <>
      <DatePicker
        ref={(el) => {
          datePickerRef.current = el;
          if (ref) ref.current = el;
        }}
        {...props}
        showIcon
        toggleCalendarOnIconClick
        icon={
          <StyledSvgCalendar xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 32 32">
            <use xlinkHref="#icon-calendar" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M25.333 5.333H6.666A2.667 2.667 0 0 0 3.999 8v18.667a2.667 2.667 0 0 0 2.667 2.667h18.667A2.667 2.667 0 0 0 28 26.667V8a2.667 2.667 0 0 0-2.667-2.667zm-4-2.666V8M10.667 2.667V8M4 13.333h24"
            />

            {/* <use href={`${sprite}#icon-calendar`} /> */}
          </StyledSvgCalendar>
        }
        closeOnScroll={(e) => e.target !== ""}
        selected={selectDate}
        onChange={handleDateChange}
        dateFormat={"dd/MM/yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 3)}
        customInput={
          <CustomInput
            value={format(selectDate, "dd/MM/yyyy")}
            onChange={() => dispatch(changeDate)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        }
        renderCustomHeader={({ decreaseMonth, increaseMonth }) => (
          <StyledMonthsWrapper>
            <StyledBtnArrow
              type="button"
              className="react-datepicker__navigation--previous"
              aria-label="Previous Month"
              onClick={decreaseMonth}
            >
              <StyledSvgArrowCalendar
                onClick={handlePreviousMonth}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-arrow-left" />
                <path d="M20.943 5.724a1.333 1.333 0 0 1 0 1.886l-8.391 8.391 8.391 8.391a1.333 1.333 0 1 1-1.886 1.886l-9.333-9.333a1.333 1.333 0 0 1 0-1.886l9.333-9.333a1.333 1.333 0 0 1 1.886 0z" />
              </StyledSvgArrowCalendar>
            </StyledBtnArrow>

            <StyledMonthsName className="react-datepicker__current-month">{currentMonth}</StyledMonthsName>

            <StyledBtnArrow
              type="button"
              className="react-datepicker__navigation--next"
              aria-label="Next Month"
              onClick={increaseMonth}
            >
              <StyledSvgArrowCalendar
                onClick={handleNextMonth}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-arrow-right" />
                <path d="M11.057 26.276a1.333 1.333 0 0 1 0-1.886l8.391-8.391-8.391-8.391a1.333 1.333 0 1 1 1.886-1.886l9.333 9.333a1.333 1.333 0 0 1 0 1.886l-9.333 9.333a1.333 1.333 0 0 1-1.886 0z" />
              </StyledSvgArrowCalendar>
            </StyledBtnArrow>
          </StyledMonthsWrapper>
        )}
      />

      <CalendarGlobalStyles />
    </>
  );
});

StyledDatepicker.displayName = "StyledDatepicker";

export { StyledDatepicker };
