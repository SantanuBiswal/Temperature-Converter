var cel=document.getElementById("cels");
var far=document.getElementById("far");

cel.addEventListener("input",function(){
    let c=this.value;
    let f=(c*9/5)+32;

    far.value=f;
}
)
far.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)*5/9;

    cel.value=c;
}
)
function refresh(){
// let ref=document.getElementById("ref");
// ref.addEventListener("click",()=>{
//     window.location.reload();
    document.getElementById("cels").value="0";
    document.getElementById("far").value="32";
    
}