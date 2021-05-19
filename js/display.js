let title = document.querySelector(".themeName");
title.innerText = localStorage.themeDisplay;

recipe = JSON.parse(localStorage.themeObject);

// write your for loop here to iterate over the "array" of html elements
for (let i = 0; i <= recipe.length - 1; i++) {
  //   title info
  let title = recipe[i].title;

  // image info
  let src = recipe[i].image;

  // // preview text info
  // let $previewText = $(recipeData).find("div > .card__imageContainer > a");
  let previewText = recipe[i].previewText;

  let link = recipe[i].link;

  createCard(title, previewText, src, link);
}

function createCard(title, previewText, src, link) {
      if(previewText.length > 100){
        var shortPreview = previewText.substring(0, 100) + "...";
      }else{ 
        var shortPreview = previewText;
      }
      var recipeContainer = document.querySelector('.recipes')
      var div = document.createElement("div");
      recipeContainer.append(div);
      div.innerHTML = `<div class="card  m-3 cardStyles" style="width: 18rem; height:25rem;"><a href ="${link}">
        <img class="card-img-top" src="${src}" alt="Allrecipes photo">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${shortPreview}</p>
          <a/>
        </div>
      </div>`;
    }