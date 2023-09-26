var tch=document.getElementById("tch");
var tha=document.getElementById("tha");
var thn=document.getElementById("thn");
var choice=document.getElementById("choice");
tch.addEventListener("keyup",()=>{
    console.log(Number(tch.value));
    console.log(Number(tha.value));
    calculate();
})
tch.addEventListener("change",()=>{
    console.log(Number(tch.value));
    console.log(Number(tha.value));
    calculate();
})
tha.addEventListener("keyup",()=>{
    console.log(tha.value);
    calculate();
})
tha.addEventListener("change",()=>{
    console.log(tha.value);
    calculate();
})
choice.addEventListener("change",()=>{
    console.log(choice.value);
    calculate();
});
function calculate()
{
    var currAtd=Number(tha.value)/Number(tch.value)*100;
    var x=(Number(choice.value)*(Number(tch.value))-100*Number(tha.value))/(100-Number(choice.value));
    thn.textContent=(currAtd>Number(choice.value))?`Already ${choice.value}% achieved`:x.toFixed(2) +" hrs";
}
