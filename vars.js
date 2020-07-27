var W = window.innerWidth;
var H = window.innerHeight;

var canvas = document.getElementById("canvas");
    canvas.width = W;
    canvas.height = H;
var ctx = canvas.getContext("2d");

var blocks = []; // [x,y,C] of i block , C - content in the block
                 //                      C = 0 - empty
                 //                      C = 1 - 1 player
                 //                      C = 2 - 2 player

var len = 20;     // Length of a block

var B = 0;
blocks[++B] = [[W/2 , H/2] , -1];
blocks[++B] = [[W/2 , H/2 + len] , -1];
blocks[++B] = [[W/2 + len , H/2] , -1];
blocks[++B] = [[W/2 + len , H/2 + len] , -1];
for (let i=1; i<=B; i++) {
    ctx.beginPath();
    ctx.rect(blocks[i][0][0] , blocks[i][0][1] , len , len);
    ctx.stroke();    
}


var who = 1;     // Witch player turn

var inBlock = [0 , [-1 , -1]];

var res = false;  //determines who wins

var STOP = false;  // Stops when someone wins

const X = [0 , 0 , 1 , -1 , 1 , -1 , 1 , -1];
const Y = [1 , -1 , 0 , 0 , -1 , -1 , 1 , 1];

const MX = [0 , 0 , -1 , 1 , -1 , 1 , -1 , 1];
const MY = [-1 , 1 , 0 , 0 , 1 , 1 , -1 , -1];