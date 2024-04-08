export interface Product {
  id: string
  preview: string
  title: string
  subtitle: string
  price: number
  discount: number
  description: string
  details: {
    images: string[]
  }
}
