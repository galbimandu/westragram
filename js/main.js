const feed_like_btn = document.querySelector(".feed_like_btn");
const feed_comment_btn = document.querySelector(".feed_comment_btn");
const feed_dm_btn = document.querySelector(".feed_dm_btn");
const feed_save_btn = document.querySelector(".feed_save_btn");
const comment_like_btn = document.querySelectorAll(".comment_like_btn");
const comment_input = document.querySelector(".comment_input"); 
const comment_btn = document.querySelector(".comment_btn");
const comment_sec = document.querySelector(".feed_comment_sec");

let feed_like_img = document.querySelector(".feed_like_img");
let comment_like_img = document.querySelectorAll(".comment_like_img");
let feed_save_img = document.querySelector('.feed_save_img');

/*image replacer function for click events*/
function replace_img (image1, image2, element) {
    
    if(element.src.includes( image1 )) {
        element.src = image2;
    } else {
        element.src = image1;
    }

    element.classList.remove( "animate" );
    void element.offsetWidth; // trigger a DOM reflow
    element.classList.add( "animate" );
}

function create_comment( id, text ) {
    const comment = document.querySelector( ".comment" );
    const outline = comment.cloneNode( true );
    let outline_id = outline.querySelector( ".comment_id" ).querySelector( "span" );
    let outline_text = outline.querySelector( ".comment_text" ).querySelector( "span" );
    
    outline_id.innerText = id;
    outline_text.innerText = text;

    const outline_btn = outline.querySelector( ".comment_like_btn" );
    const outline_img = outline.querySelector( ".comment_like_img" );

    outline_btn.addEventListener("click", () => {
        replace_img( "logos/heart.png", "logos/redlike.png", outline_img );
    });

    return outline;
}

/*change the color of the like button and bookmark button of the feed*/
feed_like_btn.addEventListener( "click", () => {
    replace_img( "logos/heart.png", "logos/redlike.png", feed_like_img );
});

feed_save_btn.addEventListener("click", () => {
    replace_img( "logos/feedbookmark.png", "logos/blacksaved.png", feed_save_img );
});


comment_input.addEventListener("keyup", (e) => {
    if( comment_input.value.length > 0 ) {
        comment_btn.style.opacity = 1;     
        if( e.keyCode === 13 ) {
            comment_sec.appendChild( create_comment( "min", comment_input.value ));
            comment_input.value = null;
            comment_btn.style.opacity = 0.3;
        }
    } else {  
        comment_btn.style.opacity = 0.3;
    }  
});

comment_btn.addEventListener( "click", () => {
    if (comment_input.value.length > 0) {
        comment_sec.appendChild( create_comment( "min", comment_input.value ));
        comment_input.value = null;
        comment_btn.style.opacity = 0.3;
    }      
});