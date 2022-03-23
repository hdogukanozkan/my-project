const menu_icon = document.querySelector(".menu-icon");
const menu_bar = document.querySelector(".right");
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


// Hedef saatim:
var countDownDate = new Date("May 5, 2022 18:00:00").getTime();

// Her saniyede kodun güncellenmesi
var x = setInterval(function() {
	
  // Bugünün zamanını almak
  var now = new Date().getTime();
  // kalan zaman = hedef - şuan;
  var distance = countDownDate - now;
    
  // BU kodu gram anlamadım
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // ekrana yazdırma
  document.getElementById("gun").innerHTML = days + "d ";
  document.getElementById("saat").innerHTML = hours + "h ";
  document.getElementById("dakika").innerHTML = minutes + "m ";
  document.getElementById("saniye").innerHTML = seconds + "s ";
    
  // Zaman dolduğun da yazacak. 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("box-container").innerHTML = "EXPIRED";
  }
}, 0);
