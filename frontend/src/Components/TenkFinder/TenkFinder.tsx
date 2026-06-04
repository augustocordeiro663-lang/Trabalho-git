import React, { useEffect, useState } from 'react'
import { CompanyTenk } from '../../company';
import { getTenk } from '../../api';
import TenkFinderItem from './TenkFinderItem/TenkFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
  ticker: string;
}

const TenkFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenk[]>();

  useEffect(() => {
    const getTenkData = async () => {
      const value = await getTenk(ticker);
      if (typeof value !== "string" && value) {
        setCompanyData(value.data);
      }
    };
    getTenkData();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData.slice(0, 5).map((tenK) => {
          return <TenkFinderItem key={tenK.accessNumber} tenK={tenK} />;
        })
      ) : (
       <Spinner />
      )}
    </div>
  );
};

export default TenkFinder;