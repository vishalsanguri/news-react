const root= document.getElementById("root")
function fetchdata(){
    return fetch("https://livescore6.p.rapidapi.com/news/list?category=basketball", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "livescore6.p.rapidapi.com",
            "x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"
        }
    })
    .then(res=>{
        if(!res.ok){
            root.innerHTML=`<div>error occured</div>`
        }else if(res.ok){return res.json()}})
    .catch(err=>{
        console.log("vishal error :" + err);})
}
const wrapPromise=(promise)=>{
    let status="pending";
    let result;
    let suspender=promise.then(res=>{
            status="sucess"
            result=res
        })
    return {
        read(){
            if(status==="pending"){
                throw suspender
            }
            return (result)
        }
    }
}

export const fetchData=()=>{
    const userPromise=fetchdata()
    return{
        user:wrapPromise(userPromise)
    }
}