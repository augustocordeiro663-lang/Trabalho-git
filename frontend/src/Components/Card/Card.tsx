import React from 'react';
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }) => {
  return (
    <div className='card'>
      <img
        src="https://imgs.search.brave.com/33Ml2QSwORUR9WVwcbiwQA9SoHqOpV3UUh39g9TVANs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzQxLzM5LzM5/LzM2MF9GXzE4NDEz/OTM5MTJfVzBpYjV3/ZkoyVk53czVjODB3/T3I2U1RZVHRRRUN3/VkcuanBn"
        alt="Imagem do card"
      />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>{price}</p>
      </div>
      <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, provident.</p>
    </div>
  );
};

export default Card;