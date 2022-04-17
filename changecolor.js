let generateColor = () => {

    // (Math.random() * 0xFFFFFF << 0).toString(16);
    let random = (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(random);
    // (Math.random() * 0xFFFFFF << 0).toString(16), 
    // Permet definir un code de nombre entier en code exadecimal.
    document.getElementById('carre').style.backgroundColor = "#" + random;

    // const text = document.querySelector('.code');
    // text.innerText = "#" + random;
    document.querySelector('.code').innerText = "#" + random;
}


