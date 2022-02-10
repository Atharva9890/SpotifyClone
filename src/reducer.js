export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQDPCtqSW1MjNtnehH1MN0FS_aRyFIT7jbJAGFO723D6XOjOYccA6ZpKq_OZOpZORZFj0lB1GODsAbfuQr7SE7vFU_20PnpuUAR8KK0asYHtU7GoU1BcZvjWsHKbHsB8VDVvrAV2Amd5gHJTzpp0_5t3PLhgwSTV_6I"
}

const reducer = (state, action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_TOP_ARTISTS':
            return{
                ...state,
                top_artists: action.top_artists
            }
        case "SET_SPOTIFY":
                return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_PLAYING":
                return {
                ...state,
                playing: action.playing,
            };
        case "SET_PLAYING":
                return {
                ...state,
                playing: action.playing,
            };
            default:
                return state;
    }
}

export default reducer;