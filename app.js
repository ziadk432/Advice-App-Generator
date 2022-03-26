const clear = async() =>{
    document.getElementById('result').innerHTML = `                                                                                                                                                                     `
}


const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();


    document.getElementById('number').innerHTML = "ADVICE # " + data.slip.id;
    document.getElementById('result').innerHTML = `"${data.slip.advice}"`
    console.log(data);
}

fetchAdvice();
clear();


const use = async() =>{
    clear();
    fetchAdvice();
}
