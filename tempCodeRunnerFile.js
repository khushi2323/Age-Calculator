const today=new Date();
const birthday=document.getElementById("day").value;
const birthmonth=document.getElementById("month").value;
const birthyear=document.getElementById("year").value;
const submitbtn=document.getElementById("submit-btn");
const newStr=`${birthyear}-${birthmonth}-${birthday}`;

const birthdate = new Date(newStr);
console.log(birthdate);
submitbtn.addEventListener('click',()=>{console.log(birthdate);});
