
import { fetchFromAPI } from "../utils/fetchFromAPI"

export const getChannelDetails = id => async (dispatch) => {
    try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)
        const channelDetail=data.items[0]
        
        
        dispatch({
            type: "GET_CHANNEL_DETAILS", payload:channelDetail
        })
    } catch (error) {
        console.log(error)
    }
}


export const getChannelVideos=id=>async (dispatch)=>{
    try {
        const data= await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        dispatch({
            type: "GET_CHANNEL_VIDEOS", payload:data.items
        })
        
    } catch (error) {
       console.log(error) 
    }
}