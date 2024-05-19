import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  BtnWrapper,
  FormBtn,
  FormInput,
  FormLabel,
  FormStyled,
  RadioGroupWrapper,
  RadioInput,
  RadioInputWrapper,
  RadioLabel,
  RadioLabelWrapper,
  StyledLinkBtn,
} from "./FormRegister.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRegisterEventId } from "../../redux/registerEvent/selectors";
import { StyledDatepicker } from "../DatePicker/StyledDatePicker";
import { selectorDateBirth } from "../../redux/dateBirth/selectors";
import { addParticipants } from "../../redux/participants/operations";
import { changeDate } from "../../redux/dateBirth/slice";

export function FormRegister() {
  const idRegister = useSelector(selectRegisterEventId);
  const birthDay = useSelector(selectorDateBirth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCheckedRadio, setIsCheckedRadio] = useState([true, false, false]);
  const radioBtnData = [{ name: "Social media" }, { name: "Friends" }, { name: "Found myself" }];

  const handleCheckRadioChange = (index) => {
    setIsCheckedRadio((prevState) => {
      const newState = prevState.map((value, i) => i === index);
      return newState;
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email } = data;

    const selectedRadioIndex = isCheckedRadio.findIndex((isChecked) => {
      return isChecked;
    });
    const selectedRadio = radioBtnData[selectedRadioIndex].name;

    const user = {
      fullName,
      email,
      birthDay,
      placeInformation: selectedRadio,
      idEvent: idRegister,
    };

    dispatch(addParticipants(user));
    dispatch(changeDate(new Date().toISOString()));
    navigate("/events", { replace: true });
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>
        Full Name:
        <FormInput
          {...register("fullName", { required: true, minLength: 2, maxLength: 20 })}
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName?.type === "required" && <p role="alert">Full name is required</p>}
        {errors.fullName && (errors.fullName.type === "minLength" || errors.fullName.type === "maxLength") && (
          <span>The full name must contain a min 2 and a max 20 characters</span>
        )}
      </FormLabel>

      <FormLabel>
        Email:
        <FormInput
          {...register("email", {
            required: true,
            pattern:
              /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && <p role="alert">Email is required</p>}
        {errors.email && errors.email.type === "pattern" && <span>Example of email: chance@gmail.com</span>}
      </FormLabel>

      <FormLabel>
        Date of birth:
        <StyledDatepicker />
      </FormLabel>

      <p>Where did you hear about this event?</p>

      <RadioGroupWrapper>
        {isCheckedRadio.map((isChecked, index) => (
          <RadioInputWrapper key={index} className={isChecked ? `checked` : ``}>
            <RadioInput
              id={index}
              type="radio"
              name="radio"
              checked={isChecked}
              onChange={() => handleCheckRadioChange(index)}
            />
            <RadioLabelWrapper>
              <RadioLabel htmlFor={index}>{radioBtnData[index].name}</RadioLabel>
            </RadioLabelWrapper>
          </RadioInputWrapper>
        ))}
      </RadioGroupWrapper>

      <BtnWrapper>
        <FormBtn>{"Submit"}</FormBtn>
        <StyledLinkBtn to="/events">Go Back</StyledLinkBtn>
      </BtnWrapper>
    </FormStyled>
  );
}
