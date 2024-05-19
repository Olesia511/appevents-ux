import { sentenceSlice } from "../../helpers/formatedText";

import {
  CardImage,
  CardImageWrapper,
  CardWrapper,
  Description,
  EventData,
  EventDataWrapper,
  EventsBtnWrapper,
  StyledLinkBtn,
  TitleOrganizer,
} from "./EventsCard.styled";
import { useDispatch } from "react-redux";
import { addEventsForRegister } from "../../redux/registerEvent/slice";
import { fetchParticipants } from "../../redux/participants/operations";
import { arr } from "./arrImage";

export const EventsCard = (eventData) => {
  const dispatch = useDispatch();

  const randomNumber = () => Math.floor(Math.random() * 6) + 1;
  const num = arr[randomNumber() - 1];

  const { _id, title, description, event_date, organizer } = eventData.eventData;

  const handleEventsForRegister = (e, id) => {
    dispatch(addEventsForRegister(id));
  };

  const getAllParticipants = (id) => {
    dispatch(fetchParticipants(id));
  };

  return (
    <>
      <CardWrapper key={_id}>
        <CardImageWrapper>
          <CardImage src={num} alt={"event"} />
        </CardImageWrapper>
        <EventDataWrapper>
          <EventData>
            <h2>{sentenceSlice(title)}</h2>
            <h3>{event_date}</h3>
          </EventData>
          <Description>{description}</Description>

          <TitleOrganizer>Organizer: {organizer}</TitleOrganizer>
          <EventsBtnWrapper>
            <StyledLinkBtn to="/register" onClick={(e) => handleEventsForRegister(e, _id)}>
              Register
            </StyledLinkBtn>

            <StyledLinkBtn to={`/participants/:${_id}`} onClick={() => getAllParticipants(_id)}>
              View
            </StyledLinkBtn>
          </EventsBtnWrapper>
        </EventDataWrapper>
      </CardWrapper>
    </>
  );
};
