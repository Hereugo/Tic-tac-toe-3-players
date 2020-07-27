function DrawCircle(x , y , r) {
    ctx.beginPath();
    ctx.arc(x , y , r , 0 , 2*Math.PI);
    ctx.stroke();
}
function DrawRect(x , y , r) {
    ctx.beginPath();
    ctx.rect(x , y , 2*r , 2*r);
    ctx.stroke();
}
function DrawCross(x , y , r){
    ctx.beginPath();
    ctx.moveTo(x , y);
    ctx.lineTo(x + 2*r , y + 2*r);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + 2*r , y);
    ctx.lineTo(x , y + 2*r);
    ctx.stroke();
}

function chk() {

    for (let i=0; i<8; i++) {
        for (let j=1; j<=B; j++) {
            let id1 = -1 , id2 = -1 , id3 = -1;
            let w1 = -1 , w2 = -1 , w3 = -1;
            w1 = blocks[j][1];
            id1 = j;
            for (let k=1; k<=B; k++) {
                if (blocks[k][0][0] == blocks[j][0][0] + X[i]*len && blocks[k][0][1] == blocks[j][0][1] + Y[i]*len) {
                    w2 = blocks[k][1];
                    id2 = k;
                    break;
                }
            }

            for (let k=1; k<=B; k++) {
                if (blocks[k][0][0] == blocks[j][0][0] + MX[i]*len && blocks[k][0][1] == blocks[j][0][1] + MY[i]*len) {
                    w3 = blocks[k][1];
                    id3 = k;
                    break;
                }
            }

            if (w1 == w2 && w2 == w3 && w1 != -1) {
                ctx.beginPath();
                ctx.moveTo(blocks[id2][0][0] + len/2 , blocks[id2][0][1] + len/2);
                ctx.lineTo(blocks[id3][0][0] + len/2 , blocks[id3][0][1] + len/2);
                ctx.stroke();
                res = true;
            }
        }
    }
}