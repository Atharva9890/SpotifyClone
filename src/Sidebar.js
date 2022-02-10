import './Sidebar.css';
import Sidebaroption from './Sidebaroption';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {    useDataLayerValue} from './DataLayer';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
function Sidebar(){
    const [{playlists},dispatch] = useDataLayerValue();
    return(
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="sidebar_logo"></img>
            <Sidebaroption title="Home" Icon={HomeIcon}/>
            <Sidebaroption title="Search" Icon={SearchIcon}/>
            <Sidebaroption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebartitle">Playlists</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <Sidebaroption title={playlist.name} /> 
            ))}
        </div>
    )
}

export default Sidebar;