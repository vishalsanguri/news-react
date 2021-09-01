function fetchdata(){
    return fetch("https://livescore6.p.rapidapi.com/news/list?category=soccer", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "livescore6.p.rapidapi.com",
            "x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"
        }
    }).then(res=>res.json())
}





const wrapPromise=(promise)=>{
    let status="pending";
    let result;
    let suspender=promise.then(res=>{
            status="sucess"
            result=res
        }).catch(err=>{
            status="error"
            result=err
        })
    return {
        read(){
            if(status==="pending"){
                throw suspender
            }
            else if(status==="error"){
                throw  result
            }
            return (result)
        }
    }
}
export const fetchDatasoccer=()=>{
    const userPromise=fetchdata()
    return{
        user:wrapPromise(userPromise)
    }
}