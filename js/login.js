const input_wrap =  document.querySelector(".test");

input_wrap.addEventListener("keyup",function(){
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;
    const btn = document.querySelector("#login_button");
    
    if(id.length>1 && pw.length>1){
        return btn.style.backgroundColor = '#0095F6';
     } else {
        return btn.style.backgroundColor = '#BEDFFD';
     }
         
     
});

const login = document.querySelector("#login_button");
const forgot_pw = document.querySelector("#forgot_pw");

function pointer_cursor(element){
   element.style.cursor = "pointer";
}

pointer_cursor(login);
pointer_cursor(forgot_pw);







