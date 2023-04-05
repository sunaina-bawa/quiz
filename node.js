const axios=require('axios'); 

async function fetchaddData(){
    try {
        //axios return data 
        let {data}=await axios.get("https://opentdb.com/api.php?amount=20&category=22&difficulty=hard&type=multiple")
       // let {results}=await res.json();
       let {results}=data;
       for(var i=0; i<results.length; i++)
       {
         await axios.post("http://localhost:3088/results",results[i])

       }
    } catch (error) {
        console.log(error);
    }
}

fetchaddData();