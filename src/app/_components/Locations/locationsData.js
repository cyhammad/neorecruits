export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const offices = [
  {
    id: 1,
    city: "Al-Jubail",
    country: "Saudi Arabia",
    address: "P. O. Box 1234, Al-Jubail 31961",
    phone: "+966 50 578 2607",
    email: "jobs@neorecruits.com",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 27.0117,
    lng: 49.6583,
    flag: "🇸🇦",
    image: "/locations/riyadh.png",
  },
  {
    id: 2,
    city: "New York",
    country: "United States",
    address: "224 W, 35th St, Ste 500, New York, NY 10001",
    phone: "+1 929 653 4054",
    email: "jobs@neorecruits.com",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
    lat: 40.7128,
    lng: -74.006,
    flag: "🇺🇸",
    image: "/locations/london.png",
  },
  {
    id: 3,
    city: "Wednesbury",
    country: "United Kingdom",
    address: "11 Pinfold St. Extension, Wednesbury, England WS10 8PU",
    phone: "+44 7414 680293",
    email: "jobs@neorecruits.com",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM",
    lat: 52.55,
    lng: -2.0167,
    flag: "🇬🇧",
    image: "/locations/london.png",
  },
  {
    id: 4,
    city: "Lahore",
    country: "Pakistan",
    address:
      "Office 3 & 4, First Floor, Orchard Tower, Central Commercial, Bahria Orchard, Lahore",
    phone: "+92 302 4909491",
    email: "jobs@neorecruits.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    lat: 31.5204,
    lng: 74.3587,
    flag: "🇵🇰",
    image: "/locations/karachi.png",
  },
  {
    id: 5,
    city: "Mumbai",
    country: "India",
    address: "Mumbai, India",
    phone: "+91 72044 83245",
    email: "jobs@neorecruits.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    lat: 19.076,
    lng: 72.8777,
    flag: "🇮🇳",
    image: "/locations/karachi.png",
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
  {
    start: { lat: offices[0].lat, lng: offices[0].lng },
    end: { lat: offices[4].lat, lng: offices[4].lng },
  },
];
