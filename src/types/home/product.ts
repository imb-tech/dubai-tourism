type Product = {
    id: string | number;
    name: string;
    price?: number | string
    location?: string;
    tag?: string;
    image: string;
    url?: string;
    km_per_day?: number;
    year?: number;
    gear?: string;
    reviewsCount?: number;
    rating?: number;
    areaSqFt?: number;
    beds?: number;
    baths?: number;
    discount?: number;
    slug: string
    best_seller?: boolean
    suffix?: string
};
