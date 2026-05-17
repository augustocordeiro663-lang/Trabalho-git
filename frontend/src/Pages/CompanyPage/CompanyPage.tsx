import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import CompFinder from '../../Components/CompFinder/CompFinder';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result !== "string" && result) {
        setCompany(result.data);
      }
    };
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar companyName={company.name} />
          <CompanyDashboard ticker= {ticker!}>
        <Tile title="Company" subTitle={company.name} />
<Tile title="Ticker" subTitle={company.ticker} />
<Tile title="Country" subTitle={company.country} />
<Tile title="Exchange" subTitle={company.exchange} />
<Tile title="Industry" subTitle={company.finnhubIndustry} />
<Tile title="Currency" subTitle={company.currency} />
<CompFinder ticker={ticker!} />
<p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
  {company.weburl}
</p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;