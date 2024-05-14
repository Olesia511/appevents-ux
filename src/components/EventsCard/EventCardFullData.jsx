import { sentenceSlice } from "../../helpers/formatedText";

import {
  CardWrapperFullData,
  Description,
  EventData,
  EventDataWrapper,
  EventsBtnWrapper,
  StyledLinkBtn,
  TitleOrganizer,
} from "./EventsCard.styled";
import { useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";

export const EventCardFullData = ({ eventId }) => {
  const events = useSelector(selectEvents);
  const card = events.find((el) => {
    return el._id === eventId;
  });

  console.log(`card`, card);

  const { title, description, event_date, organizer } = card;

  return (
    <>
      <CardWrapperFullData>
        <EventDataWrapper className="full-data">
          <EventData className="full-data-event">
            <h2>{sentenceSlice(title)}</h2>
            <h3>{event_date}</h3>
          </EventData>
          <Description className="full-data-description">{description}</Description>
          <TitleOrganizer>Organizer: {organizer}</TitleOrganizer>
          <EventsBtnWrapper>
            <StyledLinkBtn to="/register">Register</StyledLinkBtn>
          </EventsBtnWrapper>
        </EventDataWrapper>
      </CardWrapperFullData>
    </>
  );
};
