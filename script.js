"use scrict";

let box ="";
let color ="";

let selection = document.getElementById("slc");

function display() {
    box =""
    for(let i=0; i< selection.value; i++){
        box+=`<tr>`;
        for(let j=0; j< selection.value; j++){
            if (i==j || j==selection.value-1-i) {
                color = "black";
            }
            else{
                color = "";
            }
            box+=`<td style="background-color: ${color};"></td>`;
        }
        box+=`</tr>`;
    }
    let table_chess = document.getElementById("tbl");
    table_chess.innerHTML = box;

}
selection.addEventListener("change", display);