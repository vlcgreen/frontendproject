// testing allrecipes web scraping

let carnivalRecipes = [
  {
    title: "Deep Fried Oreos&reg;",
    previewText:
      "\n                                  This is a carnival favorite where I grew up. Oreos get dipped into pancake batter and fried - yummy!! You can do this with or without a deep fryer.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F377284.jpg",
    link: "https://www.allrecipes.com/recipe/166081/deep-fried-oreos/",
  },
  {
    title: "Funnel Cakes IV",
    previewText:
      "\n                                  This recipe for homemade funnel cakes brings the deep-fried carnival treat home to you!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F15261.jpg",
    link: "https://www.allrecipes.com/recipe/8265/funnel-cakes-iv/",
  },
  {
    title: "Air Fryer Oreos&reg;",
    previewText:
      "\n                                  Craving that carnival food? With just 3 ingredients and an air fryer, you can make fried Oreos® at home!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6399117.jpg",
    link: "https://www.allrecipes.com/recipe/270828/air-fryer-oreos/",
  },
  {
    title: "Chilled Strawberry Soup",
    previewText:
      "\n                                  This is the recipe if you've been trying to imitate the one you had on Carnival Cruise Lines.  Serve in chilled soup bowls, and garnish with fresh sliced strawberries.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4500846.jpg",
    link: "https://www.allrecipes.com/recipe/26393/chilled-strawberry-soup/",
  },
  {
    title: "Skinny Air Fryer Funnel Cakes",
    previewText:
      '\n                                  All you need is an air fryer and you can quench that craving for carnival foods! Plus it\'s a "skinny" version of funnel cakes.\n                                ',
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7599559.jpg",
    link: "https://www.allrecipes.com/recipe/278191/skinny-air-fryer-funnel-cakes/",
  },
  {
    title: "Faworki (Polish Chrusciki)",
    previewText:
      "\n                                  Traditional Polish crispy pastry twists made for Carnival time. They are deep-fried and sprinkled with confectioners' sugar. Light and delicious!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4948995.jpg",
    link: "https://www.allrecipes.com/recipe/246574/faworki-polish-chrusciki/",
  },
  {
    title: "Crostoli Pastries",
    previewText:
      "\n                                  Crostoli are a huge part of 'Carnevale' or 'Carnival' in Italy; these light, airy fried pastries are also a favorite holiday treat for Italian-Americans.  This family favorite has been handed down from my great-grandmother, who brought the recipe with her when she emigrated to the U.S. from the Veneto region of Italy.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F91210.jpg",
    link: "https://www.allrecipes.com/recipe/84972/crostoli-pastries/",
  },
  {
    title: "Working Mom's Hamentashen",
    previewText:
      "\n                                  This is a great recipe to use when you're short on time but don't want to deprive your family of that famous Jewish fruit-filled cookie around Purim time. Versions of this recipe have circulated around the Colorado Springs Jewish community for years. At a Purim carnival one year, I asked for someone's copy of the recipe.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6485205.jpg",
    link: "https://www.allrecipes.com/recipe/27203/working-moms-hamentashen/",
  },
  {
    title: "Easy Fun-Size Corn Dogs",
    previewText:
      "\n                                  Not only are these corn dogs easy and fun, but because we're doing them in the oven and not deep frying them, they are way, way less messy to make. Above and beyond all of that, I thought the timing was perfect for these, since pretty much every carnival and fair got canceled this year. Serve with mustard and ketchup.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8551843.jpg",
    link: "https://www.allrecipes.com/recipe/281641/easy-fun-size-corn-dogs/",
  },
  {
    title: "Cupcake Surprise",
    previewText:
      "\n                                  I made these for a school carnival, they turned out great. I did not need to frost them. To do something different, divide cream cheese filling into 4 different parts and tint each part a different color. Feel free to get creative with the surprises!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1214361.jpg",
    link: "https://www.allrecipes.com/recipe/26024/cupcake-surprise/",
  },
  {
    title: "Winter Squash Soup with a Sweet Heat",
    previewText:
      "\n                                  A delicious winter squash soup with a sweet heat taste. Brown sugar gives the sweetness and poblano and jalapeno peppers give the heat. This soup can be made with butternut, acorn, carnival, or delicata squash; it just needs to be a hard winter squash. This will get warmer from the peppers the longer it sits. If you like your soup a little thinner add water or additional chicken broth.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1065685.jpg",
    link: "https://www.allrecipes.com/recipe/235290/winter-squash-soup-with-a-sweet-heat/",
  },
  {
    title: "Struffoli o Cicerchiata (Italian Honey Dough Balls)",
    previewText:
      "\n                                  This traditional Italian sweet has different names in different regions: Struffoli in Naples area, which are among the most popular Christmas sweets; Cicerchiata in Abruzzi region, where you cannot miss them during Carnival time. The concept is simple: fried sweet dough balls, coated in caramelized honey. Tasty and long lasting, as you can make them at the beginning of the holiday season and offer them to friends and relatives coming over for holiday wishes. Store in an airtight container for up to 2 weeks. Garnish with candied orange or lemon peel if desired.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5128032.jpg",
    link: "https://www.allrecipes.com/recipe/258770/struffoli-o-cicerchiata-italian-honey-dough-balls/",
  },
  {
    title: "Corn Dogs",
    previewText:
      "\n                                  I made up this recipe many years ago, because I loved the corn dogs you buy at carnivals but could not find a recipe for them. Great served with mustard.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F730146.jpg",
    link: "https://www.allrecipes.com/recipe/35149/corn-dogs/",
  },
  {
    title: "Deep Fried Cheese Curds",
    previewText:
      "\n                                  Straight out of Wisconsin, fried cheese curds are a favorite at carnivals and fairs. They look like little balls of popcorn and taste like cheese! Use up to 2 pounds of cheese curds with this recipe.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8230263.jpg",
    link: "https://www.allrecipes.com/recipe/21718/deep-fried-cheese-curds/",
  },
  {
    title: "Tortelli di Carnevale (Italian Carnevale Doughnuts)",
    previewText:
      "\n                                  Doughnuts are typical of Carnevale in Italy, the famous festival in the days leading up to Lent. Each region, and indeed each family, has its own recipe. In Milan and the Lombardy region, Carnival donuts are called 'tortelli' and they are flavored with anise liqueur, grappa, and lemon zest.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5127986.jpg",
    link: "https://www.allrecipes.com/recipe/258269/tortelli-di-carnevale-italian-carnevale-doughnuts/",
  },
  {
    title: "",
    previewText:
      "\n                                  Capeta, which means devil in Portugese, is the name of this Carnival must-have drink, very popular in northern Brazil. This calls for guarana powder, which comes from a berry grown in Brazil and Venezuela; you can find it sold in health food shops as an energy supplement.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/246697/capeta-brazilian-devil-cocktail/",
  },
];
let luauRecipes = [
  {
    title: "Luau Punch",
    previewText:
      "\n                                  This slushy fruit punch has been used for years by my family at birthday parties, summer gatherings and now my children ask for it at breakfast...it is our favorite punch. We make it in an empty gallon milk jug.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F960997.jpg",
    link: "https://www.allrecipes.com/recipe/20552/luau-punch/",
  },
  {
    title: "Luau Chicken",
    previewText:
      "\n                                  This recipe tastes like it took a lot of effort to prepare when, in fact, it is very, very easy.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F88019.jpg",
    link: "https://www.allrecipes.com/recipe/8950/luau-chicken/",
  },
  {
    title: "Luau Grilled Chicken and Pineapple",
    previewText:
      "\n                                  This recipe with grilled pineapple makes very juicy chicken and is a great way to get your family to eat well without them knowing it! Serve with jasmine rice and fresh tomato slices.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8545156.jpg",
    link: "https://www.allrecipes.com/recipe/263780/luau-grilled-chicken-and-pineapple/",
  },
  {
    title: "Aloha Chicken Burgers",
    previewText:
      "\n                                  This tasty sandwich is like a luau on a bun!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F864756.jpg",
    link: "https://www.allrecipes.com/recipe/214553/aloha-chicken-burgers/",
  },
  {
    title: "Pineapple Coconut Bars",
    previewText:
      "\n                                  Pineapple and coconut make this a special tropical treat. Serve them at your next luau\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F18768.jpg",
    link: "https://www.allrecipes.com/recipe/9643/pineapple-coconut-bars/",
  },
  {
    title: "Lomi Lomi",
    previewText:
      "\n                                  Smoked salmon, tomato and onion make up this tantalizing Hawaiian salad. It's just not a luau without the lomi!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F802026.jpg",
    link: "https://www.allrecipes.com/recipe/84860/lomi-lomi/",
  },
  {
    title: "Haupia (Hawaiian Coconut Pudding)",
    previewText:
      "\n                                  This is a great traditional coconut recipe. We serve this at our family luau every year.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4484474.jpg",
    link: "https://www.allrecipes.com/recipe/129552/haupia-hawaiian-coconut-pudding/",
  },
];
let disneyRecipes = [
  {
    title: "Disney's Ratatouille",
    previewText:
      "\n                                  The beautiful ratatouille served up in the movie by the same name. Long and narrow vegetables work best. Serve over a bed of brown rice, couscous, pasta or other starch, or with crusty bread.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3210754.jpg",
    link: "https://www.allrecipes.com/recipe/222006/disneys-ratatouille/",
  },
  {
    title: "POG Juice",
    previewText:
      "\n                                  If you've eaten breakfast at Walt Disney® World or visited Hawaii, then you've probably had P.O.G juice. It's an amazingly refreshing blend of passion fruit juice, orange juice, and guava nectar. Enjoy!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6476824.jpg",
    link: "https://www.allrecipes.com/recipe/272512/pog-juice/",
  },
  {
    title: "Dole&reg; Whip",
    previewText:
      "\n                                  My mom and I had this at the Magic Kingdom® in Disney® and it is to die for! Excellent on a hot day as a smoothie and even better when frozen as a sorbet.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3398172.jpg",
    link: "https://www.allrecipes.com/recipe/244463/dole-whip/",
  },
  {
    title: "Harp&reg; and Cheese Soup",
    previewText:
      "\n                                  Based on a recipe from the Raglan Road Irish Tavern in downtown Disney, this is the most amazing soup you'll ever make. Your new 'go-to' for company! You might as well make 2 batches because you'll want leftovers.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2912336.jpg",
    link: "https://www.allrecipes.com/recipe/229510/harp-and-cheese-soup/",
  },
  {
    title: "Pineapple Whip",
    previewText:
      "\n                                  This homemade pineapple ice cream is reminiscent of the infamous 'Dole Whip' at Disney®. This version packs great pineapple flavor but it more smooth and creamy. Make this a float by dishing the ice cream into a glass and pour pineapple juice over it and top with whipped cream. This is a refreshing summer treat!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4502657.jpg",
    link: "https://www.allrecipes.com/recipe/257690/pineapple-whip/",
  },
  {
    title: "Slow Cooker Black-Eyed Peas",
    previewText:
      "\n                                  Our family was visiting, and we went to Disney World on New Year's Day. I just had to have black-eyed peas before midnight. Make it easy, soak black-eyed peas in the slow cooker overnight. This is a little thinner, like a very rich soup.  We really enjoyed it; hope you will too! Hot buttered cornbread and chunky applesauce are my favorites to serve with black-eyed peas.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1898613.jpg",
    link: "https://www.allrecipes.com/recipe/237310/slow-cooker-black-eyed-peas/",
  },
  {
    title: "",
    previewText:
      "\n                                  Remember those smoked turkey legs at Disney? This is the closest recipe I have found.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/281606/smoked-turkey-legs/",
  },
];
let cowboyRecipes = [
  {
    title: "Instant Pot&reg; Cowboy Beans",
    previewText:
      "\n                                  These Instant Pot® cowboy beans are rich and creamy and extremely easy to make.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6373807.jpg",
    link: "https://www.allrecipes.com/recipe/270588/instant-pot-cowboy-beans/",
  },
  {
    title: "Cowboy Dip",
    previewText:
      "\n                                  I made up this dip years ago and have found through the years that family and friends request this in football season every year.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1052741.jpg",
    link: "https://www.allrecipes.com/recipe/234586/cowboy-dip/",
  },
  {
    title: "Cowboy Casserole",
    previewText:
      "\n                                  This combination of hamburger, beans, and bacon over biscuits will bring out the cowboy in anyone.  It has become a family favorite.  It is so easy to make, and we love to make it when we're camping.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F994009.jpg",
    link: "https://www.allrecipes.com/recipe/51051/cowboy-casserole/",
  },
  {
    title: "Cowboy Cookies (Dunkin' Platters)",
    previewText:
      "\n                                  These are great for dunking and are also large and satisfying enough for a man's appetite. Cowboy cookies should be about 2-1/2 inches in diameter.  My Grandma makes these cookies and I have enjoyed them since I was a kid.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F595708.jpg",
    link: "https://www.allrecipes.com/recipe/11084/cowboy-cookies-dunkin-platters/",
  },
  {
    title: "Greek Cowboy Hash and Eggs",
    previewText:
      "\n                                  This recipe features one of my all-time favorite vegetables: the sweet potato. The tanginess of the feta (the Greek part) is a strange but tasty complement to the smoky, spicy chipotle chili powder (the cowboy part). This meal is great for brunch and simple to scale down for a quick dinner when you're cooking for yourself.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5111115.jpg",
    link: "https://www.allrecipes.com/recipe/211137/greek-cowboy-hash-and-eggs/",
  },
  {
    title: "Cowboy Margaritas",
    previewText:
      "\n                                  This is a fun cocktail that will appeal to many different tastes because it balances the tart, sweet, and tangy flavors of the liquors beautifully. This may be served frozen or on the rocks in a sugar-rimmed glass.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F970162.jpg",
    link: "https://www.allrecipes.com/recipe/222068/cowboy-margaritas/",
  },
  {
    title: "Cowboy Macaroni",
    previewText:
      "\n                                  A favorite meal of any cowboy. Includes a hearty combination of lean ground beef, macaroni, cheese, and a tomato sauce that will make you jump up and click your spurs together.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1341606.jpg",
    link: "https://www.allrecipes.com/recipe/19373/cowboy-macaroni/",
  },
  {
    title: "Cowboy Tacos",
    previewText:
      "\n                                  It doesn't take very long to whip up a fun meal with this recipe. Cowboys love these meaty tacos with chili beans and olives.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F780102.jpg",
    link: "https://www.allrecipes.com/recipe/36888/cowboy-tacos/",
  },
  {
    title: "Cowboy Skillet: New Potato Medley, Italian Sausage & Eggs",
    previewText:
      "\n                                  This Cowboy Skillet: New Potato Medley, Italian Sausage and Eggs recipe is courtesy of Sandra's Easy Cooking, a part of Potatoes USA's Potato Lovers Club Program.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3859397.jpg",
    link: "https://www.allrecipes.com/recipe/255098/cowboy-skillet-new-potato-medley-italian-sausage-eggs/",
  },
  {
    title: "Cowboy Hash",
    previewText:
      "\n                                  This is so easy and tastes great. It is a cheap meal for a large family. Serve over hot cooked rice, if desired.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6977997.jpg",
    link: "https://www.allrecipes.com/recipe/18813/cowboy-hash/",
  },
];
let mardiGrasRecipes = [
  {
    title: "Bayou's Mardi Gras Slaw",
    previewText:
      "\n                                  This is a wonderfully colorful cole slaw perfect for celebrating Mardi Gras or any other time. It is presented in the official colors of Mardi Gras: purple, green, and gold. The sauce is a perfect blend of sweet and tart, with a little cayenne pepper for bite. Do not dress the coleslaw ahead, or it will become soggy.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F937697.jpg",
    link: "https://www.allrecipes.com/recipe/178480/bayous-mardi-gras-slaw/",
  },
  {
    title: "Mardi Gras Jambalaya",
    previewText:
      "\n                                  The taste of The Big Easy has never been this simple or delicious.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3308063.jpg",
    link: "https://www.allrecipes.com/recipe/246395/mardi-gras-jambalaya/",
  },
  {
    title: "Mardi Gras King Cake",
    previewText:
      "\n                                  The King Cake is a New Orleans tradition that involves a pastry, a small plastic baby, and a party. The King Cake is baked with a small plastic baby hidden inside, the person who gets the slice with baby in it has to host the next party.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5071873.jpg",
    link: "https://www.allrecipes.com/recipe/8144/mardi-gras-king-cake/",
  },
  {
    title: "Grant's Special Mardi Gras Pasta",
    previewText:
      "\n                                  This is the first meal Grant ever cooked for me! (It is also the best.)\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F683256.jpg",
    link: "https://www.allrecipes.com/recipe/216884/grants-special-mardi-gras-pasta/",
  },
  {
    title: "Mardi Gras Gator Meat Balls",
    previewText:
      "\n                                  These excellent meatballs are especially great for those that have easy access to alligator meat.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F617396.jpg",
    link: "https://www.allrecipes.com/recipe/19731/mardi-gras-gator-meat-balls/",
  },
  {
    title: "Creolo Cocktail",
    previewText:
      "\n                                  This original cocktail from New Orleans is perfect for Mardi Gras celebrations.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1043403.jpg",
    link: "https://www.allrecipes.com/recipe/231052/creolo-cocktail/",
  },
  {
    title: "Grits a Ya Ya",
    previewText:
      "\n                                  A friend of mine made this for a Mardi Gras dinner. It was so delicious, I just had to have the recipe.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8139064.jpg",
    link: "https://www.allrecipes.com/recipe/220018/grits-a-ya-ya/",
  },
  {
    title: "Giant King Cake Burger",
    previewText:
      "\n                                  Celebrate Mardi Gras in extravagant style with this recipe for a giant Mardi Gras king cake burger!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1106951.jpg",
    link: "https://www.allrecipes.com/recipe/236808/giant-king-cake-burger/",
  },
  {
    title: "Super Easy Mardi Gras King Cake",
    previewText:
      "\n                                  Do you love the way a King Cake brightens up your party but hate the time it takes to bake one? Here's an easy recipe that's fast and fun and easier than pie! A small plastic baby inserted into the side of the cake will bring good luck in the coming year to whoever discovers it in their slice of cake. Beads, additional plastic babies, curly ribbon, and other festive trinkets can be used to decorate the cake.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1107901.jpg",
    link: "https://www.allrecipes.com/recipe/60241/super-easy-mardi-gras-king-cake/",
  },
  {
    title: "Jessica's Red Beans and Rice",
    previewText:
      "\n                                  My company had a Mardi Gras party and I wanted to make a flavorful red beans and rice recipe that everyone would love!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4262794.jpg",
    link: "https://www.allrecipes.com/recipe/230679/jessicas-red-beans-and-rice/",
  },
];
let internationalRecipes = [
  {
    title: "Runza Burritos International",
    previewText:
      "\n                                  A Burrito with a German Flavor...Full meal, snack, or brunch. Freezes easy so it makes a different Brown Bag Lunch base. It should look like a giant Cigar.  Optional: Splash the open end of the Burrito with Sour Cream.  Eat with gusto...goes great with Corona and a twist of Lime...and a Garden Salad.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F698891.jpg",
    link: "https://www.allrecipes.com/recipe/163636/runza-burritos-international/",
  },

  {
    title: "Chinese Pork Dumplings",
    previewText:
      "\n                                  In Seattle's International District, Liana Cafe House sells traditional Chinese pork dumplings from a tiny takeout shop. See how to make them at home.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3523301.jpg",
    link: "https://www.allrecipes.com/recipe/228052/chinese-pork-dumplings/",
  },
  {
    title: "Indian Spiced Rice Treats",
    previewText:
      "\n                                  This is a variation on the traditional crispy rice cereal treat with an international twist! Cashews, golden raisins and cardamom are thrown into the mix for an exotic Indian flair.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1831282.jpg",
    link: "https://www.allrecipes.com/recipe/79159/indian-spiced-rice-treats/",
  },
  {
    title: "Sesame Lemon Crisps",
    previewText:
      "\n                                  These delicate cookies are elegant and lovely for any holiday gathering. They also would be suitable for an afternoon tea.  The lemon  and sesame seeds make this cookie perfect for an international spread for a buffet. Impress your friends with these easy to make cookies!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1026876.jpg",
    link: "https://www.allrecipes.com/recipe/16316/sesame-lemon-crisps/",
  },
  {
    title: "Thai Monkfish Curry",
    previewText:
      "\n                                  Fragrant, warming and delicious curry-tinged soup, lovely over rice. Adjust curry paste to increase or decrease heat. Curry paste is available in jars in Asian stores and the international aisle of many grocery stores.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F830850.jpg",
    link: "https://www.allrecipes.com/recipe/140964/thai-monkfish-curry/",
  },
  {
    title: "Tomato Freekeh",
    previewText:
      "\n                                  Freekeh is fire-roasted baby wheat. It can be found in international or Middle Eastern stores. It can be used to replace rice. It has a very distinctive flavor. Any veggies or spices can be added to this recipe. This freekeh recipe will have a thick tomato saucy consistency. It has a slight kick, too.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1093660.jpg",
    link: "https://www.allrecipes.com/recipe/235936/tomato-freekeh/",
  },
  {
    title: "Dukkah Roasted Potatoes",
    previewText:
      "\n                                  Dukkah is an Egyptian seasoning made with nuts, seeds, and spices, traditionally used as a dip for bread, along with olive oil. You should see what it does to roasted potatoes! Everyone has their favorite variation of dukkah. Many dukkah recipes are available online or look in ethnic markets or the international section of your grocery store. You may need to adjust the salt, depending on the saltiness of the dukkah you use.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6615217.jpg",
    link: "https://www.allrecipes.com/recipe/273404/dukkah-roasted-potatoes/",
  },
  {
    title: "Japanese Curry",
    previewText:
      "\n                                  Japanese curry is different from Indian or Thai curries. It is more of a brown stew and it can be mild or spicy, depending on your tastes. The curry roux, from no heat to very spicy, can be bought at any international grocery store. It can be served over white rice or with udon noodles. \n                    This recipe is very flexible; it can easily be made for more or less people. It can also be frozen (don't put the potatoes in).\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4917776.jpg",
    link: "https://www.allrecipes.com/recipe/274077/japanese-curry/",
  },

  {
    title: "Kala Chola Pakistani-Style",
    previewText:
      "\n                                  'Kala Chola' is a Pakistani dish that can be served as a meal, with rice, or just on its own. It is made with kala chana, which is in the family of garbanzo beans. You can find them in Indian/Pakistani stores or in the Indian/Pakistani section of an international store. It is really tasty and very popular in my home. According to my mom (a diabetic), kala chana are high in fiber and low in fat. It is great for people with blood sugar problems. Serve by garnishing with onion and cilantro with basmati rice. Hope you all enjoy it.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F837373.jpg",
    link: "https://www.allrecipes.com/recipe/222700/kala-chola-pakistani-style/",
  },
  {
    title: "Kielbasa with Brussels Sprouts in Mustard Cream Sauce",
    previewText:
      "\n                                  Any German can tell you that wurst and cabbage go hand in hand. Any Spaniard will say the same of chorizo and beans. But it takes a special, international inclination to make the case for kielbasa with Brussels sprouts, white beans, and mustard. I'll tell you that it works wonderfully! The saltiness of the pork combined with the bitter, gentle crunch of the Brussels sprouts and mildness of the beans is well-balanced perfection. Plus, it's cheap, easy, and looks good on a plate!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4557692.jpg",
    link: "https://www.allrecipes.com/recipe/212759/kielbasa-with-brussels-sprouts-in-mustard-cream-sauce/",
  },

  {
    title: "Real Homemade Tamales",
    previewText:
      "\n                                  I had been looking for a Tamale recipe for years. One day I went to the international market and stood in the Mexican aisle till a woman with a full cart came by. I just asked her if she knew how to make Tamales. This is her recipe with a few additions from me. The pork can be substituted with either chicken or beef. This is great served with refried beans and a salad.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F417213.jpg",
    link: "https://www.allrecipes.com/recipe/34512/real-homemade-tamales/",
  },
  {
    title: "Tempura-Battered Smelt",
    previewText:
      "\n                                  The classic Acadian way to cook smelt is to fry them. I put a twist on that tradition by frying them in this light tempura batter my husband and I use for shrimp. I serve this with heads on because, like anchovies, these fish are so small everything is edible. But you can remove heads and internal organs if desired.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1101484.jpg",
    link: "https://www.allrecipes.com/recipe/236439/tempura-battered-smelt/",
  },
];
let formalRecipes = [
  {
    title: "Russian Tea Cakes III",
    previewText:
      "\n                                  Lovely little cookies that are perfect for formal parties.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F53678.jpg",
    link: "https://www.allrecipes.com/recipe/10811/russian-tea-cakes-iii/",
  },

  {
    title: "Almond Thins",
    previewText:
      "\n                                  Thin and delicate, these are perfect for everything from formal parties to your  morning coffee.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2220592.jpg",
    link: "https://www.allrecipes.com/recipe/9716/almond-thins/",
  },
  {
    title: "Air Fryer Mini Peppers Stuffed with Cheese and Sausage",
    previewText:
      "\n                                  Whether it's a formal party at your home or a casual get-together with friends, these air-fried mini peppers stuffed with cheese and sausage are a great appetizer to offer.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7055710.jpg",
    link: "https://www.allrecipes.com/recipe/275996/air-fryer-mini-peppers-stuffed-with-cheese-and-sausage/",
  },

  {
    title: "Goat Cheese Pizzas",
    previewText:
      "\n                                  This is an easy yet impressive looking appetizer which works well for casual gatherings and more formal ones. I made these for a cocktail party at my home and they went fast.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F346699.jpg",
    link: "https://www.allrecipes.com/recipe/67785/goat-cheese-pizzas/",
  },
  {
    title: "Penne con Sauccia",
    previewText:
      "\n                                  This is a quick, but elegant dish that does well for informal get-togethers as well as formal dinner parties.  The spiciness of the sauce can easily be adjusted as well, as the flavor is wonderful either mild or hot.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2006194.jpg",
    link: "https://www.allrecipes.com/recipe/26283/penne-con-sauccia/",
  },

  {
    title: "Patate Prezzemolate (Vegan Italian Potato Salad)",
    previewText:
      "\n                                  Born vegan, this is a classic potato salad that can be found on Italian tables from the North to the South. In Italy, you'll find it everywhere: formal luncheons, family get-togethers, weeknight dinners, and even in hospital and school cafeterias. Many Italians add cooked green beans. Leftovers are delicious tossed with pesto and pasta. Buon appetito!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5615052.jpg",
    link: "https://www.allrecipes.com/recipe/267257/patate-prezzemolate-vegan-italian-potato-salad/",
  },
  {
    title: "Kevin's Sea Shells",
    previewText:
      "\n                                  A wonderful rich blend of shrimp and pasta. Sea Shells are great for a formal meal or a special meal. Sea Shells look and taste expensive but are really an easy way to impress everyone. Best with wild caught shrimp! Serve with a Cobb salad and a buttered French white loaf.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3669836.jpg",
    link: "https://www.allrecipes.com/recipe/215983/kevins-sea-shells/",
  },
  {
    title: "BLT Dip",
    previewText:
      "\n                                  This dip is a hit whether you serve it at a block party or a formal dinner party!  It really tastes like a BLT.  You can cut the fat down if you want to use low-fat or fat free ingredients. Serve with crackers or chips.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F665563.jpg",
    link: "https://www.allrecipes.com/recipe/14944/blt-dip/",
  },
  {
    title: "Cream of Asparagus and Mushroom Soup",
    previewText:
      "\n                                  I was on a work trip in Oklahoma City several years ago and had a delicious bowl of cream of asparagus soup at a cute cafe, and I spent a year trying to recreate my own version of this heart-warming soup. With the collaboration of my family's ideas, I have come up with a version of soup that I serve for our formal holiday meals as a starter course.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5318857.jpg",
    link: "https://www.allrecipes.com/recipe/220091/cream-of-asparagus-and-mushroom-soup/",
  },
  {
    title: "Cheddar Pecan Stuffed Mushrooms",
    previewText:
      "\n                                  In my husband's family, we have a tradition of making a variety of appetizers as our meal for Christmas Eve. My sister-in-law brought these one year and they have been one of our favorites ever since. I don't generally use the large stuffing mushrooms, though you can if you're serving this as a first or second course in a formal dinner. Instead I use regular button mushrooms so 15 or so people can have two or three each.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F934823.jpg",
    link: "https://www.allrecipes.com/recipe/230017/cheddar-pecan-stuffed-mushrooms/",
  },
  {
    title: "Creamy Lemon Chicken with Pasta",
    previewText:
      "\n                                  This easy, low-fat recipe has great Mediterranean flavors (lemon, tarragon, oregano, artichoke hearts) and really leaves you satisfied. For company, I've thinned the sauce with some chicken broth or white wine and served it over angel hair pasta for a more formal presentation. I created this because I wanted a recipe that uses the items I have in my pantry every day. This and a salad and you are done! You can use mostaccioli or another dry short pasta in place of the pipette, if desired.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3101131.jpg",
    link: "https://www.allrecipes.com/recipe/240232/creamy-lemon-chicken-with-pasta/",
  },
];
let jungleRecipes = [
  {
    title: "Jungle Lobster",
    previewText:
      "\n                                  This is something I came up with while staying at a guest house at the Jungle Place located south of Playa del Carmen, Mexico. You can squeeze either a little fresh lime juice or lemon juice on top.  A very easy side is a half avocado sliced and arranged in fan style, drizzled with olive oil, lemon, oregano, salt and pepper.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5128732.jpg",
    link: "https://www.allrecipes.com/recipe/99236/jungle-lobster/",
  },
  {
    title: "",
    previewText:
      "\n                                  Enjoy this fruit filled punch for all occasions.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/125549/jungle-juice-for-a-crowd/",
  },
  {
    title: "Budget Jungle Juice for a Crowd",
    previewText:
      "\n                                  This is a recipe for a great alcoholic punch that will serve many on a limited budget. You may add vanilla ice cream if you wish.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F616475.jpg",
    link: "https://www.allrecipes.com/recipe/137430/budget-jungle-juice-for-a-crowd/",
  },
  {
    title: "",
    previewText:
      "\n                                  Chicken breasts, marinated in sweetened condensed milk and pan-fried, are served in a flavorful, chocolate and wine sauce.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/56248/chocolate-mayan-jungle-bird/",
  },
  {
    title: "Mushroom Curry with Galangal",
    previewText:
      "\n                                  This is a jungle curry recipe, meaning it is very rustic and easy to make. This does not even require you to make a curry paste. Just put all the ingredients in the coconut milk and cook. This version is vegetarian; chicken can be added if you like.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4520847.jpg",
    link: "https://www.allrecipes.com/recipe/213987/mushroom-curry-with-galangal/",
  },
  {
    title: "Lion Veggie Tray",
    previewText:
      "\n                                  Jungle party, zoo outing, birthday party - this cute lion is easy to make and kids especially will love him. You can use other orange vegetables like carrots as well.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4574666.jpg",
    link: "https://www.allrecipes.com/recipe/261185/lion-veggie-tray/",
  },
  {
    title: "",
    previewText:
      "\n                                  I miss jungle fruit sherbet at Baskin-Robbins®, so this is my homemade version.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/258438/jungle-sherbet/",
  },
];
let oceanRecipes = [
  {
    title: "Ocean Packets",
    previewText:
      "\n                                  If you can't find clams, use mussels.  If someone doesn't care for clams, double up on the shrimp and/or scallops.  Baking times may vary according to the ingredients you select.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F633442.jpg",
    link: "https://www.allrecipes.com/recipe/215621/ocean-packets/",
  },
  {
    title: "Creamy Scallop Chowder",
    previewText:
      "\n                                  A wonderful soup featuring white wine, onions and tender scallops. You may use either ocean or bay scallops.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8216484.jpg",
    link: "https://www.allrecipes.com/recipe/18236/creamy-scallop-chowder/",
  },

  {
    title: "Kids' Octopus Soup",
    previewText:
      "\n                                  This is a recipe I learned in kindergarten, and it's great to do with your kids or make for a Halloween or an ocean-themed birthday party.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F498351.jpg",
    link: "https://www.allrecipes.com/recipe/216069/kids-octopus-soup/",
  },
  {
    title: "Chicken Breasts Stuffed with Crabmeat",
    previewText:
      "\n                                  A cream cheese and crab stuffing in breaded, sauteed chicken breasts. An ocean of pleasurable taste sensations!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F696715.jpg",
    link: "https://www.allrecipes.com/recipe/9030/chicken-breasts-stuffed-with-crabmeat/",
  },
  {
    title: "Steamed Blue Crabs",
    previewText:
      "\n                                  Atlantic Ocean Blue Crabs, steamed over a boil of Old Bay® seasoning and beer. Show your friends you have that certain craboir faire with this one.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F487942.jpg",
    link: "https://www.allrecipes.com/recipe/178366/steamed-blue-crabs/",
  },
  {
    title: "Shark Bite Cocktail",
    previewText:
      "\n                                  This is a fun cocktail that looks like ocean water dotted with blood. Perfect for Shark Week viewing parties!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1273812.jpg",
    link: "https://www.allrecipes.com/recipe/238525/shark-bite-cocktail/",
  },
  {
    title: "Creamy Crab Pesto over Mahi Mahi",
    previewText:
      "\n                                  A taste of the ocean! Creamy pesto sauce with lump crab meat over a delicious fillet of mahi mahi. This dish also works well with a parma rosa sauce and catfish!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3524850.jpg",
    link: "https://www.allrecipes.com/recipe/236582/creamy-crab-pesto-over-mahi-mahi/",
  },
  {
    title: "Barbequed Steelhead Trout",
    previewText:
      "\n                                  A steelhead is really just a rainbow trout that has been to either one of the Great Lakes or to the ocean for most of its life and has returned to it's birthplace to spawn. This is a twisted way to serve steelhead or any other trout or salmon. It may sound odd, but this is a delicious dish.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6515206.jpg",
    link: "https://www.allrecipes.com/recipe/104621/barbequed-steelhead-trout/",
  },
  {
    title: "Fisherman's Catch Chowder",
    previewText:
      "\n                                  This is a very savory fish chowder, and anyone who is a seafood lover will love this recipe! Use any combinations of the following fish: halibut, flounder, ocean perch, pike, rainbow trout, or haddock. (Double recipe for 5-quart slow cooker.)\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1125377.jpg",
    link: "https://www.allrecipes.com/recipe/13237/fishermans-catch-chowder/",
  },
  {
    title: "Grilled Tuna",
    previewText:
      "\n                                  Tuna is available most of the year, so fresh steaks should be easy to come by. Be choosy: a reddish color is acceptable, but flesh with dark spots or streaks should be avoided. As with all great ocean fish, the flesh tends to be dry. Marinate with oil, and avoid overcooking. The timing is critical, as tuna should be served medium rare. Use a kitchen timer.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2520612.jpg",
    link: "https://www.allrecipes.com/recipe/12730/grilled-tuna/",
  },
  {
    title: "Spicy Sweet Spot Prawn Marinade",
    previewText:
      "\n                                  Every summer I leave Seattle and go up to my family home in British Columbia. While we do a lot of fishing for salmon and foraging for oysters and clams, my favorite seafood we acquire are the spot prawns. We catch them in traps set down nearly 400 feet and they are the most delicious shellfish I have ever had. No de-veining necessary and perhaps, just perhaps, better than lobster. I separate our catch by size and freeze them in bags in the ocean water they came out of. When I want to have a taste of summer I use this marinade. Delish!\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1125589.jpg",
    link: "https://www.allrecipes.com/recipe/236690/spicy-sweet-spot-prawn-marinade/",
  },
  {
    title: "Baked Fresh Rainbow Trout",
    previewText:
      "\n                                  Very easy and tasty recipe I invented one day with ingredients on hand, for fresh rainbow trout (farmed or wild) that my family loves. It takes very little time and is much lighter than ocean fish. I use whole fish you can buy already  gutted from the supermarket, with heads and tails still on. Make sure you pick trout that are really, really fresh. I find the dish doesn't even need lemon slices but you can use them if you like. The key is to remember to add the water to the dish as instructed in directions, which keeps fish from drying out. Serve with rice and veggies. Light and delicious. Be careful of bones! Make sure to add hot water to the dish; cold water can crack the baking dish.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1431579.jpg",
    link: "https://www.allrecipes.com/recipe/236814/baked-fresh-rainbow-trout/",
  },
];
let renaissanceRecipes = [
  {
    title: "Renaissance Stuffed Mushrooms",
    previewText:
      "\n                                  I created this recipe for a vegetarian friend. It is based on my Italian sausage stuffed mushrooms, but this is more 'veggie' friendly! Enjoy it! If you don't have any garlic olive oil, just use regular olive oil and add an extra clove of garlic.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2272734.jpg",
    link: "https://www.allrecipes.com/recipe/26922/renaissance-stuffed-mushrooms/",
  },
  {
    title: "Roasted Barbecued Turkey Legs",
    previewText:
      "\n                                  Tender roasted turkey legs just like the ones served at Renaissance Fairs. This one starts off in a pressure cooker, then the legs are broiled and coated with barbecue sauce as a finishing touch.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F197809.jpg",
    link: "https://www.allrecipes.com/recipe/71564/roasted-barbecued-turkey-legs/",
  },
  {
    title: "Sfogliatelle Ricce",
    previewText:
      "\n                                  I searched high and low for a recipe for this delicious pastry, originally prepared only for the aristocratic Renaissance set in Italy. There are only a few recipes online in English, and they assume you know quite about bit about baking or were just wrong. I've tried to simplify the process. It's a challenging recipe that requires a lot of time and some special techniques. Don't be upset if you don't get it right the first time. NOTE: The dough is a formula, so the ingredient measures are weights. It matters. The rest is less critical, so I used volumes.\n                                ",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1099443.jpg",
    link: "https://www.allrecipes.com/recipe/235629/sfogliatelle-ricce/",
  },
  {
    title: "",
    previewText:
      "\n                                  I discovered Ham and Pea Soup at a renaissance fair and proceeded home. This recipe is the closest that I came to.  Even my brother, who hates onions and celery, loved this.  Because it makes so much, we tend to cook it only on the holidays. It takes a while to cook, but it is delicious and simple.\n                                ",
    image: "/img/icons/generic-recipe.svg",
    link: "https://www.allrecipes.com/recipe/245396/ham-and-pea-soup/",
  },
];

