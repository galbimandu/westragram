let instagram_logo = document.querySelector(".logo1");

let goto_home = document.querySelector("#goto_home");
let goto_dm = document.querySelector("#goto_dm");
let goto_navigation = document.querySelector("#goto_navigation");
let goto_likes = document.querySelector("#goto_likes");
let goto_profile = document.querySelector("#goto_profile");




let feed_like_btn = document.querySelectorAll(".feed_like_btn");
let feed_like_img = document.querySelectorAll(".feed_like_img");
let feed_comment_btn = document.querySelectorAll(".feed_comment_btn");
let feed_dm_btn = document.querySelectorAll(".feed_dm_btn");
let feed_save_btn = document.querySelectorAll(".feed_save_btn");
let feed_save_img =document.querySelectorAll('.feed_save_img');

let comment_like_btn = document.querySelectorAll(".comment_like_btn");
let comment_like_img = document.querySelectorAll(".comment_like_img");

/*add elements that have the pointer cursor when hovered over*/
let parts = [comment_like_btn, feed_comment_btn,feed_dm_btn,feed_save_btn,instagram_logo,goto_home,goto_likes,goto_dm,goto_navigation,goto_profile,feed_like_btn];


/*changes the hover cursor for elements in the parts array*/
function pointer_cursor(elements){
    elements.forEach(element => {
        if(element.length>1){
            element.forEach(elem =>{
                elem.style.cursor = "pointer";
            });
        }else{
            element.style.cursor = "pointer";
        }
    });
}



pointer_cursor(parts);


/*image replacer function for click events*/
function replace_img(image1, image2, element){
    if(element.src.includes(image1)){
        element.src = image2;
    }else{
        element.src = image1;
    }

    element.classList.remove("animate");
    void element.offsetWidth; // trigger a DOM reflow
    element.classList.add("animate");
}

    /*change the color of the like button and bookmark button of the feed*/
for(let i = 0; i<feed_like_btn.length;i++){
    feed_like_btn[i].addEventListener("click",function(){
        replace_img("logos/heart.png","logos/redlike.png",feed_like_img[i]);
    });
    feed_save_btn[i].addEventListener("click",function(){
        replace_img("logos/feedbookmark.png","logos/blacksaved.png",feed_save_img[i]);
    });
}

/*change the color of the like button in the feed comment*/
for(let i=0;i<comment_like_btn.length;i++){
    comment_like_btn[i].addEventListener("click",function(){
        replace_img("logos/heart.png","logos/redlike.png",comment_like_img[i]);
    });
}

function create_comment(id,text){
    let comment = document.querySelector(".comment");
    let outline = comment.cloneNode(true);
    let outline_id = outline.querySelector(".comment_id").querySelector("span");

    let outline_text = outline.querySelector(".comment_text").querySelector("span");
    outline_id.innerText = id;

    outline_text.innerText = text;

    let outline_btn = outline.querySelector(".comment_like_btn");
    let outline_img = outline.querySelector(".comment_like_img");

    outline_btn.addEventListener("click",function(){
        replace_img("logos/heart.png","logos/redlike.png",outline_img);
    });

    return outline;
}

const comment_input = document.querySelectorAll(".comment_input");
const comment_btn = document.querySelectorAll(".comment_btn");
const comment_sec = document.querySelectorAll(".feed_comment_sec");
for(let i=0;i<comment_input.length;i++){
    comment_input[i].addEventListener("keyup", function(e){
        if(comment_input[i].value.length>0){
            comment_btn[i].style.opacity = 1;
            if(e.keyCode === 13){
                comment_sec[i].appendChild(create_comment("min", comment_input[i].value));
                comment_input[i].value = null;
                comment_btn[i].style.opacity = 0.3;
            }
        }else{
            comment_btn[i].style.opacity = 0.3;
        }
        
    });
    comment_btn[i].addEventListener("click", function(){
        if(comment_input[i].value.length>0){
            comment_sec[i].appendChild(create_comment("min", comment_input[i].value));
            comment_input[i].value = null;
        }
        
    });
}

// let tester = create_comment("min","does this work?");

// const comment_sec = document.querySelector(".feed_comment_sec");

// comment_sec.appendChild(tester);
function search_focus(){
    
}