var profile = document.querySelector(".profile");
var sns_btn_wrap = document.querySelector(".sns_btn_wrap");
var flag = true;

function profile_click() {
    // flag = true;
    if(flag){
        sns_btn_wrap.classList.add("on");
        flag = false;
    }else{
        flag = true;
        sns_btn_wrap.classList.remove("on");
    }
//    
}

profile.addEventListener("click", profile_click);