let from = document.querySelector('#From');
let to = document.querySelector('#To');
const btn = document.querySelector("#btn");
const val = document.querySelector("#ans");
const inp = document.querySelector("#inp");
const fromImage = document.querySelector("#fromImage");
const toImage = document.querySelector("#toImage");

window.addEventListener("load", () => {
    getCurrency();
});

document.addEventListener("DOMContentLoaded", function () {
    for (let ele in currencyCountryCodes) {
        console.log(ele);
        let newOption = document.createElement("option");
        newOption.value = ele;
        newOption.innerText = ele;

        if (ele === "USD"){
            newOption.selected = true;
        }

        from.appendChild(newOption);
    }

    for (let ele in currencyCountryCodes) {
        console.log(ele);
        let newOption = document.createElement("option");
        newOption.value = ele;
        newOption.innerText = ele;

        if (ele === "PKR"){
            newOption.selected = true;
        }

        to.appendChild(newOption);
    }

    changeFlag();
});


function changeFlag(){
    let flag1 = from.value;
    let flag2 = to.value;
    fromImage.src = `https://flagsapi.com/${flag1.slice(0, 2)}/flat/64.png`;
    toImage.src = `https://flagsapi.com/${flag2.slice(0, 2)}/flat/64.png`;
};

async function getCurrency(){
    const URL = `https://v6.exchangerate-api.com/v6/4d16092f5ddafa55a41e7001/latest/${from.value}`;

    let response = await fetch(URL);
    let data = await response.json();

    const exchangeRate = data.conversion_rates[to.value];
    val.innerText = inp.value + from.value + " = " + parseFloat(exchangeRate * inp.value).toFixed(2) + " " + to.value;
};

btn.addEventListener("click", getCurrency);
