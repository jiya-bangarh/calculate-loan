function Calculateloan(){
    let amount= document.querySelector("#amount")
    let interest= document.querySelector("#interest")
    let month= document.querySelector("#month")
    let p = document.querySelector("p")
    p.textContent="Monthy Amount To Pay :"+ "calculating..."
    let amountvalue = amount.value;
    let interestvalue = interest.value;
    let monthvalue = month.value;
    
    let calmoney= Number(amount.value) * (Number(interest.value)/100);
    let investmoney = Number(amount.value) + calmoney;
    let totalmoney = Number(investmoney) / month.value;
    totalmoney= Math.floor(totalmoney * 10/10.0)
    p.textContent = "Monthy Amount To Pay :" + (totalmoney);
    
}
document.querySelector("#amount").addEventListener("input",Calculateloan)
document.querySelector("#interest").addEventListener("input",Calculateloan)
document.querySelector("#month").addEventListener("input",Calculateloan)