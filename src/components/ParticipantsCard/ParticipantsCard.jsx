import { CardImage, CardImageWrapper, CardWrapper, EventDataWrapper } from "./ParticipantsCard.styled";
import { arr } from "./arrImage";

export const ParticipantsCard = ({ userData }) => {
  const randomNumber = () => Math.floor(Math.random() * 15) + 1;
  const num = arr[randomNumber() - 1];
  const { email, fullName, _id } = userData;

  return (
    <>
      <CardWrapper key={_id}>
        <CardImageWrapper>
          <CardImage src={num} alt={fullName} />
        </CardImageWrapper>

        <EventDataWrapper>
          <h2>{fullName}</h2>
          <h3>{email}</h3>
        </EventDataWrapper>
      </CardWrapper>
    </>
  );
};
