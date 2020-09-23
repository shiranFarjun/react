import React from "react";
import DisplayAvatar from './DisplayAvatar';


const CardList = (props) => {
    const filteredResults = props.results.filter(avatar => {
        const nameStr = `${avatar.name.first} ${avatar.name.last}`;
        return nameStr.startsWith(props.inputSearchProps.charAt(0).toUpperCase()+ props.inputSearchProps.slice(1))
    });

    return (
        <div>
            <DisplayAvatar listResult={filteredResults} />
        </div>
    );
}

export default CardList;
