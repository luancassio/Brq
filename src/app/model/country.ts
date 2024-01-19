export default class Country{
    flags!: {
            png: string
            svg: string
            alt: string
        }
    name!: {
        common: string
    }
    capital!: string[]
    population!: number
    currencies!: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    languages!: {
        [key: string]: string
    }
    region!: string

    constructor(data: any){
        this.flags = data?.flags
        this.name = data?.name
        this.capital = data?.capital
        this.population = data?.population
        this.currencies = data?.currencies
        this.languages = data?.languages
        this.region = data?.region
    }

    getNameCurrency(data: Country): string{
        if (data?.currencies) {
          return data.currencies[Object.keys(data?.currencies)[0]].name
        }
        return 'Não Encontrado'
      }

    isRegionAsia(data: Country): boolean{
        if (data.region.toLocaleLowerCase() == 'asia') {
          return true;
        }
        return false
      }
    isSpeakFrench(data: Country): boolean{
        console.log(data)
        const lang = data?.languages ? Object.keys(data?.languages) : []
        if (lang.length > 0 && lang.includes('fra')) {
            return true;
          }
          return false
    }
   
}