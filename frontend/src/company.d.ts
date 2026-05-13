export interface CompanySearch {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface CompanyProfile {
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
}
export interface CompanyKeyMetrics {
  peRatioTTM: any;
  tenDayAverageTradingVolume: number;
  beta: number;
  bookValuePerShareAnnual: number;
  bookValuePerShareQuarterly: number;
  currentRatioAnnual: number;
  currentRatioQuarterly: number;
  dividendIndicatedAnnual: number;
  dividendPerShareTTM: number;
  dividendYieldTTM: number;
  epsAnnual: number;
  epsTTM: number;
  epsGrowth5Y: number;
  epsGrowthTTMYoy: number;
  freeCashFlowPerShareTTM: number;
  grossMarginAnnual: number;
  grossMarginTTM: number;
  marketCapitalization: number;
  netProfitMarginAnnual: number;
  netProfitMarginTTM: number;
  pbAnnual: number;
  peAnnual: number;
  peTTM: number;
  pfcfShareAnnual: number;
  pfcfShareTTM: number;
  psAnnual: number;
  psTTM: number;
  quickRatioAnnual: number;
  quickRatioQuarterly: number;
  returnOnEquityAnnual: number;
  roeTTM: number;
  roaRfy: number;
  roaTTM: number;
  revenueGrowth5Y: number;
  revenuePerShareAnnual: number;
  revenuePerShareTTM: number;
  bookValuePerShareTTM: number;
  capexPerShareTTM: number;
  grahamNumberTTM: number;
  currentRatioTTM: number;
  returnOnTangibleAssetsTTM: number;
  marketCapTTM: number;
  dividendYieldPercentageTTM: number;
}