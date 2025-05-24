import React from 'react'
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return <div className='card'>
        <img
            src='https://picsum.photos/200/300'
            alt=''
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>{price}$</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, lectus a auctor faucibus, nibh mi suscipit lacus, nec sagittis est ante at justo. 
        </p>
    </div>;
};

export default Card