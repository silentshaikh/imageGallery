let myInput = document.getElementById("input");
let myBtn = document.querySelectorAll(".btn");
let myImage = document.querySelectorAll(".container img");
myInput.addEventListener("input",() => {
    let inpValue = myInput.value.toLowerCase();
    myImage.forEach((element) => {
        let mySerach = element.getAttribute("data-search");
        if(mySerach.includes(inpValue)){
            element.style.display="block";
        }else{
            element.style.display ="none";
        }
    })
});
let popUp = document.querySelector(".popup");
popUp.addEventListener("click",() => {
    popUp.style.display ="none";
});
let popImg = document.querySelector(".popup img");
myImage.forEach((element) => {
    element.addEventListener("click", () => {
    let getSrc = element.getAttribute("src");
    popUp.style.display="flex";
    popImg.src = getSrc;
    });
});
Array.from(myBtn).forEach((element) => {
    element.addEventListener("click",() => {
        let btnSearch = element.getAttribute("data-category");
        myImage.forEach((e) => {
            let imgSearch = e.getAttribute("data-search");
        if(imgSearch.includes(btnSearch)){
            e.style.display = "block";
        }else{
            e.style.display = "none";
        }
        })
    })
});
let restBtn = document.querySelector(".reset");
restBtn.addEventListener("click",() => {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
});
let btnToggle = document.querySelector(".menu i");
let navBar = document.querySelector(".navbar");
btnToggle.addEventListener("click",() => {
    navBar.classList.toggle("active");
    btnToggle.style.transform = "rotate(180deg)";
    btnToggle.classList.toggle("fa-xmark");
});
window.onscroll = () => {
    btnToggle.classList.remove("fa-xmark");
    navBar.classList.remove("active");
}

