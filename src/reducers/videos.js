
const initialState = {
    videosBycategory: [],
    videoDetails:[],
    suggestedVideos:[],
}

export const videoReducer = (state = initialState, action) => {
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
        default:
            return state
    }

}
