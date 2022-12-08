export type Product = {
    name: string
    price: string,
    description: string,
    inStock: number,
    weight: number,
    height: number,
    width: number,
    depth: number,
    mainPhoto: string,
    secondaryPhotos?: string[] 
    categories:  string
}