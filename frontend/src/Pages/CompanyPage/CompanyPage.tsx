import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | undefined>(undefined);

useEffect(() => {
  const getProfileInit = async () => {
    const result = await getCompanyProfile(ticker!);
    if (typeof result !== "string") {
      setCompany(result?.data[0]); // <-- adiciona o [0] aqui
    }
  };
  getProfileInit();
}, []);
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar />
        
        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage;