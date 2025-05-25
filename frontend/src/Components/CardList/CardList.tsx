import React, { JSX, SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuid } from "uuid";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList : React.FC<Props> = ({searchResults, onPortfolioCreate}: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return <Card id={result.symbol} key={uuid()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />;
                })
            ): (
                <h1>No results</h1>
            )}
        </>
    );

//   return (
//     <div>
//         <Card companyName='Apple' ticker='APPL' price={100} />
//         <Card companyName='Microsoft' ticker='MSFT' price={200} />
//         <Card companyName='Tesla' ticker='TSLA' price={300} />
//     </div>
//   )
}

export default CardList