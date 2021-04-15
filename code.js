score = (score) => {
    let par = document.getElementById('par').value;
    let stroke = document.getElementById('stroke').value;

    
    stroke === 1 ? alert("Golf Code: Hole-in-one") : console.log()

    stroke <= (par -2) ? alert("Golf Code: Eagle") : console.log()

    stroke === (par -1) ? alert("Golf Code: Birdie") : console.log()

    stroke === par ? alert("Golf Code: Par") : console.log()
    
    stroke === (par +1) ? alert("Golf Code: Bogey") : console.log()

    stroke === (par +2) ? alert("Golf Code: Double Bogey") : console.log()

    stroke >= (par +3) ? alert("Golf Code: Go Home") : console.log()

}

