export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const offices = [
  {
    id: 1,
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Level 14, Emirates Towers, Sheikh Zayed Road, Dubai",
    phone: "+971 4 123 4567",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 25.2048,
    lng: 55.2708,
    image: "/hero-3.png",
  },
  {
    id: 2,
    city: "Riyadh",
    country: "Saudi Arabia",
    address: "KAFD, Building 5.04, Al Aqiq, Riyadh 13519",
    phone: "+966 11 987 6543",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 24.7136,
    lng: 46.6753,
    image: "/hero-1.png",
  },
  {
    id: 3,
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    address: "ADGM Square, Al Maryah Island, Abu Dhabi",
    phone: "+971 2 444 5566",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 23.5,
    lng: 53.0,
    image: "/hero-2.png",
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    address: "30 St Mary Axe (The Gherkin), London EC3A 8BF",
    phone: "+44 20 7765 4321",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM",
    lat: 51.5074,
    lng: -0.1278,
    image: "/hero-3.png",
  },
];

export const mapConnections = [
  {
    start: { lat: offices[0].lat, lng: offices[0].lng },
    end: { lat: offices[1].lat, lng: offices[1].lng },
  },
  {
    start: { lat: offices[0].lat, lng: offices[0].lng },
    end: { lat: offices[2].lat, lng: offices[2].lng },
  },
  {
    start: { lat: offices[0].lat, lng: offices[0].lng },
    end: { lat: offices[3].lat, lng: offices[3].lng },
  },
];
