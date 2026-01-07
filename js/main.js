const btn_Lessons_ID =document.getElementById("btn_Lessons");
const btn_homework_ID =document.getElementById("btn_homework");
const Lessons_ID =document.getElementById("Lessons");
const homework_ID =document.getElementById("homework");



btn_Lessons_ID.addEventListener('click',function(){
    Lessons_ID.style.display='block';
    homework_ID.style.display='none';
})
btn_homework_ID.addEventListener('click',function(){
    Lessons_ID.style.display='none';
    homework_ID.style.display='block';
})
