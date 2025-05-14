const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const valeuConverted = document.querySelector(".converted-value")
    const inputCurencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".value-convert")
    const dolarToday = 5.2
    const euroToday = 6.5
    const libraToday = 10
    const bitcoinToday = 19000

    if (currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue / bitcoinToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurencyValue)

}

function selectChange() {
    const countryFlag = document.querySelector(".converted-currency-logo")
    if (currencySelect.value == "dolar") {
        countryFlag.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        countryFlag.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        countryFlag.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        countryFlag.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", selectChange)
convertButton.addEventListener("click", convertValues)