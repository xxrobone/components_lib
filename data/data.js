export const products = [
  {
    id: 1,
    title: 'Assassins creed valhalla',
    year: '2020',
    price: 26,
    image: '/assets/images/Image-9.png',
    itemPng: '/assets/images/Image-2.png',
  },
  {
    id: 2,
    title: 'Ghost of Tsushima',
    year: '2020',
    price: 39.25,
    image: '/assets/images/Image-11.png',
    itemPng: '/assets/images/Image-3.png',
  },
  {
    id: 3,
    title: 'Legend of Zelda - Tears of the kingdom',
    year: '2023',
    price: 59.99,
    image: '/assets/images/Image-21.png',
    itemPng: '/assets/images/Image-20.png',
  },
];

export const restaurants = [
  {
    location_id: 1,
    name: 'Restaurant One',
    rating: 4.5,
    address_obj: {
      street1: '123 Main Street',
    },
    phone: '123-456-7890',
    cuisine: [
      { key: 'italian', name: 'Italian' },
      { key: 'pizza', name: 'Pizza' },
    ],
    website: 'https://restaurantone.com',
    photo: {
      images: {
        large: {
          url: '/assets/images/Image-9.png',
        },
      },
    },
  },
  {
    location_id: 2,
    name: 'Restaurant Two',
    rating: 4.2,
    address_obj: {
      street1: '456 Oak Avenue',
    },
    phone: '987-654-3210',
    cuisine: [
      { key: 'mexican', name: 'Mexican' },
      { key: 'tacos', name: 'Tacos' },
    ],
    website: 'https://restauranttwo.com',
    photo: {
      images: {
        large: {
          url: '/assets/images/Image-21.png',
        },
      },
    },
  },
  {
    location_id: 3,
    name: 'Restaurant Three',
    rating: 4.7,
    address_obj: {
      street1: '789 Maple Drive',
    },
    phone: '111-222-3333',
    cuisine: [
      { key: 'japanese', name: 'Japanese' },
      { key: 'sushi', name: 'Sushi' },
    ],
    website: 'https://restaurantthree.com',
    photo: {
      images: {
        large: {
          url: '/assets/images/Image-7.png',
        },
      },
    },
  },
  {
    location_id: 3,
    name: 'Restaurant Mines',
    rating: 4.7,
    address_obj: {
      street1: '789 West Drive',
    },
    phone: '111-222-3333',
    cuisine: [
      { key: 'american', name: 'Hamburger' },
      { key: 'american', name: 'Pizza' },
    ],
    website: 'https://restaurantthree.com',
    photo: {
      images: {
        large: {
          url: '/assets/images/Image-10.png',
        },
      },
    },
  },
];
