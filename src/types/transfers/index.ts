type Transfers = {
  id: number;
  created_at: string;
  updated_at: string;
  best_seller: boolean;
  name: string;
  luggage: number;
  discount: string;
  price: string;
  passengers: number;
  image: string;
  slug: string;
  images?: {
    id: number;
    image: string;
  }[];
  type: string;
};

type TransfersData = {
  total_pages: number;
  results: Transfers[];
};
