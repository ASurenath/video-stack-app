import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonStructure"

/////__________________Videos____________________//////
//Video add
export const addVideoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}

//get all videos
export const getVideosApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}

//get single video
export const getVideoApi=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/videos/${id}`,{})
}

//delete video
export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`,{})
}
/////////_______________categories_________________/////
//category add
export const addCategApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/categories`,bodyData)
}

//get all categories
export const getCategsApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,{})
}

//get single category
export const getCategApi=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/categories/${id}`,{})
}

//delete categ
export const deleteCategApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${id}`,{})
}
//////////__________________videos in categories_______________//////////////
//category Update (adding video)
export const updateCategApi=async(id,bodyData)=>{
    return await commonApi('PUT',`${BASE_URL}/categories/${id}`,bodyData)
}
///delete video
export const deleteCategVideoApi=async(idc,idv)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${idc}/videos/${idv}`,{})
}

////////_______________History_________________////////////////
//History add
export const addHistoryApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/histories`,bodyData)
}
//get Histories
export const getHistoriesApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/histories`,{})
}

//delete History
export const deleteHistoryApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/histories/${id}`,{})
}
