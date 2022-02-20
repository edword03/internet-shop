export interface ProductsType {
  image: string
  name: string
  price: number
}

export interface ProductsTypeExtended extends ProductsType {
  count: number
}