const instagram_logo = document.querySelector(".logo1");

const goto_home = document.querySelector("#goto_home");
const goto_dm = document.querySelector("#goto_dm");
const goto_navigation = document.querySelector("#goto_navigation");
const goto_likes = document.querySelector("#goto_likes");
const goto_profile = document.querySelector("#goto_profile");


const comment_like_btn = document.querySelector(".comment_like_btn");
const comment_like_img = document.querySelector(".comment_like_img");

const feed_like_btn = document.querySelector("#feed_like_btn");
const feed_like_img = document.querySelector("#feed_like_img");
const feed_comment_btn = document.querySelector("#feed_comment_btn");
const feed_dm_btn = document.querySelector("#feed_dm_btn");
const feed_save_btn = document.querySelector("#feed_save_btn");
const feed_save_img =document.querySelector('#feed_save_img');


function pointer_cursor(elements){
    elements.forEach(element => {
        element.style.cursor = "pointer";
    });
    
}

const parts = [feed_comment_btn,feed_dm_btn,feed_save_btn,instagram_logo,goto_home,goto_likes,goto_dm,goto_navigation,goto_profile,comment_like_btn,feed_like_btn];

pointer_cursor(parts);



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

comment_like_btn.addEventListener("click",function(){
    replace_img("logos/heart.png","logos/redlike.png",comment_like_img);
});
feed_like_btn.addEventListener("click",function(){
    replace_img("logos/heart.png","logos/redlike.png",feed_like_img);
});
feed_save_btn.addEventListener("click",function(){
    replace_img("logos/feedbookmark.png","logos/blacksaved.png",feed_save_img);
});
