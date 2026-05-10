import React, { SyntheticEvent } from 'react';
import { CompanySearch } from "../../company";
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-8 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult["1. symbol"]}`} className="font-bold text-center text-veryblack md:text-left">
        {searchResult["2. name"]} ({searchResult["1. symbol"]})
      </Link>
      <p className="text-veryblack">{searchResult["8. currency"]}</p>
      <p className="text-veryblack font-bold">
        {searchResult["4. region"]} - {searchResult["3. type"]}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult["1. symbol"]} />
    </div>
  );
};

export default Card;