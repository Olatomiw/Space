# Project Overview 
    A space travel Frontend mentor challenge

## Tools used 
- Html
- Css
- Js
- owl carousel

## Data Source
    Data.json provided by frontend mentor

## Design Approach
    In creating this simple web app. A JSON Data was provided by Frontend mentor.
    So most of the Content on the web site are from the JSON data. 
    I used "fetch" to get access to the JSON data and i destructured it according to my needs.

    For the slider on the crew page. I used Owl carousel to implement it.

## Fetching and Data Processing
    A code snnipet of the fetch and data processing
>    "fetch("./JS/data.json")
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
    .catch(error=> console.log(error))

## Overall

    i really enjoyed creating this web app because it gave me a better understanding of how to use JSON data on my web app
