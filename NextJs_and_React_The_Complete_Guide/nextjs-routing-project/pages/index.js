import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = () => {
  // Saving the result of getFeaturedEvents function in a constant called featuredEvents.
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents}/>
      </ul>
    </div>
  );
};

export default HomePage;
