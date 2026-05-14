import React from 'react';
import { CompanyBalanceSheet } from '../../company';
import { testBalanceSheetData } from '../Table/testeData';
import RatioList from '../RatioList/RatioList';
import Table from '../Table/Table';

type Props = {}

const config = [
  {
    label: "Total Assets",
    render: (company: CompanyBalanceSheet) => company.totalAssets,
    subTitle: "Total assets of the company",
  },
  {
    label: "Total Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    subTitle: "Total liabilities of the company",
  },
  {
    label: "Total Equity",
    render: (company: CompanyBalanceSheet) => company.totalEquity,
    subTitle: "Total equity of the company",
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.totalDebt,
    subTitle: "Total debt of the company",
  },
  {
    label: "Cash And Equivalents",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    subTitle: "Cash and cash equivalents",
  },
  {
    label: "Inventory",
    render: (company: CompanyBalanceSheet) => company.inventory,
    subTitle: "Inventory value",
  },
];

const BalanceSheet = (props: Props) => {
  return (
    <div>
      <Table configs={config} data={testBalanceSheetData} />
    </div>
  );
};

export default BalanceSheet;