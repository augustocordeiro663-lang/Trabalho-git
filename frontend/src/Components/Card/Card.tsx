import React from 'react';
import { CompanySearch } from "../../company";
interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }) => {
  return (
    <div className='card'>
      <img alt="Company logo" />
      <div className="details">
        <h2>{searchResult["2. name"]} ({searchResult["1. symbol"]})</h2>
        <p>{searchResult["8. currency"]}</p>
      </div>
      <p className='info'>{searchResult["4. region"]} - {searchResult["3. type"]}</p>
    </div>
  );
};

export default Card;