import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchEventsPage } from "../../redux/events/operations";
import { selectEvents, selectIsLoadingEvents, selectNumberAllEvents } from "../../redux/events/selectors";
import { EventsCard } from "../EventsCard/EventsCard";
import { Btn, ListWrapper } from "./EventsList.styled";

export const EventsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 8;

  const allEventsArray = useSelector(selectEvents);
  const allEventsTotalNumber = useSelector(selectNumberAllEvents);
  const isLoading = useSelector(selectIsLoadingEvents);

  useEffect(() => {
    dispatch(fetchEventsPage({ page, limit }));
    setPage(page + 1);
  }, []);

  const changePage = () => {
    if (allEventsArray.length >= allEventsTotalNumber) return;
    setPage(page + 1);
    dispatch(fetchEventsPage({ page, limit }));
  };

  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      {!isLoading && (
        <>
          <ListWrapper>
            {allEventsArray.map((item) => {
              return <EventsCard key={item._id} eventData={item} />;
            })}
            {allEventsArray === null && <h3>Unfortunately, there are no such announcements.</h3>}
          </ListWrapper>
          {allEventsArray.length < allEventsTotalNumber && <Btn onClick={changePage}>Load more</Btn>}
        </>
      )}
    </>
  );
};
