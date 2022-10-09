import { fetchFromAPI } from "../utils/fetchFromAPI"

export const getAllComments =(id) => async(dispatch)=>{
    try {
    const {items}=await fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
    console.log("comments",items)

    } catch (error) {
        console.log(error)
    }
}