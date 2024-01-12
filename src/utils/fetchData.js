
export const exerciseOptions = {
    method: 'GET',
    //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {
        limit: '50',
      },
    headers: {
      'X-RapidAPI-Key': '77c9c5a8e6msh9a62f25e0909b7ep136694jsn26e16cb6e39e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    //url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    
    headers: {
      'X-RapidAPI-Key': '77c9c5a8e6msh9a62f25e0909b7ep136694jsn26e16cb6e39e',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data= await response.json();

    return data;
}