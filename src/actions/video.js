
import { fetchFromAPI } from "../utils/fetchFromAPI"



export const getVideosByCategory = category => async (dispatch) =>{
    try {
        const videos=await fetchFromAPI(`search?part=snippet&q=${category}`)
        dispatch({
            type:"GET_VIDEOS_BY_CATEGORY",payload:videos.items
        })
       
    } catch (error) {
        console.log(error)
        }
        
    }



export const getVideoDetail = id =>async (dispatch) =>{
    try {
        const data= await fetchFromAPI(`videos?part=snippet&id=${id}`)
        
        const videoDetail=data.items[0]
        dispatch({
            type:"VIDEO_DETAIL",payload:videoDetail
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const getSuggestedVideos = id =>async(dispatch) =>{
    try {
        const data=await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        const videos=data.items
        console.log(videos)
        dispatch({
            type:"SUGGESTED_VIDEOS",payload:videos
        })
    } catch (error) {
        console.log(error)
    }


}