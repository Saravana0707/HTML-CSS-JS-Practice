let daye=document.getElementById('day');
let houre=document.getElementById('hour');
let minutee=document.getElementById('minute');
let secondee=document.getElementById('second');

// const newYearTime=new Date("Jan 1,2023 00:00:00").getTime();

let newYearTime;

function getDate(){
    let userdate=document.getElementById('userDate').value;
    newYearTime=new Date(userdate).getTime()
    console.log(newYearTime);
    updatecounter()
    }



function updatecounter(){

    const now =new Date().getTime();
    const gap= newYearTime - now;
    

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d= Math.floor(gap/day);
    const h =Math.floor((gap%day)/hour);
    const m =Math.floor((gap%hour)/minute);
    const s =Math.floor((gap%minute)/second);

    daye.innerHTML=d;
    houre.innerHTML=h,
    minutee.innerHTML=m;
    secondee.innerHTML=s;

    setTimeout(updatecounter,1000);
}
