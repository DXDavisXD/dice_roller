function roll(){
    const diceNumber = document.getElementById("diceNumber").value;
    const display = document.getElementById("display");
    const diceImages = document.getElementById("diceImages");
    const images = [];
    
    for(let i=0; i<diceNumber;i++){
        let value = Math.floor(Math.random()*6)+1;
        images.push(`<img src="Dice_faces/${value}.png">`)
    }

    diceImages.innerHTML = images.join(' ');
}