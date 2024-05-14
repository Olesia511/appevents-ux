import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchEventsPage } from "../../redux/events/operations";
import { selectEvents } from "../../redux/events/selectors";
import { EventsCard } from "../EventsCard/EventsCard";
import { ListWrapper } from "./EventsList.styled";

export const EventsList = () => {
  const dispatch = useDispatch();

  const allEvents = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEventsPage());
  }, []);

  return (
    <ListWrapper>
      {allEvents.map((item) => {
        return <EventsCard key={item._id} eventData={item} />;
      })}
      {allEvents === null && <h3>Unfortunately, there are no such announcements.</h3>}
    </ListWrapper>
  );
};
