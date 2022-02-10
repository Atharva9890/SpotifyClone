import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';
function Header(){
    const [{ user }, dispatch] = useDataLayerValue();
    return(
        <div className="header">
            <div className="headerleft">
                <SearchIcon />
                <input placeholder="Search for Artists,Song" type="text"/>
            </div>
            <div className="headerright">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>            
        </div>
    )
}
export default Header;
