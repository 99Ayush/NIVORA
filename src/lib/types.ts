export type Listing = {
  id: string;
  name: string;
  type: 'PG' | 'Mess' | 'Flat';
  address: string;
  imageId: string;
  college: string;
  pincode: string;
  reviews: Review[];
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
};
