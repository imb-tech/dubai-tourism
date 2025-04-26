type Product = {
    id: string | number;
    name: string;
    location?: string;
    tag?: string;
    image: string;
    distance?: number;
    horsepower?: number;
    transmission?: 'Automatic' | 'Manual';
    reviewsCount?: number;
    rating?: number;
    areaSqFt?: number;
    beds?: number;
    baths?: number;
    price: number;
    discount?: number;
    url?: string
    sale?: boolean
    suffix?: string
};