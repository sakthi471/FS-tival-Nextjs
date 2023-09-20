
import { comic } from "@/types/comics";
import { API_BASE_URL, qurey, handleResponse } from "./api";


interface  comicsWrapper{
    results:comic[]
}

export const getComics = async () => {
    const URL = `${API_BASE_URL}/comics?${qurey}`
    const res = await fetch(URL)
    return handleResponse <comicsWrapper> (res)
}

export const getComicsDetails = async(id:string) =>{
          
    const URL = `${API_BASE_URL}/comics/${id}?${qurey}`
    const res = await fetch(URL)
    return handleResponse <comicsWrapper> (res)
}