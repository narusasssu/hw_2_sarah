//const chess = ['##', '##'];
//
//for (i = 0; i < 7; i++){
//    if()
//}

//var line= ['# # # #', ' # # # #']
//
//for (var i = 0; i < 7; i ++) {
//     console.log(line[i & 1]);
//}


var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
    board += " ";
    else
        board += "#";
    }
    board += "\n";
}

console.log(board)