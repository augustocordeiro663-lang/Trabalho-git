import React, { useEffect, useState } from 'react'
import { getCompData } from '../../api';
import CompFinderItem from './CompFinderItem';

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<string[]>([]);

  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      if (typeof value !== "string" && value) {
        setCompanyData(value.data);
      }
    };
    getComps();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData.map((ticker) => {
        return <CompFinderItem key={ticker} ticker={ticker} />;
      })}
    </div>
  );
};

export default CompFinder;