document.querySelector(".sbmt").addEventListener("click", () => {
    document.querySelector(".one").classList.toggle("hidden");
    document.querySelector(".two").classList.toggle("hidden");
})

for(let i=0; i<document.querySelectorAll(".rating-btn").length; i++){
    document.querySelectorAll(".rating-btn")[i].addEventListener("click", () => {
        let val = i + 1;
        document.querySelector(".add-text").textContent = val;
    })
}

