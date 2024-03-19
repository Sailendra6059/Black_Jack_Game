let cards=[]
let card_el=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message")
let got_blackjack=false
let sum=0
function startGame(){
    got_blackjack=false
    cards=[random_el(),random_el()]
    card_el.textContent="Cards: "+(cards[0]+" "+cards[1])
    sum=cards[0]+cards[1]
    render_game()
}
function render_game(){
    sumEl.textContent="Sum: "+(sum)
    let message=""
    if(sum==21){
        message="You've got BlackJack"
        got_blackjack=true
    }
    else if(sum>21){
        message="You're Out of Game"
    }
    else{
        message="Do you want to draw new card?"
    }
    messageEl.textContent=message
}
function random_el(){
    let num=Math.floor(Math.random()*13)+1
    if(num===1){
        return 11 
    }
    else if(num>10){
        return 10
    }
    else{
        return num
    }
}
function new_card(){
    if(got_blackjack==false && sum<21){
        let c=random_el()
        cards.push(c)
        sum+=c
        card_el.textContent+=(" "+c)
        render_game()
    }
    else{
        card_el.textContent=" "
        sumEl.textContent="Start new Game"
        return
    }
}
