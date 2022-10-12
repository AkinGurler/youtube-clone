
export const initialState = {
   
    videosBycategory: [],
    video:{videoDetail:[],suggestedVideos:[],comments:[],channel:[]},
    channel:{details:[],videos:[]}, 
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
        case "GET_CHANNEL":
            return{
                ...state,channel:action.payload
            }
    

        default:
            return state
    }

}

export default reducer;