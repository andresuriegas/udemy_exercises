import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import { Fragment } from "react";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";



const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  // Checks if filtered date is undefined, which it will be when the component is rendered for the first time.
  // It's then automatically rendered again without filtered data whe it's rendered for the first time.
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  // When the component is rendered for the second time, we have filteredData.
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  // Transform the string from the query object to a number.
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // Check if the year and month is a number, also check if the year is greater than 2021 and smaller than 2030; and if the month is greater than 1 and smaller than 12.
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
    <Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // Checks if there are no events for the chosen year and month. If we don't find events matching the filter then a message is rendered.
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
