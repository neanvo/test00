export class FinnubSymbolsResponse {
    "count": number
    "result": {
        "description": string
        "displaySymbol": string
        "symbol": string
        "type": string
      }[]
  }

export class FinnubQuoteResponse {
    "c": number
    "d": number
    "dp": number
    "h": number
    "l": number
    "o": number
    "pc": number
    "t": number
  }