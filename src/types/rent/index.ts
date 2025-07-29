type RentCar = {
    id: number;
    images: Banner[];
    similar: RentCar[];
    name: string;
    slug: string;
    price: number;
    image: string;
    color: string;
    luggage: number;
    gcc: boolean;
    safety: boolean;
    gear: string;
    discount: number
    seats: number;
    sensors: boolean;
    camera: boolean;
    engine: string;
    doors: number;
    bluetooth: boolean;
    lcd: boolean;
    player: boolean;
    radio: boolean;
    year: number;
    delivery: string;
    insurance: string;
    deposit: boolean;
    min_age: number;
    description: string;
    km_per_day: number;
    brand: number;
    lat: number
    lon: number
    type:string

}

type RentCarResults = {
    total_pages: number
    results: RentCar[]
}