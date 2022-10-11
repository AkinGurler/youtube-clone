
export const initialState = {
   
    videosBycategory: [],
    video:{videoDetail:[],suggestedVideos:[],comments:[]},
    channelDetails:[], /* Channel v'deos- */
    channelVideos:[],
    searchVideos:[],
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEOS_BY_CATEGORY":
            return {
                ...state, videosBycategory: action.payload
            }
        case "VIDEO_DETAIL":
            return {
                ...state,video:action.payload
                
            }
        case "GET_SEARCH_VIDEOS":
            return{ 
                ...state,searchVideos:action.payload
            }

        case "GET_CHANNEL_DETAILS":
            return{
                ...state,channelDetails:action.payload
            }
        case "GET_CHANNEL_VIDEOS":
            return{
                ...state,channelVideos:action.payload
            }
        
        

        default:
            return state
    }

}

export default reducer;