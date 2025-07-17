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
  id: number;
  checked?: boolean | undefined;
  adult: number;
  max_adult: number;
  max_child: number;
  max_infant: number;
  child: number;
  infant: number;
  total: number;
  name: string;
  description: string;
  tour_date: string;
  rating: number
  image: string
  discount: number;
  price: number;
  discount_child: number;
  child_price: number;
  discount_adults: number;
  adult_price: number;
  discount_infant: number;
  infant_price: number;
  attraction_offer: number;
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
  transfer_option: {
    id: number;
    name: string;
    price: number;
    is_discount: boolean;
  }
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
  location: string
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



type AtractionData = {
  total_pages: number;
  results: Atraction[];
};
