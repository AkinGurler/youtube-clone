
import { fetchFromAPI } from "../utils/fetchFromAPI"

export const getChannelDetails = id => async (dispatch) => {
    try {
        const detailData = await fetchFromAPI(`channels?part=snippet&id=${id}`)
        const videoData= await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        const payload={
            details:detailData.items[0],
            videos:videoData.items
        }
        
        
        dispatch({
            type: "GET_CHANNEL", payload:payload
        })
    } catch (error) {
        console.log(error)
    }
}


