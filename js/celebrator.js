//celebrator web app 

//keywords:
let theme = localStorage.themeID


async function amazonPull(){

    let resultsarr = []

    const response = await fetch(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${theme}+decorations&sort_by=most_recent`)
    const searchData = await response.json();
    searchResults = searchData;
    console.log(searchResults)
    searchData.search_results.forEach(item =>{
        const {price, title, image, link} = item
        resultsarr.push({price, title, image, link})
    })
    // console.log(resultsarr)

    for (let i=0; i<=resultsarr.length; i++){
        let title = resultsarr[i].title
        let image = resultsarr[i].image
        let link = resultsarr[i].link
        let price = resultsarr[i].price.raw
        createCard(title, price, image, link)
    }

}

amazonPull();

//api key isn't in here because I didn't want to waste fetches with broken code.




function createCard(title, price, image, link) {
    var body = document.body;
    var div = document.createElement("div");
    body.append(div);
    div.innerHTML = `<div class="card" style="width: 18rem;"><a href ="${link}">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${price}</h5>
        <p class="card-text">${title}</p>
        </a>
      </div>
    </div>`;
  }
  

