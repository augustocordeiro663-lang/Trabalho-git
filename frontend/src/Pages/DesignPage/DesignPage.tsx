import React from 'react'
import Table from '../../Components/Table/Table';
import RatioList from '../../Components/RatioList/RatioList';
import { TestDataCompany } from '../../Components/Table/testeData';

interface Props {}

const data = TestDataCompany[0];

const config = [
  {
    label: "Company Name",
    render: (company: typeof data) => company.companyName,
    subTitle: "This is the company name",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>This is FinShark's design page. This is where we will house various design aspects of the app</h2>
      <RatioList data={data} config={config} />
      <Table configs={[]} data={[]} />
    </>
  );
};

export default DesignPage;