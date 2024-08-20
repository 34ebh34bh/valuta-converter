let convertevValut = {
RUB: {
    RUB: 1,
    USDT: 0.012,
    EUR: 0.011
},
EUR: {
    EUR: 1,
    USDT: 1.09,
    RUB: 93.25
},
USDT: {
    USDT: 1,
    EUR: 0.92,
    RUB: 85.36
    },
};

document.getElementById('btn').addEventListener('click', function(){
    let num = parseInt(document.getElementById('number').value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let out = document.getElementById('out');
    let wrong = document.getElementById('wrong');

    if(!isNaN(num)){
        let converter = num * convertevValut[from][to];
        out.innerHTML = num + " " + from + " " + "=" + " " + converter.toFixed(2) + " " + to;
        out.style.color = "green";
    }else {
        out.innerHTML = 'введите коректную сумму';
        wrong.style.color = "red";
    }
});