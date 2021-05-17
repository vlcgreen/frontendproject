// testing allrecipes web scraping

let foundRecipes = [
  {
    title: "Deep Fried Oreos&reg;",
    previewText:
      "\n                                  This is a carnival favorite where I grew up. Oreos get dipped into pancake batter and fried - yummy!! You can do this with or without a deep fryer.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F377284.jpg",
  },
  {
    title: "Funnel Cakes IV",
    previewText:
      "\n                                  This recipe for homemade funnel cakes brings the deep-fried carnival treat home to you!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F15261.jpg",
  },
  {
    title: "Air Fryer Oreos&reg;",
    previewText:
      "\n                                  Craving that carnival food? With just 3 ingredients and an air fryer, you can make fried Oreos® at home!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6399117.jpg",
  },
  {
    title: "Chilled Strawberry Soup",
    previewText:
      "\n                                  This is the recipe if you've been trying to imitate the one you had on Carnival Cruise Lines.  Serve in chilled soup bowls, and garnish with fresh sliced strawberries.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4500846.jpg",
  },
  {
    title: "Skinny Air Fryer Funnel Cakes",
    previewText:
      '\n                                  All you need is an air fryer and you can quench that craving for carnival foods! Plus it\'s a "skinny" version of funnel cakes.\n                                ',
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7599559.jpg",
  },
  {
    title: "Faworki (Polish Chrusciki)",
    previewText:
      "\n                                  Traditional Polish crispy pastry twists made for Carnival time. They are deep-fried and sprinkled with confectioners' sugar. Light and delicious!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4948995.jpg",
  },
  {
    title: "Crostoli Pastries",
    previewText:
      "\n                                  Crostoli are a huge part of 'Carnevale' or 'Carnival' in Italy; these light, airy fried pastries are also a favorite holiday treat for Italian-Americans.  This family favorite has been handed down from my great-grandmother, who brought the recipe with her when she emigrated to the U.S. from the Veneto region of Italy.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F91210.jpg",
  },
  {
    title: "Working Mom's Hamentashen",
    previewText:
      "\n                                  This is a great recipe to use when you're short on time but don't want to deprive your family of that famous Jewish fruit-filled cookie around Purim time. Versions of this recipe have circulated around the Colorado Springs Jewish community for years. At a Purim carnival one year, I asked for someone's copy of the recipe.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6485205.jpg",
  },
  {
    title: "Easy Fun-Size Corn Dogs",
    previewText:
      "\n                                  Not only are these corn dogs easy and fun, but because we're doing them in the oven and not deep frying them, they are way, way less messy to make. Above and beyond all of that, I thought the timing was perfect for these, since pretty much every carnival and fair got canceled this year. Serve with mustard and ketchup.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8551843.jpg",
  },
  {
    title: "Cupcake Surprise",
    previewText:
      "\n                                  I made these for a school carnival, they turned out great. I did not need to frost them. To do something different, divide cream cheese filling into 4 different parts and tint each part a different color. Feel free to get creative with the surprises!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1214361.jpg",
  },
  {
    title: "Winter Squash Soup with a Sweet Heat",
    previewText:
      "\n                                  A delicious winter squash soup with a sweet heat taste. Brown sugar gives the sweetness and poblano and jalapeno peppers give the heat. This soup can be made with butternut, acorn, carnival, or delicata squash; it just needs to be a hard winter squash. This will get warmer from the peppers the longer it sits. If you like your soup a little thinner add water or additional chicken broth.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1065685.jpg",
  },
  {
    title: "Struffoli o Cicerchiata (Italian Honey Dough Balls)",
    previewText:
      "\n                                  This traditional Italian sweet has different names in different regions: Struffoli in Naples area, which are among the most popular Christmas sweets; Cicerchiata in Abruzzi region, where you cannot miss them during Carnival time. The concept is simple: fried sweet dough balls, coated in caramelized honey. Tasty and long lasting, as you can make them at the beginning of the holiday season and offer them to friends and relatives coming over for holiday wishes. Store in an airtight container for up to 2 weeks. Garnish with candied orange or lemon peel if desired.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5128032.jpg",
  },
  {
    title: "Corn Dogs",
    previewText:
      "\n                                  I made up this recipe many years ago, because I loved the corn dogs you buy at carnivals but could not find a recipe for them. Great served with mustard.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F730146.jpg",
  },
  {
    title: "Deep Fried Cheese Curds",
    previewText:
      "\n                                  Straight out of Wisconsin, fried cheese curds are a favorite at carnivals and fairs. They look like little balls of popcorn and taste like cheese! Use up to 2 pounds of cheese curds with this recipe.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8230263.jpg",
  },
  {
    title: "",
    previewText:
      "\n                                  Capeta, which means devil in Portugese, is the name of this Carnival must-have drink, very popular in northern Brazil. This calls for guarana powder, which comes from a berry grown in Brazil and Venezuela; you can find it sold in health food shops as an energy supplement.\n                                ",
    image: "/img/icons/generic-recipe.svg",
  },
  {
    title: "Tortelli di Carnevale (Italian Carnevale Doughnuts)",
    previewText:
      "\n                                  Doughnuts are typical of Carnevale in Italy, the famous festival in the days leading up to Lent. Each region, and indeed each family, has its own recipe. In Milan and the Lombardy region, Carnival donuts are called 'tortelli' and they are flavored with anise liqueur, grappa, and lemon zest.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5127986.jpg",
  },
];

arURL = "https://www.allrecipes.com/search/results/?search=carnival";
let recipes = [];

// $.get(arURL).done((recipeData) => {
//   let foundRecipes = $(recipeData).find("div > .card__imageContainer > a> div");
//   let textData = $(recipeData).find(
//     ".card__detailsContainer > div > .card__summary"
//   );

//   // write your for loop here to iterate over the "array" of html elements
//   for (let i = 0; i <= foundRecipes.length - 1; i++) {
//     //   title info
//     let $title = $(foundRecipes[i]).data("title");
//     // console.log($title);

//     // image info
//     let $src = $(foundRecipes[i]).data("src");
//     // console.log(foundRecipes[i]);

//     // // preview text info
//     // let $previewText = $(recipeData).find("div > .card__imageContainer > a");
//     let $previewText = textData[i].innerText;
//     createCard($title, $previewText, $src);
//   }

//   $("#test").text(JSON.stringify(recipes));
// });

// creates multiples cards with recipe data

// write your for loop here to iterate over the "array" of html elements
for (let i = 0; i <= foundRecipes.length - 1; i++) {
  //   title info
  let $title = foundRecipes[i].title;
  // console.log($title);

  // image info
  let $src = foundRecipes[i].image;
  // console.log(foundRecipes[i]);

  // // preview text info
  // let $previewText = $(recipeData).find("div > .card__imageContainer > a");
  let $previewText = foundRecipes[i].previewText;

  createCard($title, $previewText, $src);
}

function createCard(title, previewText, image) {
  var body = document.body;
  var div = document.createElement("div");
  body.append(div);
  div.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${previewText}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  createObject(title, previewText, image, recipes);
}

// function to store recipe data
function createObject(title, previewText, image, self) {
  self.push({
    title: title,
    previewText: previewText,
    image: image,
  });
}
