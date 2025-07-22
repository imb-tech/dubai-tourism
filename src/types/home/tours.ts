type Tour = {
    id: number
    name: string
    price: number
    slug: string
    description: string
    discount: number
    exclusion: string
    images: {
        id: number,
        image: string
    }[]
    inclusion: string
}

type TourResults = {
    total_pages: number
    results: Product[]
}