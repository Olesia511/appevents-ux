import { useSelector } from "react-redux";

import { ListWrapper, StyledLinkBtn, TextWrapper, Wrapper } from "./ParticipantsList.styled";
import { ParticipantsCard } from "../ParticipantsCard/ParticipantsCard";
import { selectParticipants } from "../../redux/participants/selectors";

export const ParticipantsList = () => {
  const allParticipants = useSelector(selectParticipants);
  console.log(`allParticipants`, allParticipants);

  return (
    <Wrapper>
      <ListWrapper>
        {allParticipants.length > 0 &&
          allParticipants.map((item) => {
            return <ParticipantsCard key={item._id} userData={item} />;
          })}
        {allParticipants.length === 0 && <TextWrapper>No one has registered for this event yet.</TextWrapper>}
      </ListWrapper>
      <StyledLinkBtn to="/events">Go Back</StyledLinkBtn>
    </Wrapper>
  );
};
