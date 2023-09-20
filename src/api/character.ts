 import { CharacterDataWrapper } from "@/types/marvel";
import { API_BASE_URL,qurey,handleResponse } from "./api";

export const getCharecter = async (): Promise<CharacterDataWrapper> => {
  
    const URL = `${API_BASE_URL}/characters?${qurey}`
    const res = await fetch(URL)
    console.log(res);
    
    return handleResponse<CharacterDataWrapper>(res)



}


export const getCharecterDetalis = async (id: string): Promise<CharacterDataWrapper> => {
const URL = `${API_BASE_URL}/characters/${id}?${qurey}`
const res = await fetch(URL)
return handleResponse<CharacterDataWrapper>(res)
}




export const searchCharater = async (searchQuery: string | null): Promise<CharacterDataWrapper> => {
const URL = `${API_BASE_URL}/characters?nameStartsWith=${searchQuery}&${qurey}`
const res = await fetch(URL)
return handleResponse<CharacterDataWrapper>(res)
}

