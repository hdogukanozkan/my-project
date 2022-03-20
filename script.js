const menu_icon = document.querySelector(".menu-icon");
const menu_bar = document.querySelector(".menu-bar");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


/* --------------------------------------------------   */
const activesAll = document.querySelectorAll(".actives");
const circles = document.querySelectorAll(".circle");
const bar = document.querySelector(".container-box-bar");



menu_icon.addEventListener("click", () => {
    menu_bar.classList.toggle("active");
})


const posts = document.querySelectorAll(".post");

let i = 0;

posts.forEach((post, index) => {
    post.addEventListener("click", () => {
        i = index;
        remove();
        post.classList.add("active");
        full();
        console.log(i + "   " + posts.length);
    })
})

function remove() {
    posts.forEach(posts => {
        posts.classList.remove("active");
    })
}

prev.addEventListener("click", () => {
    i = i - 1;
    full();
    posts.forEach((post, index) => {
        if (i === index) {
            remove();
            post.classList.add("active")
        }
    })
})
next.addEventListener("click", () => {
    i = i + 1;
    full();

    posts.forEach((post, index) => {
        if (i === index) {
            remove();
            post.classList.add("active")
        }
    })

})


function full() {
    /*----------------------------------------------------------------------------------*/
    circles.forEach((circle, index) => {
        if (index < (i + 1)) {
            circle.classList.add("actives");
        }
        else {
            circle.classList.remove("actives")
        }
    })


    bar.style.width = (i) / (circles.length - 1) * 100 + "%";
    /*  ----------------------------------------------------------------------------------- */

    if (i === (posts.length - 1)) {
        i = 4;
        next.disabled = true;
        prev.disabled = false;
    }

    else if (i === 0) {
        prev.disabled = true;
        next.disabled = false;
    }

    else {
        next.disabled = false;
        prev.disabled = false;
    }
}


