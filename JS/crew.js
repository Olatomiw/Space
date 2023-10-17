const crew_section = document.querySelector(".crew")
fetch('./JS/data.json')
.then(res=>{
   return res.json()
})
.then(data=>{
    console.log(data.crew)
    const crew = data.crew
    console.log(crew.length)
    crew.forEach(member => {
        // crew_section.innerHTML+= `
        // <div class="member">
        //             <section class="crew-text">
        //                 <h2>${member.role}</h2>
        //                 <h1>${member.name}</h1>
        //                 <p>
        //                    ${member.bio}
        //                 </p>
        //             </section>
        //             <section class="crew-img">
        //                 <img src=${member.images.png} alt="">
        //             </section>
        //         </div>
        // `
    });
})


$(document).ready(function(){
    $(".crew").owlCarousel({
        margin: 10,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: true,
            },
            600:{
                items: 1,
                nav: false,
            },
            1000:{
                items: 1,
                nav: false,
            }
        }

    })
});