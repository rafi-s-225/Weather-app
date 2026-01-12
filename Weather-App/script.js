// http://api.weatherapi.com/v1/current.json?key=9d5ae3d28c0f4c97875162901261201&q=kadapa&aqi=no?
let target="mumbai";
const tempField=document.querySelector(".temp");
const locField=document.querySelector(".loc_and_time p");
const dateField=document.querySelector(".loc_and_time span");
const weatherField=document.querySelector(".condition p");
const searchField=document.querySelector(".search_field");
const form = document.querySelector('form');
const conditionField=document.querySelector('.condition')

form.addEventListener('submit',searchForLocation)


const fetchResults= async (target)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=9d5ae3d28c0f4c97875162901261201&q=${target}&aqi=no?`
    const res=await fetch(url)
    const data= await res.json()
    console.log(data)
    let locationName=data.location.name;
    let time=data.location.localtime;
    let temp=data.current.temp_c;
    let condition=data.current.condition.text
    updateDetails(temp,locationName,time,condition)

}
function updateDetails(temp,locationName,time,condition){
    tempField.innerText=temp;
    locField.innerText=locationName;
    dateField.innerText=time
    conditionField.innerText=condition
}

function searchForLocation(e){
    e.preventDefault()
    target=searchField.value 
    fetchResults(target)
}
fetchResults(target)