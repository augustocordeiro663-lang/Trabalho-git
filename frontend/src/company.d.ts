export interface CompanySearch {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface CompanyProfile {
  symbol: string;
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

export interface CompanyIncomeStatement {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  depreciationAndAmortization: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  epsdiluted: number;
}

export interface CompanyBalanceSheet {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  cashAndCashEquivalents: number;
  shortTermInvestments: number;
  cashAndShortTermInvestments: number;
  netReceivables: number;
  inventory: number;
  totalCurrentAssets: number;
  propertyPlantEquipmentNet: number;
  totalNonCurrentAssets: number;
  totalAssets: number;
  accountPayables: number;
  shortTermDebt: number;
  totalCurrentLiabilities: number;
  longTermDebt: number;
  totalNonCurrentLiabilities: number;
  totalLiabilities: number;
  totalStockholdersEquity: number;
  totalEquity: number;
  totalDebt: number;
  netDebt: number;
}

export interface CompanyCashFlow {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  netIncome: number;
  depreciationAndAmortization: number;
  operatingCashFlow: number;
  capitalExpenditure: number;
  freeCashFlow: number;
  cashAtEndOfPeriod: number;
  commonStockIssued: number;
  netCashUsedForInvestingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
}

export interface CompanyCompData {
  symbol: string;
  peersList: string[];
}