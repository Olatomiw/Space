const crew_section = document.querySelector(".crew")
fetch('./JS/data.json')
.then(res=>{
   return res.json()
})
.then(data=>{
    console.log(data.crew)
    const crew = data.crew
    crew.forEach(member => {
        crew_section.innerHTML+= `
        <section class="member">
                    <img src=${member.images.png} alt="">
                    <h2>${member.name}</h2>
                    <h4 class="role">${member.role}</h4>
                    <p class="bio">${member.bio}</p>
        </section>
        `
    });
})