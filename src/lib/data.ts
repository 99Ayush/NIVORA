import type { Listing } from '@/lib/types';

export const listings: Listing[] = [
  // BPIT
  {
    id: 'bpit-pg-1',
    name: 'Rajput residency',
    type: 'PG',
    address: '500m from college',
    imageId: 'pg-image-1',
    college: 'BPIT',
    pincode: '110017',
    reviews: [
      { id: 'r1', author: 'Anonymous', rating: 4, comment: 'Room for two, AC, Almira, Bed, Fridge, washing machine (common), Table chair, Wifi. Rent -6500 pm (electricity 8rs unit)' },
      { id: 'r12', author: 'Anonymous', rating: 4, comment: 'Great facilities and very close to the college. The owner is helpful. Wifi speed is decent.' },
      { id: 'r13', author: 'Anonymous', rating: 3, comment: 'The rooms are good, but the common washing machine is often busy. Overall, a decent stay for the price.' },
    ],
  },
  {
    id: 'bpit-pg-2',
    name: 'Bhai friend pg',
    type: 'PG',
    address: 'Near BPIT',
    imageId: 'pg-image-2',
    college: 'BPIT',
    pincode: '110017',
    reviews: [
      { id: 'r2', author: 'Anonymous', rating: 4, comment: 'AC Room for 6, Separate Almira, Bed separate, Table and chair, 2 Common washroom. Rent : 6000 p/m(electricity 10rs/unit )' },
      { id: 'r14', author: 'Anonymous', rating: 3, comment: 'It can get a bit crowded with 6 people in a room, but it\'s affordable. The location is the best part.' },
      { id: 'r15', author: 'Anonymous', rating: 4, comment: 'A good budget-friendly option for students. The common areas are cleaned regularly.' },
    ],
  },
  {
    id: 'bpit-pg-3',
    name: 'AMAN PG',
    type: 'PG',
    address: 'Near BPIT',
    imageId: 'pg-image-3',
    college: 'BPIT',
    pincode: '110017',
    reviews: [
        { id: 'r3', author: 'Anonymous', rating: 4, comment: 'Room of two, Wifi, Air conditioner, Bed, Almira, Table chair, Fridge (common), Washing machine (common). Rent – 5500 P/M (electricity – 15rs unit)' },
        { id: 'r16', author: 'Anonymous', rating: 2, comment: 'The electricity charges are too high, and they add up quickly. The room itself is fine.' },
        { id: 'r17', author: 'Anonymous', rating: 4, comment: 'Comfortable two-person rooms and all the basic amenities are provided. I had a good experience here.' },
    ],
  },
  {
    id: 'bpit-flat-1',
    name: '1 BHK Flat',
    type: 'Flat',
    address: '400m from college',
    imageId: 'flat-image-1',
    college: 'BPIT',
    pincode: '110017',
    reviews: [
        { id: 'r4', author: 'Anonymous', rating: 4, comment: '1 BHK flat, Fully furnished with bed and kitchen, Attached washroom, Air conditioner, Geyser, Water supply 24/7, Single table chair set. Rent: 12000 p/m (electricity 8rs per unit) (member allowance 1 only), Security deposit: 2month rent' },
        { id: 'r18', author: 'Anonymous', rating: 5, comment: 'Perfect for a single person who values privacy. The flat was clean and well-maintained. The landlord is reasonable.' },
        { id: 'r19', author: 'Anonymous', rating: 4, comment: 'A bit expensive for one person, but the furnishing and location are worth it. The 2-month security deposit is high.' },
    ],
  },
  {
    id: 'bpit-hostel-1',
    name: 'Nalanda stays',
    type: 'Hostel',
    address: '500m away from college',
    imageId: 'hostel-image-1',
    college: 'BPIT',
    pincode: '110017',
    reviews: [
        { id: 'r5', author: 'Anonymous', rating: 4, comment: 'Room for 4, 4 beds in room with ac, Almira separate, Washing machine common for 15, Table chair separate, Wifi, Mess included. Rent :1.55L/yr' },
        { id: 'r20', author: 'Anonymous', rating: 3, comment: 'The mess food is average, but the rooms and other facilities are good. It\'s a bit noisy at times.' },
        { id: 'r21', author: 'Anonymous', rating: 4, comment: 'Good security and feels safe. The annual payment is convenient. A solid choice for first-year students.' },
    ],
  },

  // ADGITM
  {
    id: 'adgitm-pg-1',
    name: 'Ganga pg',
    type: 'PG',
    address: '600m from college',
    imageId: 'pg-image-4',
    college: 'ADGITM',
    pincode: '110092',
    reviews: [
        { id: 'r6', author: 'Anonymous', rating: 3, comment: 'No AC. Room for 6, Separate bed, Almira, Table chair, Fridge washing machine common, 2 Washroom common. Rent: 4500 per month (electricity 12rs unit)' },
        { id: 'r22', author: 'Anonymous', rating: 2, comment: 'Very basic and gets extremely hot in the summer without AC. Only recommended if you are on a tight budget.' },
        { id: 'r23', author: 'Anonymous', rating: 3, comment: 'The price is very low, so you get what you pay for. The location is convenient for ADGITM students.' },
    ],
  },
  {
    id: 'adgitm-hostel-1',
    name: 'Vikram homes',
    type: 'Hostel',
    address: '1.5km from college',
    imageId: 'hostel-image-2',
    college: 'ADGITM',
    pincode: '110092',
    reviews: [
        { id: 'r7', author: 'Anonymous', rating: 4, comment: 'Room for 2 without ac, Mess included, Almira separate, Table chair, Wifi, Washing machine common. Rent: 1L/yr' },
        { id: 'r24', author: 'Anonymous', rating: 4, comment: 'The food is better than most hostels. Rooms are spacious for two people. It\'s a bit of a walk to college.' },
        { id: 'r25', author: 'Anonymous', rating: 3, comment: 'The lack of AC is a problem in peak summer. Otherwise, it is a decent and affordable hostel.' },
    ],
  },

  // VIPS
  {
    id: 'vips-pg-1',
    name: 'Mahesh pg',
    type: 'PG',
    address: '300m from college',
    imageId: 'pg-image-5',
    college: 'VIPS',
    pincode: '110034',
    reviews: [
        { id: 'r8', author: 'Anonymous', rating: 4, comment: 'Wifi, Room for 4, Separate bed, Almira, Table chair, Air conditioner, Fridge washing machine common. Rent 7000 per month (with electricity)' },
        { id: 'r26', author: 'Anonymous', rating: 5, comment: 'Excellent PG. The rent includes electricity, which is a huge plus. Very close to VIPS, saves travel time.' },
        { id: 'r27', author: 'Anonymous', rating: 4, comment: 'Well-managed and clean. The rooms are comfortable. The owner is strict about rules, which is good for discipline.' },
    ],
  },
  {
    id: 'vips-flat-1',
    name: '2 BHK Flat',
    type: 'Flat',
    address: '800m from college',
    imageId: 'flat-image-2',
    college: 'VIPS',
    pincode: '110034',
    reviews: [
        { id: 'r9', author: 'Anonymous', rating: 4, comment: '2BHK flat, Fully furnished kitchen and rooms, Common washroom, Air conditioner in each room, Water supply 24/7, Table and chair set of 4. Rent: 25000 p/m (electricity 10rs per unit) (member allowed 4), Security deposit: 3 month rent in advance' },
        { id: 'r28', author: 'Anonymous', rating: 3, comment: 'The 3-month security deposit is excessive. The flat is great for a group of 4, but be prepared for the high initial cost.' },
        { id: 'r29', author: 'Anonymous', rating: 5, comment: 'Loved living here with my friends. The furnishing is good, and having AC in each room is a lifesaver. Totally recommend it.' },
    ],
  },

  // Delhi Technical Campus (Noida)
  {
    id: 'dtc-pg-1',
    name: 'Sushant pg',
    type: 'PG',
    address: '800m from college',
    imageId: 'pg-image-6',
    college: 'Delhi Technical Campus',
    pincode: '201301',
    reviews: [
        { id: 'r10', author: 'Anonymous', rating: 4, comment: 'Wifi, Room for 3, Air conditioner, Bed, Almira, Fridge washing machine (common), Table chair. Rent 9000 per month (with electricity)' },
        { id: 'r30', author: 'Anonymous', rating: 4, comment: 'A little pricey, but the amenities are good and the inclusive electricity bill is a relief. Good for DTC students.' },
        { id: 'r31', author: 'Anonymous', rating: 5, comment: 'Very comfortable and well-maintained PG. The rooms are clean, and the AC works perfectly. Worth the money.' },
    ],
  },
  {
    id: 'dtc-hostel-1',
    name: 'Sunrise hostel Noida',
    type: 'Hostel',
    address: '1km away from college',
    imageId: 'hostel-image-3',
    college: 'Delhi Technical Campus',
    pincode: '201301',
    reviews: [
        { id: 'r11', author: 'Anonymous', rating: 4, comment: 'Room for two with ac, Mess included, Washing machine common for 15, Almira, Table and chair, Wifi. Rent :1.35L/yr' },
        { id: 'r32', author: 'Anonymous', rating: 3, comment: 'The food is okay, not great. The hostel is clean, and the rooms are decent. It\'s a good option if you want a package deal.' },
        { id: 'r33', author: 'Anonymous', rating: 4, comment: 'I liked my stay here. The management is responsive to complaints, and the facilities are adequate for students.' },
    ],
  },
];
