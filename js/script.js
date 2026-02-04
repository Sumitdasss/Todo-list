let inputOne=document.getElementById("inputOne")
let inputTwo=document.getElementById("inputTwo")
let addButton=document.getElementById("addButton")
let mainDivone=document.getElementById("mainDivone")
let todoLIstOne=document.getElementById("todoLIstOne")
let errorOne=document.getElementById("errorOne")
let textOne=document.getElementById("textOne")
let textTwo=document.getElementById("textTwo")
let mainDivTwo=document.getElementById("mainDivTwo")
let buttonOne=document.getElementById("buttonOne")
let buttonTwo=document.getElementById("buttonTwo")


addButton.addEventListener("click",()=>{

  
  if(inputOne.value === "" || inputTwo.value ===""){
    errorOne.style.display="block"
    setTimeout(()=>{
         errorOne.style.display="none"
    },1500)

  }

  else{

let newItem=document.createElement("div")
newItem.className =`bg-black/25 w-full p-5 mt-4 flex justify-between items-center `
newItem.innerHTML=`

 <div class="">
<h4 id="textOne" class="text-[28px] text-green-400 font-semibold">${inputOne.value}</h4>
<h4 id="textTwo" class="text-[18px] text-[#B7B7B7] font-semibold">${inputTwo.value}</h4>
</div>

<div class=" text-[20px] ">
    <i class="fa-solid fa-trash-can mr-5  text-[#B7B7B7]" onclick="deleteItem(this)"></i>
    <i class="fa-solid fa-check text-green-400" onclick="moveToComplete(this)"></i>
</div>

`
mainDivone.appendChild(newItem)

  }
})
function deleteItem (element){
element.closest('.bg-black\\/25').remove();
}

function moveToComplete(element) {
    
    let itemToMove = element.closest('.bg-black\\/25');
    element.remove(); 
    mainDivTwo.appendChild(itemToMove);
}

buttonOne.addEventListener("click", () => {
    mainDivTwo.classList.add("hidden");  
    mainDivone.classList.remove("hidden"); 
});

buttonTwo.addEventListener("click", () => {
    mainDivTwo.classList.remove("hidden");
    mainDivone.classList.add("hidden");
});