type MiceGroup = {
    id: number
    title: string
    slug: string
    description: string
    image: string
    features?: {
        id: number
        name: string
        description: string
    }[]
    images?: {
        id: number
        image: string
    }[]
}


type MiceGroupResults = {
    total_pages: number
    results: MiceGroup[]
}