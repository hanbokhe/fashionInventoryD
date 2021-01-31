function generateLaceDetails(inventory) {
    var laceDetailsArray = [];
    
    //iterate over inventory
    for (var i = 0; i < inventory.length; i++){
        var brandName = inventory[i].name;
        var shoesArray = inventory[i].shoes;
        
        // iterate over inventory[i].shoes
        for (var j = 0; j < shoesArray.length; j++)
        {
            var currentShoe = shoesArray[j];
            var indexOfLace = hasLaceDetails(currentShoe);
            
            if( indexOfLace ){
                var laceDetailsObject = {};
                var nameWordsArray = currentShoe.name.split(" ");
                laceDetailsObject.nameWords = nameWordsArray;
                laceDetailsObject.targetWordIndex = getLaceIndex(nameWordsArray);
                laceDetailsArray.push(laceDetailsObject);
            }
            
        }
    }
    return laceDetailsArray;
}
function getLaceIndex(arrayOfNameWords){
    //iterate over the array of name words
    for (var k = 0; k < arrayOfNameWords.length; k++)
    {
        if (arrayOfNameWords[k].indexOf('lace') !== -1){
        return k;
        }
    }
    //return the index where 'lace' is found
}

function hasLaceDetails(shoeObject){
    if (shoeObject.name.indexOf('lace') !== -1){
        return true;
    }else{
        return false;
    }
}

//Create helper functions if needed
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
console.log(generateLaceDetails(currentInventory));
