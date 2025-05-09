type VipConicerge = {
    id: number;
    images: {
        id: number;
        image: string;
    }[];
    similar: VipConicerge[];
    created_at: string;
    name: string;
    best_seller: boolean
    slug: string;
    price: string;
    image: string;
    description: string;
    category_name: string
}

type VipConicergeResults = {
    total_pages: number
    results: VipConicerge[]
}