//celebrator web app 

//keywords:
let theme = localStorage.themeID 
var searchTerm = ""

if (theme == "blackTie"){
    var searchTerm = "black+tie+event"
}
else if (theme == 'carnival'){
    var searchTerm = "carnival"
}
else if (theme == 'cowboy'){
    var searchTerm = "cowboy+theme"
}
else if(theme == 'disney'){
    var searchTerm = "disney"

}
else if(theme == "nautical"){
    var searchTerm = "nautical"

}
else if(theme == "international"){
    var searchTerm = "international"

}
else if(theme == "jungle"){
    var searchTerm = "jungle+theme"
}
else if(theme == 'luau'){
    var searchTerm = "luau"

}
else if(theme == "mardiGras"){
    var searchTerm = "mardi+gras"
}
else if(theme == "renaissance"){
    var searchTerm = "renaissance"

}


async function amazonPull(){

    let resultsarr = []

   // const response = await fetch(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${theme}+party+decorations&sort_by=most_recent`)
    const response = await fetch(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${searchTerm}+party+decorations&sort_by=featured`)

    const searchData = await response.json();
    searchResults = searchData;
    console.log(searchResults)
    searchData.search_results.forEach(item =>{
        const {price, title, image, link} = item
        resultsarr.push({price, title, image, link})
    })
    // console.log(resultsarr)

    for (let i=0; i<=12; i++){
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
    if(title.length > 100){
        var shortText = title.substring(0, 100) + "...";
    }else{ 
        var shortText = title;
    }
    var searchContainer = document.querySelector('.amazonSearch')
    var div = document.createElement("div");
    searchContainer.append(div);
    div.innerHTML = `<div class="card m-3 cardStyles" style="width: 18rem; height:25rem;"><a href ="${link}">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${price}</h5>
        <p class="card-text">${shortText}</p>
        </a>
      </div>
    </div>`;
  }


