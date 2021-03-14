const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Dance-o-palloza',
      description:
        'Multiple live dance performances from around the world. Featuring: Hello Mars, Hello World & Taco-Taco.' ,
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/concert-event-01.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Electro-palloza',
      description:
        "The ultimate electronic music event. Daft Punk headlining the event!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/concert-event-02.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Rock-a-palloza',
      description:
        'Blasting music from all sorts of instruments. Guitars being smashed against the floor and some other crazy stunts!',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/concert-event-03.jpg',
      isFeatured: true,
    },
  ];
  

  // Access the dummy events array and it filters four events where the featured flag is set to true. 
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }

  // Expects an object with a year and a month key and filters events with the year and month that match the filter.
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
   // Finds an event by id.
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }