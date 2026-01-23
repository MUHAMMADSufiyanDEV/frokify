function getingdata(params) {
    let searchintent = document.querySelector("#search2")
    fetching(searchintent.value)
    }


 async function fetching(usersearch) {
        let apiurl = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${usersearch}`)
        let data = await apiurl.json()  
        htmlui(data)
        console.log(data)

 }


        const htmlui = (data) => {

            const {data:{recipes},} = data;

            let HTMLUI = recipes.map( (recipie) => {

                return `<div id="food-card" data-recipe-id=${recipie.id}>
                <img src=${recipie.image_url} alt="food image">
                <div id="food-details">
                    <h2>${recipie.title}</h2>
                    <p>${recipie.publisher}</p>
                </div>
                </div>`

            })

               document.querySelector("#left-sidebar").innerHTML = HTMLUI.join("")

          }


          const particularItemDetails = async (elem) => {

            console.log(elem);
            
           
            

          }



          document.addEventListener("click",(e) => {
            if (e.target.classlist.particularItemDetails("food-card")) {
                particularItemDetails(e.target)
            }

          })


        


         
          