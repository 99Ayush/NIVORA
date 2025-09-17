import type { Listing } from '@/lib/types';

export const listings: Listing[] = [
  {
    id: '1',
    name: 'Sunshine PG for Gents',
    type: 'PG',
    address: '123, College Road',
    imageId: 'listing-1',
    college: 'ABC University',
    pincode: '110001',
    reviews: [
      { id: 'r1', author: 'Anonymous', rating: 4, comment: 'Great place, clean and tidy.' },
      { id: 'r2', author: 'Anonymous', rating: 5, comment: 'Very close to the college, highly recommended.' },
    ],
  },
  {
    id: '2',
    name: 'Happy Homes Flat',
    type: 'Flat',
    address: '456, Main Street',
    imageId: 'listing-2',
    college: 'ABC University',
    pincode: '110001',
    reviews: [
      { id: 'r3', author: 'Anonymous', rating: 3, comment: 'A bit noisy, but affordable.' },
    ],
  },
  {
    id: '3',
    name: 'Healthy Bites Mess',
    type: 'Mess',
    address: '789, Food Lane',
    imageId: 'listing-3',
    college: 'ABC University',
    pincode: '110001',
    reviews: [
      { id: 'r4', author: 'Anonymous', rating: 5, comment: 'Delicious and hygienic food.' },
      { id: 'r5', author: 'Anonymous', rating: 4, comment: 'Good variety in the menu.' },
    ],
  },
  {
    id: '4',
    name: 'Scholars Den PG',
    type: 'PG',
    address: '101, Knowledge Park',
    imageId: 'listing-4',
    college: 'XYZ College of Engineering',
    pincode: '560001',
    reviews: [
      { id: 'r6', author: 'Anonymous', rating: 4, comment: 'Good study environment.' },
    ],
  },
  {
    id: '5',
    name: 'Engineers Mess',
    type: 'Mess',
    address: '212, Tech Avenue',
    imageId: 'listing-5',
    college: 'XYZ College of Engineering',
    pincode: '560001',
    reviews: [],
  },
  {
    id: '6',
    name: 'The Nest Co-living',
    type: 'Flat',
    address: '333, Innovation Drive',
    imageId: 'listing-6',
    college: 'XYZ College of Engineering',
    pincode: '560001',
    reviews: [
      { id: 'r7', author: 'Anonymous', rating: 5, comment: 'Modern amenities and great community.' },
      { id: 'r8', author: 'Anonymous', rating: 4, comment: 'A bit pricey but worth it.' },
    ],
  },
];
