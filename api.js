import axios from "axios"
const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN= import.meta.env.VITE_TMDB_TOKEN

console.log(TMDB_TOKEN) 
// ! Not sure what is that code is doing exactly
const headers= {
    Authorization: "bearer "+ TMDB_TOKEN,

}
 export  const fetchDataApi= async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{
        headers,
        params
})
    return data
    }
catch(err){
console.log(err)
    }
}


// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// const headers = {
//     Authorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async (url, params) => {
//     try {
//         const { data } = await axios.get(BASE_URL + url, {
//             headers,
//             params,
//         });
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };