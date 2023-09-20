import md5 from 'md5';


export const API_BASE_URL = "https://gateway.marvel.com/v1/public/"
const API_PUBLIC_KEY = "822e787f5edc437d6e9c4a374c7984a9";
const API_PRIVATE_KEY = "7001d4bc6fddc0558088957bbb97a17afa5df478"

const getTimeStamp = () => Date.now().toString()

const timeStamp = getTimeStamp()

const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const hash = getHash(timeStamp)

export const qurey = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`
 
export const handleResponse = async <T>(response: Response) => {
    const data = await response.json()
    return data.data as T;

}







