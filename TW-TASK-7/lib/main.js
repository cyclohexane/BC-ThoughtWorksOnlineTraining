var str = '';

function main(n){
    str = '';
    if(n > 2){
        generalLyrics(n);
        specialLyrics(2);
    }else{
        specialLyrics(n);
    }
    return str;
}

function generalLyrics(n){
    for(let i = n;i > 2;i--){
        str += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
        str += `Take one down and pass it around, ${i-1} bottles of beer on the wall.\n`;
    }
}

function specialLyrics(n){
    switch(n){
        case 2:
        str += `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.\n`;
        case 1:
        str += `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
}

module.exports = main;
