import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

type Props = {};

const Search : React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = (e: SyntheticEvent) => {
        alert(e);
    };

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => onClick(e)}>Search</button>
        </div>
    )
};

export default Search;