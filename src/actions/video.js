
import { fetchFromAPI } from "../utils/fetchFromAPI"



export const getVideosByCategory = category => async (dispatch) => {
    try {
        const videos = await fetchFromAPI(`search?part=snippet&q=${category}`)
        dispatch({
            type: "GET_VIDEOS_BY_CATEGORY", payload: videos.items
        })

    } catch (error) {
        console.log(error)
    }

}



export const getVideoDetail = (id) => async (dispatch) => {
    try {
        
        
        const videoData = await fetchFromAPI(`videos?part=snippet&id=${id}`)
       
       const channelDetails = await  fetchFromAPI(`channels?part=snippet&id=${videoData.items[0].snippet.channelId}`) 
        const data = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        const {items}=await fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
        
        


        
        const suggestedVideos = data.items
        const videoDetail = videoData.items[0]
        const payload={
            suggestedVideos,
            videoDetail,
            comments:items,
            channel:channelDetails.items[0]
        
        }
        
        
       
        console.log(payload)

        dispatch({
            type: "VIDEO_DETAIL", payload: payload
        })

    } catch (error) {
        console.log(error)
    }
}

export const getSuggestedVideos = id => async (dispatch) => {
    try {
        const data = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        const videos = data.items
        
        dispatch({
            type: "SUGGESTED_VIDEOS", payload: videos
        })
    } catch (error) {
        console.log(error)
    }


}

export const getSearchVideos = search => async (dispatch) => {
    try {
        const data = await fetchFromAPI(`search?q=${search}&part=snippet`)
        
        dispatch({
            type: "GET_SEARCH_VIDEOS", payload: data.items
        })

    } catch (error) {
        console.log(error)
    }
}