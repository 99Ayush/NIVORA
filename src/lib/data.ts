import type { Listing } from '@/lib/types';

export const listings: Listing[] = [
  // BPIT
  {
    id: 'bpit-pg-1',
    name: 'Rajput residency',
    type: 'PG',
    address: '500m from college',
    imageId: 'listing-1',
    college: 'BPIT',
    pincode: '110085',
    reviews: [
      { id: 'r1', author: 'Anonymous', rating: 4, comment: 'Room for two, AC, Almira, Bed, Fridge, washing machine (common), Table chair, Wifi. Rent -6500 pm (electricity 8rs unit)' },
    ],
  },
  {
    id: 'bpit-pg-2',
    name: 'Bhai friend pg',
    type: 'PG',
    address: 'Near BPIT',
    imageId: 'listing-2',
    college: 'BPIT',
    pincode: '110085',
    reviews: [
      { id: 'r2', author: 'Anonymous', rating: 4, comment: 'AC Room for 6, Separate Almira, Bed separate, Table and chair, 2 Common washroom. Rent : 6000 p/m(electricity 10rs/unit )' },
    ],
  },
  {
    id: 'bpit-pg-3',
    name: 'AMAN PG',
    type: 'PG',
    address: 'Near BPIT',
    imageId: 'listing-3',
    college: 'BPIT',
    pincode: '110085',
    reviews: [
        { id: 'r3', author: 'Anonymous', rating: 4, comment: 'Room of two, Wifi, Air conditioner, Bed, Almira, Table chair, Fridge (common), Washing machine (common). Rent – 5500 P/M (electricity – 15rs unit)' },
    ],
  },
  {
    id: 'bpit-flat-1',
    name: '1 BHK Flat',
    type: 'Flat',
    address: '400m from college',
    imageId: 'listing-4',
    college: 'BPIT',
    pincode: '110085',
    reviews: [
        { id: 'r4', author: 'Anonymous', rating: 4, comment: '1 BHK flat, Fully furnished with bed and kitchen, Attached washroom, Air conditioner, Geyser, Water supply 24/7, Single table chair set. Rent: 12000 p/m (electricity 8rs per unit) (member allowance 1 only), Security deposit: 2month rent' },
    ],
  },
  {
    id: 'bpit-hostel-1',
    name: 'Nalanda stays',
    type: 'Hostel',
    address: '500m away from college',
    imageId: 'listing-5',
    college: 'BPIT',
    pincode: '110085',
    reviews: [
        { id: 'r5', author: 'Anonymous', rating: 4, comment: 'Room for 4, 4 beds in room with ac, Almira separate, Washing machine common for 15, Table chair separate, Wifi, Mess included. Rent :1.55L/yr' },
    ],
  },

  // ADGITM
  {
    id: 'adgitm-pg-1',
    name: 'Ganga pg',
    type: 'PG',
    address: '600m from college',
    imageId: 'listing-6',
    college: 'ADGITM',
    pincode: '110092',
    reviews: [
        { id: 'r6', author: 'Anonymous', rating: 3, comment: 'No AC. Room for 6, Separate bed, Almira, Table chair, Fridge washing machine common, 2 Washroom common. Rent: 4500 per month (electricity 12rs unit)' },
    ],
  },
  {
    id: 'adgitm-hostel-1',
    name: 'Vikram homes',
    type: 'Hostel',
    address: '1.5km from college',
    imageId: 'listing-1',
    college: 'ADGITM',
    pincode: '110092',
    reviews: [
        { id: 'r7', author: 'Anonymous', rating: 4, comment: 'Room for 2 without ac, Mess included, Almira separate, Table chair, Wifi, Washing machine common. Rent: 1L/yr' },
    ],
  },

  // VIPS
  {
    id: 'vips-pg-1',
    name: 'Mahesh pg',
    type: 'PG',
    address: '300m from college',
    imageId: 'listing-2',
    college: 'VIPS',
    pincode: '110034',
    reviews: [
        { id: 'r8', author: 'Anonymous', rating: 4, comment: 'Wifi, Room for 4, Separate bed, Almira, Table chair, Air conditioner, Fridge washing machine common. Rent 7000 per month (with electricity)' },
    ],
  },
  {
    id: 'vips-flat-1',
    name: '2 BHK Flat',
    type: 'Flat',
    address: '800m from college',
    imageId: 'listing-3',
    college: 'VIPS',
    pincode: '110034',
    reviews: [
        { id: 'r9', author: 'Anonymous', rating: 4, comment: '2BHK flat, Fully furnished kitchen and rooms, Common washroom, Air conditioner in each room, Water supply 24/7, Table and chair set of 4. Rent: 25000 p/m (electricity 10rs per unit) (member allowed 4), Security deposit: 3 month rent in advance' },
    ],
  },

  // Delhi Technical Campus (Noida)
  {
    id: 'dtc-pg-1',
    name: 'Sushant pg',
    type: 'PG',
    address: '800m from college',
    imageId: 'listing-4',
    college: 'Delhi Technical Campus',
    pincode: '201301',
    reviews: [
        { id: 'r10', author: 'Anonymous', rating: 4, comment: 'Wifi, Room for 3, Air conditioner, Bed, Almira, Fridge washing machine (common), Table chair. Rent 9000 per month (with electricity)' },
    ],
  },
  {
    id: 'dtc-hostel-1',
    name: 'Sunrise hostel Noida',
    type: 'Hostel',
    address: '1km away from college',
    imageId: 'listing-5',
    college: 'Delhi Technical Campus',
    pincode: '201301',
    reviews: [
        { id: 'r11', author: 'Anonymous', rating: 4, comment: 'Room for two with ac, Mess included, Washing machine common for 15, Almira, Table and chair, Wifi. Rent :1.35L/yr' },
    ],
  },
];
