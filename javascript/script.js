function clicking(){
var  DD =parseFloat(document.getElementById("bd").value)
var MM =parseFloat(document.getElementById("bd").value)
var  YY=parseFloat(document.getElementById("bd").value)
var  CC= (YY-1)/100+1;
var Dayoftheweek (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7
document.getElementById("bd").innerHTML=Math.floor(Dayoftheweek);
var name=(birthDay,gender)=>{
var male=['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame'];
var female=['akosua','adwoa','abenaa','akua','yaa','afua','ama'];
var day =newDate(Dayoftheweek).getDay();
if (gender.toLowercase()==='male')return male[day];
if  (gender.toLowercase()==='female')return feamale[day];
}
console.log(name('1994-11-30','male'));
}
