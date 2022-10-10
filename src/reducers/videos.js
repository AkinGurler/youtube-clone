
export const initialState = {
   
    videosBycategory: [],
    videoDetails:[],
    suggestedVideos:[],
    channelDetails:[],
    channelVideos:[],
    searchVideos:[],
    videoComments:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEOS_BY_CATEGORY":
            return {
                ...state, videosBycategory: action.payload
            }
        case "VIDEO_DETAIL":
            return {
                ...state,videoDetails:action.payload
            }
        case "SUGGESTED_VIDEOS":
            return {
                ...state,suggestedVideos:action.payload
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
        case "GET_ALL_COMMENTS":
            return{
                ...state,videoComments:action.payload
            }
        

        default:
            return state
    }

}

export default reducer;