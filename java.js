document.getElementById('btn').addEventListener('click',()=>{
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result")
    let operator = document.getElementById("selectOp").value;

    switch(operator){
        case"plus":
        result.innerHTML =Number(num1)+Number(num2)
        break;
        case"minus":
        result.innerHTML =Number(num1)-Number(num2)
        break;
        case"inmultire":
        result.innerHTML =Number(num1)*Number(num2)
        break;
        case"impartire":
        if(result==0){
            result ="Eroare";
        }
        else(result.innerHTML =Number(num1)/Number(num2))
        break;
        default:
            break;

    }
})