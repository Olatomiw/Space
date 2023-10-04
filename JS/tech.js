const latest_tech = document.querySelector('.tech')
fetch("./JS/data.json")
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.technology)
    const new_tech = data.technology
    new_tech.forEach(technology => {
        latest_tech.innerHTML+=`
        <section class="text">
                    <img src="${technology.images.portrait}" alt="">
                    <h1>${technology.name}</h1>
                    <p class="description">
                        ${technology.description}
                    </p>
                </section>
        `
    });
})