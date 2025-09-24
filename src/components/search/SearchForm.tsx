
import type { Listing } from './types';

export const listings: Listing[] = [
  {
    id: 'pg-vips-1',
    name: 'Laxmi Boys PG',
    type: 'PG',
    address: 'Near VIPS, Rohini, Delhi',
    college: 'Vivekananda Institute of Professional Studies',
    pincode: '110085',
    imageId: 'pg-image-1',
    location: { lat: 28.7183, lng: 77.0698 },
    contact: { name: 'Mr. Sharma', phone: '9876543210' },
    reviews: [
      {
        id: 'review-vips-1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good PG, very close to college which saves a lot of time. The rooms are clean and the food is decent. Rent is 5000 pm plus 8rs/unit for electricity. Facilities include a bed, almirah, table, chair, common fridge and washing machine, AC, and Wi-Fi.',
      },
      {
        id: 'review-vips-1-2',
        author: 'Anonymous',
        rating: 3,
        comment:
          'Average experience. The Wi-Fi is a bit slow during peak hours, which is tough for studying. The location is the best part.',
      },
      {
        id: 'review-vips-1-3',
        author: 'Anonymous',
        rating: 5,
        comment:
          "Excellent value for money. The owner is very responsive to any issues. It's just a 10 rupee e-rickshaw ride to campus.",
      },
      {
        id: 'review-vips-1-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The common areas like the fridge can get a bit crowded, but the rooms themselves are spacious enough for two people.',
      },
      {
        id: 'review-vips-1-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'I stayed here for a year and it was a pleasant experience. No major complaints, and the proximity to VIPS is a huge plus.',
      },
    ],
  },
  {
    id: 'pg-dtu-1',
    name: 'Dr. Bhatti Niwas PG',
    type: 'PG',
    address: 'Sector 17, Rohini, Delhi',
    college: 'Delhi Technological University',
    pincode: '110089',
    imageId: 'pg-image-2',
    location: { lat: 28.7485, lng: 77.1165 },
    contact: { name: 'Dr. Bhatti', phone: '9876543211' },
    reviews: [
      {
        id: 'review-dtu-1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'A very safe and comfortable PG for girls, about 1.8km from DTU. Rent is 7000 pm plus electricity. Comes with a bed, table, chair, AC, fridge, Wi-Fi, and almirah for two sharing.',
      },
      {
        id: 'review-dtu-1-2',
        author: 'Anonymous',
        rating: 5,
        comment:
          'The landlady is very kind and helpful. The area is quiet and good for studying. Highly recommended for DTU students.',
      },
      {
        id: 'review-dtu-1-3',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The distance is a bit of a walk, but manageable. The facilities are good for the price.',
      },
      {
        id: 'review-dtu-1-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Clean rooms and a peaceful environment. The electricity bill can be a bit high with AC usage.',
      },
      {
        id: 'review-dtu-1-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Overall a positive experience. The rules are a bit strict, but it ensures a safe environment for everyone.',
      },
    ],
  },
  {
    id: 'pg-dtu-2',
    name: 'Janta PG',
    type: 'PG',
    address: 'Sector 16, Rohini, Delhi',
    college: 'Delhi Technological University',
    pincode: '110089',
    imageId: 'pg-image-3',
    location: { lat: 28.745, lng: 77.119 },
    contact: { name: 'Mr. Gupta', phone: '9876543212' },
    reviews: [
      {
        id: 'review-dtu-2-1',
        author: 'Anonymous',
        rating: 3,
        comment:
          'Decent facilities for the 8000 Rs rent. Located 1.2 km from DTU. Provides a fridge, table, chair, bed, AC, and veg food. Parking is also available.',
      },
      {
        id: 'review-dtu-2-2',
        author: 'Anonymous',
        rating: 2,
        comment:
          'The food quality is not great. I would suggest looking for other options if food is a priority.',
      },
      {
        id: 'review-dtu-2-3',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good value for money. The rooms are okay and the AC works well. The parking space is a big advantage.',
      },
      {
        id: 'review-dtu-2-4',
        author: 'Anonymous',
        rating: 3,
        comment:
          'An average PG. Nothing special, but it gets the job done. The location is convenient.',
      },
      {
        id: 'review-dtu-2-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The owner is friendly and addresses issues quickly. The common areas are kept clean.',
      },
    ],
  },
  {
    id: 'pg-dtu-3',
    name: 'Dhanashvi PG',
    type: 'PG',
    address: 'Near DTU Campus, Rohini, Delhi',
    college: 'Delhi Technological University',
    pincode: '110089',
    imageId: 'flat-image-1',
    location: { lat: 28.751, lng: 77.118 },
    contact: { name: 'Mrs. Dhanashvi', phone: '9876543213' },
    reviews: [
      {
        id: 'review-dtu-3-1',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Excellent PG, just 0.5km from DTU. The rent is a bit high at 11100, but the facilities are top-notch: AC, fridge, laundry, food, table, chair, bed, and Wi-Fi.',
      },
      {
        id: 'review-dtu-3-2',
        author: 'Anonymous',
        rating: 5,
        comment:
          'You get what you pay for. The convenience and quality are worth the price. The food is also very good.',
      },
      {
        id: 'review-dtu-3-3',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The rooms are modern and well-maintained. It feels more like a service apartment than a PG.',
      },
      {
        id: 'review-dtu-3-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Laundry service is a huge time-saver. The Wi-Fi is fast and reliable for online classes.',
      },
      {
        id: 'review-dtu-3-5',
        author: 'Anonymous',
        rating: 5,
        comment:
          "Best PG near DTU if you can afford it. It's clean, safe, and has all the amenities you could need.",
      },
    ],
  },
  {
    id: 'hostel-mac-1',
    name: 'Athithya Dhara Girls Hostel',
    type: 'Hostel',
    address: 'Vasundhara Enclave, Delhi',
    college: 'Maharaja Agrasen College',
    pincode: '110096',
    imageId: 'hostel-image-1',
    location: { lat: 28.6105, lng: 77.3151 },
    contact: { name: 'Hostel Warden', phone: '9876543214' },
    reviews: [
      {
        id: 'review-mac-1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good hostel, 1.2km away. Pricing is flexible: 11999 for twin sharing, 9999 for triple, and 8999 for four sharing. Includes Wi-Fi, AC, food, table, chair, beds, TV, and laundry.',
      },
      {
        id: 'review-mac-1-2',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The four-sharing rooms can feel a bit cramped. I would recommend the triple sharing if your budget allows.',
      },
      {
        id: 'review-mac-1-3',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The food is decent and there is a good variety. The common TV room is a nice place to relax.',
      },
      {
        id: 'review-mac-1-4',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Very well-managed hostel with good security. The warden is strict but fair. A safe choice for girls.',
      },
      {
        id: 'review-mac-1-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The laundry service is convenient. Overall, a comfortable and hassle-free stay.',
      },
    ],
  },
  {
    id: 'pg-mac-2',
    name: 'Brahmi Saran PG',
    type: 'PG',
    address: 'Mayur Vihar, Delhi',
    college: 'Maharaja Agrasen College',
    pincode: '110091',
    imageId: 'pg-image-4',
    location: { lat: 28.604, lng: 77.309 },
    contact: { name: 'Mr. Saran', phone: '9876543215' },
    reviews: [
      {
        id: 'review-mac-2-1',
        author: 'Anonymous',
        rating: 3,
        comment:
          'An affordable option at 5900 per month, located 1.6km from college. Basic facilities like AC, laundry, parking, warden, bed, table, and chair are provided.',
      },
      {
        id: 'review-mac-2-2',
        author: 'Anonymous',
        rating: 2,
        comment:
          'You get what you pay for. The rooms are very basic and could be cleaner. No food is provided.',
      },
      {
        id: 'review-mac-2-3',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The warden is helpful, but the infrastructure is old. It is a budget-friendly choice if you have classes all day.',
      },
      {
        id: 'review-mac-2-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The location is good with easy access to the metro. Good for students who need a place to sleep and study.',
      },
      {
        id: 'review-mac-2-5',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The AC is a lifesaver in the summer. Don’t expect luxury, but it’s a functional place to stay.',
      },
    ],
  },
  {
    id: 'pg-mac-3',
    name: '7 Heavens Home PG',
    type: 'PG',
    address: 'Near MAC, Vasundhara Enclave, Delhi',
    college: 'Maharaja Agrasen College',
    pincode: '110096',
    imageId: 'hostel-image-2',
    location: { lat: 28.612, lng: 77.316 },
    contact: { name: 'Ms. Verma', phone: '9876543216' },
    reviews: [
      {
        id: 'review-mac-3-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Great PG for 9000 Rs on triple sharing, just 1km from college. Includes Wi-Fi, veg food, AC, bed, table, chair, fridge, and a warden.',
      },
      {
        id: 'review-mac-3-2',
        author: 'Anonymous',
        rating: 5,
        comment: 'The food is homely and delicious. The rooms are clean and well-ventilated.',
      },
      {
        id: 'review-mac-3-3',
        author: 'Anonymous',
        rating: 4,
        comment: 'The owner is very accommodating and the atmosphere is friendly. Feels like a home.',
      },
      {
        id: 'review-mac-3-4',
        author: 'Anonymous',
        rating: 3,
        comment: 'The triple sharing room is a bit small for three people, but manageable.',
      },
      {
        id: 'review-mac-3-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'A reliable and comfortable place to stay. The warden ensures discipline and safety.',
      },
    ],
  },
  {
    id: 'pg-msit-1',
    name: 'Agam PG for Girls',
    type: 'PG',
    address: 'Janakpuri, Delhi',
    college: 'Maharaja Surajmal Institute of Technology',
    pincode: '110058',
    imageId: 'pg-image-5',
    location: { lat: 28.633, lng: 77.081 },
    contact: { name: 'Mrs. Agam', phone: '9876543217' },
    reviews: [
      {
        id: 'review-msit-1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Nice PG for girls, 1km from MSIT. Double sharing is 8500 Rs per month. Facilities include Wi-Fi, AC, table, chair, bed, TV, fridge, and laundry.',
      },
      {
        id: 'review-msit-1-2',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Very safe and clean. The owner lives downstairs and is always available to help. I had a great stay.',
      },
      {
        id: 'review-msit-1-3',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The common area with the TV is a good place to unwind. The laundry facility is a big plus.',
      },
      {
        id: 'review-msit-1-4',
        author: 'Anonymous',
        rating: 3,
        comment: 'The Wi-Fi can be unreliable at times, which is the only major drawback.',
      },
      {
        id: 'review-msit-1-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good connectivity to the metro and local markets. It is a convenient and comfortable place.',
      },
    ],
  },
  {
    id: 'pg-msit-2',
    name: 'Urban Homes PG',
    type: 'PG',
    address: 'C-Block, Janakpuri, Delhi',
    college: 'Maharaja Surajmal Institute of Technology',
    pincode: '110058',
    imageId: 'flat-image-2',
    location: { lat: 28.631, lng: 77.085 },
    contact: { name: 'Mr. Khan', phone: '9876543218' },
    reviews: [
      {
        id: 'review-msit-2-1',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Excellent location, just 200 meters from MSIT. Single rooms for 14000, double for 10000. They serve both veg and non-veg food. Also has Wi-Fi, AC, bed, table, chair, laundry, fridge, and TV.',
      },
      {
        id: 'review-msit-2-2',
        author: 'Anonymous',
        rating: 5,
        comment:
          'The food is amazing, especially the non-veg options. It’s a bit pricey but worth it for the convenience and quality.',
      },
      {
        id: 'review-msit-2-3',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The single rooms offer great privacy. The management is professional and the PG is well-maintained.',
      },
      {
        id: 'review-msit-2-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'You can literally walk to college in 2 minutes. Saves a lot of travel time and money.',
      },
      {
        id: 'review-msit-2-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'A top choice for MSIT students. The facilities are modern and the staff is helpful.',
      },
    ],
  },
  {
    id: 'pg-msit-3',
    name: 'Nestorest PG',
    type: 'PG',
    address: 'Vikaspuri, Delhi',
    college: 'Maharaja Surajmal Institute of Technology',
    pincode: '110018',
    imageId: 'pg-image-6',
    location: { lat: 28.651, lng: 77.069 },
    contact: { name: 'Mr. Singh', phone: '9876543219' },
    reviews: [
      {
        id: 'review-msit-3-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'This PG is for single occupancy only, at 13000 Rs. It is 1.4 km away from MSIT and has a gym. Other facilities are Wi-Fi, AC, food, table, chair, bed, fridge, laundry, and TV.',
      },
      {
        id: 'review-msit-3-2',
        author: 'Anonymous',
        rating: 5,
        comment:
          'The in-house gym is fantastic and a huge money-saver. The rooms are spacious and perfect for one person.',
      },
      {
        id: 'review-msit-3-3',
        author: 'Anonymous',
        rating: 4,
        comment: 'The food quality is good. It is a well-managed and clean place to live.',
      },
      {
        id: 'review-msit-3-4',
        author: 'Anonymous',
        rating: 3,
        comment: 'The distance is the only downside, but the metro is nearby. The amenities make up for it.',
      },
      {
        id: 'review-msit-3-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'I loved the privacy of a single room. It is a great place for focused studying.',
      },
    ],
  },
  {
    id: 'pg-noida-1',
    name: 'Sunshine PG',
    type: 'PG',
    address: 'Sector 62, Noida',
    college: 'Jaypee Institute of Information Technology',
    pincode: '201309',
    imageId: 'hostel-image-3',
    location: { lat: 28.629, lng: 77.371 },
    contact: { name: 'Auntie Ji', phone: '9123456789' },
    reviews: [
      {
        id: 'rev-np1-1',
        author: 'Anonymous',
        rating: 4,
        comment: 'Very clean and the food is just like home. Auntie Ji is very caring.',
      },
      {
        id: 'rev-np1-2',
        author: 'Anonymous',
        rating: 5,
        comment: 'Best PG in the area! The Wi-Fi is super fast which is great for my studies.',
      },
      {
        id: 'rev-np1-3',
        author: 'Anonymous',
        rating: 3,
        comment: 'A bit strict on the timings, but it is for our own safety. Good place overall.',
      },
      {
        id: 'rev-np1-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'The rooms are spacious and well-maintained. The metro is also nearby.',
      },
      {
        id: 'rev-np1-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'Good value for money. All the basic amenities are provided.',
      },
    ],
  },
  {
    id: 'flat-noida-1',
    name: 'Student Nest Flats',
    type: 'Flat',
    address: 'Sector 125, Noida',
    college: 'Amity University',
    pincode: '201313',
    imageId: 'unique-flat-1',
    location: { lat: 28.544, lng: 77.333 },
    contact: { name: 'Raj Properties', phone: '9988776655' },
    reviews: [
      {
        id: 'rev-nf1-1',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Great 2BHK flat, perfect for sharing with friends. The location is very close to Amity.',
      },
      {
        id: 'rev-nf1-2',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The landlord is very responsive and fixes any issues promptly. The society has good security.',
      },
      {
        id: 'rev-nf1-3',
        author: 'Anonymous',
        rating: 3,
        comment: 'Finding a cook was a bit of a challenge, but the flat itself is great.',
      },
      {
        id: 'rev-nf1-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'More freedom than a PG. The kitchen is well-equipped.',
      },
      {
        id: 'rev-nf1-5',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Highly recommend for Amity students. It is worth the price for the independence you get.',
      },
    ],
  },
  {
    id: 'hostel-noida-1',
    name: 'Amity Scholars Hostel',
    type: 'Hostel',
    address: 'Sector 126, Noida',
    college: 'Amity University',
    pincode: '201313',
    imageId: 'unique-hostel-1',
    location: { lat: 28.545, lng: 77.336 },
    contact: { name: 'Hostel Office', phone: '9876501234' },
    reviews: [
      {
        id: 'rev-nh1-1',
        author: 'Anonymous',
        rating: 4,
        comment: 'On-campus hostel with good facilities. A bit expensive but very convenient.',
      },
      {
        id: 'rev-nh1-2',
        author: 'Anonymous',
        rating: 3,
        comment: 'The mess food gets repetitive after a while. The rooms are clean though.',
      },
      {
        id: 'rev-nh1-3',
        author: 'Anonymous',
        rating: 5,
        comment: 'The best part is the campus life and security. You can access all university facilities easily.',
      },
      {
        id: 'rev-nh1-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'The AC rooms are comfortable. The laundry service is also a plus.',
      },
      {
        id: 'rev-nh1-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'Good for the first year to get used to the university. The wardens are helpful.',
      },
    ],
  },
  {
    id: 'pg-delhi-1',
    name: 'Comfort Stay PG',
    type: 'PG',
    address: 'GTB Nagar, Delhi',
    college: 'University of Delhi',
    pincode: '110009',
    imageId: 'unique-pg-1',
    location: { lat: 28.698, lng: 77.205 },
    contact: { name: 'Mr. Singh', phone: '9012345678' },
    reviews: [
      {
        id: 'rev-dp1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Prime location for North Campus students. The rooms are a bit small but the food is good.',
      },
      {
        id: 'rev-dp1-2',
        author: 'Anonymous',
        rating: 3,
        comment: 'The area is very noisy, which can be a problem during exams.',
      },
      {
        id: 'rev-dp1-3',
        author: 'Anonymous',
        rating: 5,
        comment: 'Loved the food here! The owner is very friendly and takes care of all needs.',
      },
      {
        id: 'rev-dp1-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'Good Wi-Fi and power backup. Never faced any issues with basic amenities.',
      },
      {
        id: 'rev-dp1-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'A bit on the expensive side, but worth it for the location and food.',
      },
    ],
  },
  {
    id: 'hostel-delhi-1',
    name: 'Stanza Living - Athens House',
    type: 'Hostel',
    address: 'Satya Niketan, Delhi',
    college: 'University of Delhi',
    pincode: '110021',
    imageId: 'unique-hostel-2',
    location: { lat: 28.589, lng: 77.168 },
    contact: { name: 'Stanza Support', phone: '9871234567' },
    reviews: [
      {
        id: 'rev-dh1-1',
        author: 'Anonymous',
        rating: 4,
        comment: 'Very professionally managed. The rooms are modern and the app is useful for services.',
      },
      {
        id: 'rev-dh1-2',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The food is not as good as they advertise. The common areas are nice though.',
      },
      {
        id: 'rev-dh1-3',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Great for South Campus students. The location is perfect with lots of cafes around.',
      },
      {
        id: 'rev-dh1-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The biometric security is a good feature. I always felt safe here.',
      },
      {
        id: 'rev-dh1-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'A bit pricey, but the amenities like the gym and common room make it worthwhile.',
      },
    ],
  },
  {
    id: 'flat-delhi-1',
    name: 'Dhingra Properties',
    type: 'Flat',
    address: 'Lajpat Nagar, Delhi',
    college: 'University of Delhi',
    pincode: '110024',
    imageId: 'unique-flat-2',
    location: { lat: 28.567, lng: 77.242 },
    contact: { name: 'Mr. Dhingra', phone: '9990001111' },
    reviews: [
      {
        id: 'rev-df1-1',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good 1BHK options for students. The landlord is reasonable and does not interfere much.',
      },
      {
        id: 'rev-df1-2',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The brokerage fee was quite high. The flat itself is good for 2 people.',
      },
      {
        id: 'rev-df1-3',
        author: 'Anonymous',
        rating: 5,
        comment:
          'Lajpat Nagar market is right next door, which is amazing for food and shopping.',
      },
      {
        id: 'rev-df1-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'Good metro connectivity to both North and South campus.',
      },
      {
        id: 'rev-df1-5',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The water supply can be an issue sometimes, but the landlord provides a tanker if needed.',
      },
    ],
  },
  {
    id: 'pg-delhi-2',
    name: 'Aggarwal PG',
    type: 'PG',
    address: 'Karol Bagh, Delhi',
    college: 'University of Delhi',
    pincode: '110005',
    imageId: 'unique-pg-2',
    location: { lat: 28.647, lng: 77.191 },
    contact: { name: 'Mr. Aggarwal', phone: '9811122233' },
    reviews: [
      {
        id: 'rev-dp2-1',
        author: 'Anonymous',
        rating: 3,
        comment:
          'Very affordable PG. The facilities are basic but functional. Good for budget-conscious students.',
      },
      {
        id: 'rev-dp2-2',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The location is great, right in the middle of the market. The metro is a 2-minute walk.',
      },
      {
        id: 'rev-dp2-3',
        author: 'Anonymous',
        rating: 2,
        comment:
          'The rooms are not very clean and the food is below average. Only stay if you have no other option.',
      },
      {
        id: 'rev-dp2-4',
        author: 'Anonymous',
        rating: 4,
        comment:
          'The owner is a very nice person and tries to help as much as possible.',
      },
      {
        id: 'rev-dp2-5',
        author: 'Anonymous',
        rating: 3,
        comment:
          'It is a decent place for the price. You get what you pay for.',
      },
    ],
  },
  {
    id: 'hostel-noida-2',
    name: 'Knowledge Park Hostel',
    type: 'Hostel',
    address: 'Knowledge Park III, Greater Noida',
    college: 'Sharda University',
    pincode: '201308',
    imageId: 'unique-hostel-3',
    location: { lat: 28.474, lng: 77.498 },
    contact: { name: 'Hostel Management', phone: '9988770011' },
    reviews: [
      {
        id: 'rev-nh2-1',
        author: 'Anonymous',
        rating: 4,
        comment: 'A good option for students of various colleges in Knowledge Park. The rooms are decent.',
      },
      {
        id: 'rev-nh2-2',
        author: 'Anonymous',
        rating: 3,
        comment:
          'The mess food is a common complaint among students. The variety is very limited.',
      },
      {
        id: 'rev-nh2-3',
        author: 'Anonymous',
        rating: 5,
        comment: 'The location is excellent, right in the educational hub. The metro is also close by.',
      },
      {
        id: 'rev-nh2-4',
        author: 'Anonymous',
        rating: 4,
        comment: 'Good security and a peaceful environment for studying.',
      },
      {
        id: 'rev-nh2-5',
        author: 'Anonymous',
        rating: 4,
        comment: 'The single rooms are spacious and provide good privacy.',
      },
    ],
  },
];
