//celebrator web app 


async function amazonPull(){

    let resultsarr = []

    const response = await fetch(`https://api.rainforestapi.com/request?api_key=${apiKey}type=search&amazon_domain=amazon.com&search_term=luau+decorations&sort_by=most_recent`)
    const searchData = await response.json();
    searchResults = searchData;
    // console.log(searchResults)
    searchData.search_results.forEach(item =>{
        const {price, title, image} = item
        resultsarr.push({price, title, image})
    })
    console.log(resultsarr)
}

amazonPull();

//api key isn't in here because I didn't want to waste fetches with broken code. But we can test maybe 10x a day just to see if everything we want is happening. 