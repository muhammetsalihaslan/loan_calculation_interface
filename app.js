const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade")
const tutar = document.querySelector("#tutar")

const hesapla = document.querySelector(".btn-dark")

hesaplaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(select.value === 'Konut Kredisi'){
        oran = 1.29;
    } else if(select.value === 'Ihtiyac Kredisi'){
        oran = 1.99;
    } else if(select.value === 'Arac Kredisi') {
        oran = 1.79;
    }
});