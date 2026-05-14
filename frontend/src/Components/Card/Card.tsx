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
      <Link to={`/company/${searchResult.symbol}/company-profile`}
      className="font-bold text-center text-veryDarkViolet md:text-left">
        {searchResult.description} ({searchResult.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.type}</p>
      <p className="text-veryDarkBlue font-bold">{searchResult.displaySymbol}</p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  );
};

export default Card;