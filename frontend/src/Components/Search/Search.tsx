import React, { ChangeEvent, JSX, useState, SyntheticEvent, FormEvent } from 'react'

interface Props {
    //onClick: (e: SyntheticEvent) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    //handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {
    // return (
    //     <div>
    //         <input value={search} onChange={(e) => handleChange(e)}></input>
    //         <button onClick={(e) => onClick(e)}>Search</button>
    //     </div>
    // )
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange} />
            </form>
        </>
    );
};

export default Search;