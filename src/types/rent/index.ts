type RentCar = {
    id: number;
    images: {
        id: number;
        image: string;
    }[];
    similar: RentCar[];
    name: string;
    slug: string;
    price: string;
    image: string;
    color: string;
    luggage: number;
    gcc: boolean;
    safety: boolean;
    gear: string;
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

}

type RentCarResults = {
    total_pages: number
    results: RentCar[]
}