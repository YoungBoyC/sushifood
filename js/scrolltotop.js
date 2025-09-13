const scrollbtn=document.getElementById("scrolltotopbtn");

window.addEventListener("scroll",() =>{
    if(window.scrollY>300){
        scrollbtn.classList.add("show");
    }else{
        scrollbtn.classList.remove("show");
    }
})

document.getElementById("scrolltotopbtn").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})