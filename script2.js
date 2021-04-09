let btn = document.getElementById("button");
let num = document.getElementById("input");
let output = document.getElementById("output");

let i=0;

let result= Math.ceil(Math.random()*10)
console.log(result)

btn.addEventListener("click", function () {
    if (i<2){
        if (num.value!=result){
            output.innerHTML=`Ban doan sai, ban con ${2-i} luot doan`
        }
        else{
            output.innerHTML='Chúc mừng bạn đã thắng cuộc'
        }
        i++
    }
    else if (i=2 && num.value!=result)
        output.innerHTML=`Bạn đã thua! Kết quả đúng là: ${result}`

    else output.innerHTML=`Chúc mừng bạn đã chiến thắng!`
});