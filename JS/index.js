const header = document.querySelector(".destination-header")
const text = document.querySelector(".destination-text")
const dropdown = document.querySelectorAll(".drop-list")
const destinaton_img = document.querySelector(".destination-img")
const destination_text = document.querySelector(".distance p")
const travel = document.querySelector(".travel p")

// // dropdown.forEach(list=>{
//     list.addEventListener("click", ()=>{
//         list.classList.add("active")
//         console.log(list)
//     })
// })
console.log(travel)
fetch('./JS/data.json')
.then(res=>{
    return res.json()
})
.then(data=>{
    



    // Input for the destination
    const destinations = data.destinations
    const crew = data.crew;
    console.log(destinations)
    // for destination
    destinations.forEach(destination => {
        console.log(destination.images.png)
        // comparing dropdown and desination
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", ()=>{
                if(destination.name === dropdown[i].innerText ){
                    dropdown[i].className= "drop-list" + "active"
                    console.log(dropdown[i].className)
                    header.innerHTML = destination.name
                    text.innerHTML = destination.description
                    destinaton_img.src = `.${destination.images.png}`
                    destination_text.innerHTML = destination.distance.toUpperCase()
                    travel.innerHTML = destination.travel.toUpperCase()

                }
                else{
                    return
                }  
            })
            
        }
   });
})
.catch(error=> console.log(error))










