
function fetchData()
{const  url="http://10.10.19.133:3000/weather/London";
        try{
        let res=fetch(url)
        let d=res.json();
        console.log(data);        
    }
    catch(error){
        console.log("error!");
    }

}
