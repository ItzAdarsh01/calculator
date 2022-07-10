function show(v){
    document.getElementById("res").value+=v;
}
function equals(){
    let x=document.getElementById("res").value;
    let y=eval(x);
    document.getElementById("res").value=y;

}
function clr()
{
    document.getElementById("res").value="";
}