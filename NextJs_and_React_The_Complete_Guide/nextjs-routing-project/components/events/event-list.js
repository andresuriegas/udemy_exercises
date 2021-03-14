// This component will hold the event list component, which will be responsible for rendering a list of events.
// It will use props since the listed events should be passed in from outside, from the component where the event data is fetched in.

import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props; // Using object destructuring in order to pull that prop out of the props object.

  // We use the .map method in order to output multiple list items. We pass an annonymous function to map and then create a list item for every event.
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
