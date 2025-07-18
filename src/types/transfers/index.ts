type Transfer = {
  id: number;
  transfer: {
    id: number;
    slug: string;
    type: string;
    image: string;
    passengers: number;
    name: string;
    luggage: number;
  };
  from_airport: {
    id: number;
    name: string;
    country: number | null;
  };
  to_airport: {
    id: number;
    name: string;
    country: number | null;
  };
  price: string;
  discount: string;
  distance_km: number;
  distance_mile: number;
  distance_hour: string;
  available_child_seat: number;
  available_booster_seat: number;
  best_seller: boolean;
};

type TransferList = {
  discount: string;
  from_airport: string;
  id: number;
  price: string;
  to_airport: string;
  transfer: {
    id: number;
    slug: string;
    type: string;
    image: string;
    passengers: number;
    name: string;
    luggage: number;
  };
};
