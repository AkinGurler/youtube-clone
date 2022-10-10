import { fetchFromAPI } from "../utils/fetchFromAPI"

export const getAllComments =(id) => async(dispatch)=>{
    try {
    const {items}=await fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
    console.log("comments",items)

    dispatch({
        type:"GET_ALL_COMMENTS",payload:items
    })


    } catch (error) {
        console.log(error)
    }
}