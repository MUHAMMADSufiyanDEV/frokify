<<<<<<< HEAD
let rightsidebar = document.querySelector("#right-sidebar")


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

                return `<div id="food-card" class="food-card" data-recipe-id=${recipie.id}>
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

            let particularApiUrl = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${elem}`)
            let particularData = await particularApiUrl.json()
            

            mainuihandler(particularData)

           
            

          }


          function mainuihandler  (particularData) {
             const {data} = particularData;
             const {recipe} = data;

             rightsidebar.innerHTML =      
             
             `<div id="recipe-details">
                <img src=${recipe.image_url} alt="food image">
                <h2>${recipe.title}</h2>
                <p> Servings: ${recipe.servings}</p>
                <p>${recipe.publisher}</p>
                <h3>Ingredients:</h3>
                <ul>
                        <li>${recipe.ingredients?.[0]?.description}</li>
                        <li>${recipe.ingredients?.[1]?.description}</li>
                        <li>${recipe.ingredients?.[2]?.description}</li>
                        <li>${recipe.ingredients?.[3]?.description}</li>
                        <li>${recipe.ingredients?.[4]?.description}</li>
                        <li>${recipe.ingredients?.[5]?.description}</li>
                        <li>${recipe.ingredients?.[6]?.description}</li>
                        <li>${recipe.ingredients?.[7]?.description}</li>
                        <li>${recipe.ingredients?.[8]?.description}</li>
                        <li>${recipe.ingredients?.[9]?.description}</li>
                        <li>${recipe.ingredients?.[10]?.description}</li>
                        <li>${recipe.ingredients?.[11]?.description}</li>
                        <li>${recipe.ingredients?.[12]?.description}</li>
                        <li>${recipe.ingredients?.[13]?.description}</li>
                        <li>${recipe.ingredients?.[14]?.description}</li>
                        <li>${recipe.ingredients?.[15]?.description}</li>
                         <li>${recipe.ingredients?.[16]?.description}</li>
                   
                </ul>
                <h3>Instructions:</h3>
                <p><a href=${recipe.source_url}> For More Details Click Here </a></p>
            </div>`
             
          }
            const ClickHandler = (e) => {
                  const card = e.target.closest(".food-card");

  if (!card) return; 

  const recipeId = card.dataset.recipeId;
//   console.log("Clicked recipe id:", recipeId);


  particularItemDetails(recipeId);
            }



document.addEventListener("click",(e) => {
    ClickHandler(e)
});


        


         
=======
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


        


         
>>>>>>> 317399754f72bcf41ff94419acff9d61a9f34d29
          