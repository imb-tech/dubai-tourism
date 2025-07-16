type Atraction = {
  id?: string;
  slug: string;
  name: string;
  image: string;
  comment_count: string;
  rating: number;
  price: number;
  discount: number;
};

type AtractionOffers = {
  id?: number;
  checked?: boolean | undefined;
  adult?: number;
  child?: number;
  infant?: number;
  total?: number;
  name: string;
  description: string;
  tour_date: string;
  discount: number;
  price: number;
  discount_child: number;
  child_price: number;
  discount_adults: number;
  adult_price: number;
  discount_infant: number;
  infant_price: number;
  selected_transfer: {
    price: number | string;
    is_discount: boolean;
    id: number;
  };
  transfer_options: {
    id: number;
    name: string;
    price: number;
    is_discount: boolean;
  }[];
  is_refundable: boolean;
  refound_date: string;
};

type AtractionFeatures = {
  text: string;
};

type AtractionDetail = {
  slug: string;
  name: string;
  opening_hours: string;
  children: boolean;
  lat: number;
  lon: number;
  description: string;
  insurance: string;
  offers: AtractionOffers[];
  whatsapp: string;
  feature: AtractionFeatures[];
};

type AtractionStore = AtractionOffers & {
  id: number;
  checked: boolean;
  adult: number;
  child: number;
  infant: number;
  total?: number;
};

type AtractionCreate = {
  attraction_offer: number;
  tour_date: string;
  transfer_option: number;
  adult: number;
  child: number;
  infant: number;
};

type AtractionGetBasket = {
  id: number;
  name: string;
  image: string;
  transfer_option: {
    id: number;
    name: string;
    price: string;
    is_discount: boolean;
  };
  tour_date: string;
  adult: number;
  child: number;
  infant: number;
  total_price: string;
  comment_count: number;
  rating: number;
  attraction_id: number;
  attraction_offer_id: number;
  description: string;
  discount: string;
};

type AtractionData = {
  total_pages: number;
  results: Atraction[];
};
