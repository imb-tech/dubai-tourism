type Product = {
    id: number
    name: string
    image: string
    price: number
    discount?: number
    karobka?: "Mechanic" | "Automatic"
    hp?: number
    speed?: number
    comments?: number
    rate?: number
    url?:string
}