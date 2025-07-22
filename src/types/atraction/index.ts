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


type Options = {
  discount_child: number;
  discount_adults: number;
  discount_infant: number;
  child_price: number;
  adult_price: number;
  infant_price: number;
  id: number;
  name: string;
  price: number;
  is_discount: boolean;
}


type AtractionOffers = {
  id: number;
  checked?: boolean | undefined;
  basket_attraction_id: number
  available: string
  vat: string
  comment_count: number
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
  attraction_offer: number;
  transfer_options: Options[];
  transfer_option: Options
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
  imp_info: string
  inclusion: string
  itenarary: string
  terms: string
  useful_info: string
  child_cancellation: string
  cancellation_policy_description: string
  images: {
    id: number
    image: string
  }[]
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
