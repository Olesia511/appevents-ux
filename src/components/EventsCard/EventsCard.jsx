import { useState } from "react";
import image1 from "../../assets/backgr-1.jpg";
import image2 from "../../assets/backgr-2.jpeg";
import image3 from "../../assets/backgr-3.png";
import image4 from "../../assets/backgr-4.png";
import image5 from "../../assets/backgr-5.png";
import image6 from "../../assets/backgr-6.jpg";

import { sentenceSlice } from "../../helpers/formatedText";

import {
  CardImage,
  CardImageWrapper,
  CardWrapper,
  Description,
  EventData,
  EventDataWrapper,
  EventsBtn,
  EventsBtnWrapper,
  StyledLinkBtn,
  TitleOrganizer,
} from "./EventsCard.styled";
import { ModalWindow } from "../Modal/Modal";
import { EventCardFullData } from "./EventCardFullData";

export const EventsCard = (eventData) => {
  const arr = [image1, image2, image3, image4, image5, image6];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const randomNumber = () => Math.floor(Math.random() * 6) + 1;
  const num = arr[randomNumber() - 1];

  const { _id, title, description, event_date, organizer } = eventData.eventData;

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
            <StyledLinkBtn to="/register">Register</StyledLinkBtn>
            <EventsBtn
              type="button"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              View
            </EventsBtn>
          </EventsBtnWrapper>
        </EventDataWrapper>
      </CardWrapper>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <EventCardFullData eventId={_id} />
        </ModalWindow>
      )}
    </>
  );
};
