let base=5853134;

function appendLi(elem, count) {
  str = '<ul>'
  for (let index = 0; index < count; index++) {
    str += `<li> <button>page${index}</button>
  </li>`;
  }
  str += "</ul>";
  elem.insertAdjacentHTML('afterbegin', str)
  //  elem.innerHTML=str;
}



// Функция динамической генерации таблицы
function generateTable(x, y, div) {
  const table = document.createElement("table");

  const tr = document.createElement("tr");
  for (let index = 0; index < x; index++) {

    const th = document.createElement("th");
    th.style = "border-style:inset"
    th.textContent = `Column ${index}`
    tr.appendChild(th)
    table.appendChild(tr)

  }
  for (let index1 = 0; index1 < y; index1++) {
    const tr = document.createElement("tr");


    for (let index = 0; index < x; index++) {
      const td = document.createElement("td");
      td.textContent = `val ${index}-${index1}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }



  div.appendChild(table)



}




const id_Menu = document.querySelector("#id_Menu");
const menu = document.querySelectorAll('menu');


//________________________ Menu
id_Menu.addEventListener("change", function () {
  menu.forEach(m => m.innerHTML = "")

  menu.forEach(m => appendLi(m, this.value))
}

);

menu.forEach(m => appendLi(m, id_Menu.value))



const id3 = document.querySelector('#maindiv3');


const inputX = document.querySelector("#id_X_table");
const inputY = document.querySelector("#id_Y_table");

generateTable(inputX.value, inputY.value, id3)

inputX.addEventListener("change", function () {
  id3.innerHTML = "";
  const inputY = document.querySelector("#id_Y_table");
  generateTable(this.value, inputY.value, id3)
})

inputY.addEventListener("change", function () {
  id3.innerHTML = "";
  const inputY = document.querySelector("#id_X_table");
  generateTable(inputX.value, this.value, id3)
})





// ------------------------------pOPup

const modal = document.querySelector("#modal1");

document.querySelector("#id_popup1").addEventListener("click", () => {

  modal.style = "visibility: inherit";
})
document.querySelector("#modal1close").addEventListener("click", () => {

  modal.style = "visibility: hidden";
})
// -----------------------------------------

const pict = document.querySelector("#pictures");
const pictCount = document.querySelector("#id_picures")

const rangeXpict=document.querySelector("#rangeXpict")
const rangeYpict=document.querySelector("#rangeYpict")
const id_Count=document.querySelector("#id_Count")
// const left=document.querySelector("#left")
// const right=document.querySelector("#right")

// left.addEventListener("click",()=>{ 
//   pict.innerHTML=""
//   generatePicture(--base,id_Count.value,rangeXpict.value,rangeYpict.value,pict);})


//   right.addEventListener("click",()=>{ 
//     pict.innerHTML=""
//     generatePicture(++base,id_Count.value,rangeXpict.value,rangeYpict.value,pict);})






// ----------------меняем размеры загружаемых фото----------------------
rangeXpict.nextElementSibling.innerHTML=`${rangeXpict.value} Size X`;
rangeYpict.nextElementSibling.innerHTML=`${rangeYpict.value} Size Y`;

rangeXpict.addEventListener("change",function(){

  pict.innerHTML=""
 this.nextElementSibling.innerHTML=`${this.value} Size X`;
 generatePicture(base,id_Count.value,this.value,rangeYpict.value,pict);

})

rangeYpict.addEventListener("change",function(){

  pict.innerHTML=""
 this.nextElementSibling.innerHTML=`${this.value} Size Y`;
 generatePicture(base,id_Count.value,rangeXpict.value,this.value,pict);

})


id_Count.addEventListener("change",function(){
  pict.innerHTML=""
  generatePicture(base,this.value,rangeXpict.value,rangeYpict.value,pict);

})



// -------------------------------меняем количество колонок

pictCount.addEventListener("change",function(){
  console.log(this.value);
  pict.style=`grid-template-columns: repeat(${this.value},auto)`
  })


//pict.appendChild(generatePicture(5853134, 5, 200, 440))
 generatePicture(base, id_Count.value, 200, 200,pict); 

 ;   


//-------------------------------ЗАГРУЗКА ФОТО

 function generatePicture(pos, count, width, height,div) {
 
let strGet=(pos,index,h,w)=>`https://images.pexels.com/photos/${pos + index}/pexels-photo-${pos + index}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&dpr=1`

  for (let index = 0 ; index < count; index++) {
fetch(strGet(pos,index,height,width))
.then(q=>{
if(q.ok)
{
const elemDiv = document.createElement('div');
elemDiv.className="class1";
    const elemA = document.createElement('a');
    elemA.className="class1"
    const elemImg = document.createElement('img');
elemA.href=elemImg.src=q.url;
elemDiv.appendChild(elemA);
elemA.appendChild(elemImg);
// fragment.push(elemDiv)
div.appendChild(elemDiv)
}
})
    
  }
// return fragment;
 }

