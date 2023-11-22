
let dayName = new Date();

    document.querySelector(".banner-close").addEventListener("click", function(){
    this.closest(".banner").style.display = "none";
});

switch(dayName){
    case 4,5,6,0:
        document.getElementById(".banner").style.display = "none";
}