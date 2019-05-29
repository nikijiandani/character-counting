function countLetters (str){
    //Do something
    let removeSpaces = str.replace(/\s/g, "");
    let letters = {};
    for(var i = 0; i < removeSpaces.length; i++){
        if(!letters[removeSpaces[i]]){
            letters[removeSpaces[i]] = 1;
        } else {
            letters[removeSpaces[i]] += 1;
        }
    }
    console.log(letters);
}
countLetters("lighthouse in the house");