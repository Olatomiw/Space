const header = document.querySelector(".destination-header")
const text = document.querySelector(".destination-text")
const dropdown = document.querySelectorAll(".drop-list")
const destinaton_img = document.querySelector(".destination-img")

fetch('./JS/data.json')
.then(res=>{
    return res.json()
})
.then(data=>{
    // Input for the destination
    const destinations = data.destinations
    // for destination
    destinations.forEach(destination => {
        console.log(destination.images.png)
        // comparing dropdown and desination
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", ()=>{
                if(destination.name === dropdown[i].innerText ){
                    console.log(destination.image)
                    header.innerHTML = destination.name
                    text.innerHTML = destination.description
                    destinaton_img.src = `.${destination.images.png}`
                    console.log(`.${destination.images.png}`)
                }
                else if(destination.name != dropdown[i].innerText){
                    console.log("match not found")
                }  
            })
            
        }
   });
})
.catch(error=> console.log(error))










