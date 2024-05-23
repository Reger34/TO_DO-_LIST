 let but=document.querySelector("#but")
 let input=document.querySelector(".search input")
 let list=document.querySelector(".list")

 but.addEventListener("click" , () => {
    if(input.value === ''){
       alert("WRITE SOMETHING IN THE INPUT BOX")
    }
    else{
       let li=document.createElement("li")
       li.innerHTML=input.value;
       list.appendChild(li);
       let span=document.createElement("span")
       span.innerHTML="\u00d7";
       li.appendChild(span);
    }
    input.value='';
    savedata();

})

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("clic"); 
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
       
        savedata();

    }
}, false)

let savedata = () => {
    localStorage.setItem("data",list.innerHTML);
}
let showdata = () => {
    list.innerHTML= localStorage.getItem("data");
}
showdata();





 