// arURL = "https://www.allrecipes.com/search/results/?search=ocean";
let recipes = [];

// $.get(arURL).done((recipeData) => {
//   let $foundRecipes = $(recipeData).find(
//     "div > .card__imageContainer > a> div"
//   );
//   let $textData = $(recipeData).find(
//     ".card__detailsContainer > div > .card__summary"
//   );
//   let $linkData = $(recipeData).find("div > .card__imageContainer > a");

//   // write your for loop here to iterate over the "array" of html elements
//   for (let i = 0; i <= $foundRecipes.length - 1; i++) {
//     //   title info
//     let title = $($foundRecipes[i]).data("title");

//     // link info
//     let link = $linkData[i].href;

//     // image info
//     let src = $($foundRecipes[i]).data("src");
//     // console.log(foundRecipes[i]);

//     // // preview text info
//     // let $previewText = $(recipeData).find("div > .card__imageContainer > a");
//     let previewText = $textData[i].innerText;
//     createCard(title, previewText, src, link);
//   }

//   $("#test").text(JSON.stringify(oceanRecipes));
// });

// creates multiples cards with recipe data

// write your for loop here to iterate over the "array" of html elements
for (let i = 0; i <= oceanRecipes.length - 1; i++) {
  //   title info
  let title = oceanRecipes[i].title;
  // console.log($title);

  // image info
  let src = oceanRecipes[i].image;
  // console.log(foundRecipes[i]);

  // // preview text info
  // let $previewText = $(recipeData).find("div > .card__imageContainer > a");
  let previewText = oceanRecipes[i].previewText;

  let link = oceanRecipes[i].link;

  createCard(title, previewText, src, link);
}

function createCard(title, previewText, src, link) {
  var recipeContainer = document.querySelector('.recipes')
  var div = document.createElement("div");
  recipeContainer.append(div);
  div.innerHTML = `<div class="card" style="width: 18rem;"><a href ="${link}">
    <img class="card-img-top" src="${src}" alt="Allrecipes photo">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${previewText}</p>
      <a/>
    </div>
  </div>`;
  createObject(title, previewText, src, link, recipes);
}

// function to store recipe data
function createObject(title, previewText, src, link, self) {
  self.push({
    title: title,
    previewText: previewText,
    image: src,
    link: link,
  });
}
