import React, { useEffect, useState } from 'react';
import { CompanyIncomeStatement } from '../../company';
import { testIncomeStatementData } from '../Table/testeData';
import Table from '../Table/Table';
import { useOutletContext } from 'react-router';
import Spinner from '../Spinner/Spinner';

type Props = {}

const formatLargeMonetaryNumber = (num: number) => {
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  return `$${num.toFixed(2)}`;
};

const formatRatio = (num: number) => (num * 100).toFixed(2) + "%";

const configs = [
  { label: "Date", render: (company: CompanyIncomeStatement) => company.date },
  { label: "Revenue", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.revenue) },
  { label: "Cost Of Revenue", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.costOfRevenue) },
  { label: "Depreciation", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.depreciationAndAmortization) },
  { label: "Operating Income", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.operatingIncome) },
  { label: "Income Before Taxes", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.incomeBeforeTax) },
  { label: "Net Income", render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.netIncome) },
  { label: "Net Income Ratio", render: (company: CompanyIncomeStatement) => formatRatio(company.netIncomeRatio) },
  { label: "Earnings Per Share", render: (company: CompanyIncomeStatement) => formatRatio(company.eps) },
  { label: "Earnings Per Diluted", render: (company: CompanyIncomeStatement) => formatRatio(company.epsdiluted) },
  { label: "Gross Profit Ratio", render: (company: CompanyIncomeStatement) => formatRatio(company.grossProfitRatio) },
  { label: "Operating Income Ratio", render: (company: CompanyIncomeStatement) => formatRatio(company.operatingIncomeRatio) },
  { label: "Income Before Taxes Ratio", render: (company: CompanyIncomeStatement) => formatRatio(company.incomeBeforeTaxRatio) },
];

const IncomeStatement = (props: Props) => {
  return (
    <>
      <Table configs={configs} data={testIncomeStatementData} />
      <Spinner />
    </>
  );
};

export default IncomeStatement;