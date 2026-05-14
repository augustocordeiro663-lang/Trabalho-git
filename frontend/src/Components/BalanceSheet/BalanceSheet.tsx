import React, { useEffect, useState } from 'react';
import { CompanyBalanceSheet } from '../../company';
import { testBalanceSheetData } from '../Table/testeData';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div>
      {loading ? <Spinner isLoading={loading} /> : <Table configs={config} data={testBalanceSheetData} />}
    </div>
  );
};

export default BalanceSheet;