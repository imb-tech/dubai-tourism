
type Shopping = {
    id?: number
    slug: string,
    name: string
    best_seller?: boolean,
    category_name?: string,
    phone?: string | number,
    poster: string,
    price?: number
    description: string
    images?: { id: number, image: string }[]
    properties?: {
        id: number
        title: string
        description: string
    }[]
    similar?: Shopping[],
    category?: {
        id: number
        name: string
    }
}

type ShoppingData = {
    total_pages: number,
    results: Shopping[]
}