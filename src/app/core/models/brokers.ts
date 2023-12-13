export interface Brokers {
  title: string
  subtitle: string
  level: string
  cours: Cour[]
  price_month: number
  price_year: number
}

export interface Cour {
  title: string
  percentage: string
}
