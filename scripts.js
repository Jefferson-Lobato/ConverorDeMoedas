const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const InputCurrencySelect = document.querySelector(".input-select-currency")
const valueToConvert = document.querySelector(".value-convert")


function convertValues() {
    const valeuConverted = document.querySelector(".converted-value")
    const inputCurencyValue = document.querySelector(".input-currency").value
    const countryFlagConvert = document.querySelector(".convert-currency-logo")

    //CURRENCY QUOTES

    const dolarToday = 5.67
    const euroToday = 6.32
    const libraToday = 7.52
    const bitcoinToday = 589000
    const realToday = 1

    //REAL

     if (InputCurrencySelect.value == "real" & currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue * realToday / dolarToday)
    }

    if (InputCurrencySelect.value == "real" & currencySelect.value == "real") {
        valeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue * realToday / realToday)
    }

    if (InputCurrencySelect.value == "real" & currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue * realToday / libraToday)
    }

    if (InputCurrencySelect.value == "real" & currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue * realToday / bitcoinToday)
    }

    if (InputCurrencySelect.value == "real" & currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue * realToday / euroToday)
    }

    // EURO

    if (InputCurrencySelect.value == "euro" & currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue * euroToday / dolarToday)
    }

    if (InputCurrencySelect.value == "euro" & currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue * euroToday / euroToday)
    }

    if (InputCurrencySelect.value == "euro" & currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue * euroToday / libraToday)
    }

    if (InputCurrencySelect.value == "euro" & currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue * euroToday / bitcoinToday)
    }

    if (InputCurrencySelect.value == "euro" & currencySelect.value == "real") {
        valeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue * euroToday / realToday)
    }

    // LIBRA

    if (InputCurrencySelect.value == "libra" & currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue * libraToday / dolarToday)
    }

    if (InputCurrencySelect.value == "libra" & currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue * libraToday / libraToday)
    }

    if (InputCurrencySelect.value == "libra" & currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue * libraToday / euroToday)
    }

    if (InputCurrencySelect.value == "libra" & currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue * libraToday / bitcoinToday)
    }

    if (InputCurrencySelect.value == "libra" & currencySelect.value == "real") {
        valeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue * libraToday / realToday)
    }

    //DÓLAR

    if (InputCurrencySelect.value == "dolar" & currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue * dolarToday / euroToday)
    }

    if (InputCurrencySelect.value == "dolar" & currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue * dolarToday / dolarToday)
    }

    if (InputCurrencySelect.value == "dolar" & currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue * dolarToday / bitcoinToday)
    }

    if (InputCurrencySelect.value == "dolar" & currencySelect.value == "real") {
        valeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue * dolarToday / realToday)
    }

    if (InputCurrencySelect.value == "dolar" & currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue * dolarToday / libraToday)
    }

    // BTC

    if (InputCurrencySelect.value == "bitcoin" & currencySelect.value == "euro") {
        valeuConverted.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue * bitcoinToday / euroToday)
    }

    if (InputCurrencySelect.value == "bitcoin" & currencySelect.value == "bitcoin") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue * bitcoinToday / bitcoinToday)
    }

    if (InputCurrencySelect.value == "bitcoin" & currencySelect.value == "dolar") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue * bitcoinToday / dolarToday)
    }

    if (InputCurrencySelect.value == "bitcoin" & currencySelect.value == "real") {
        valeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue * bitcoinToday / realToday)
    }

    if (InputCurrencySelect.value == "bitcoin" & currencySelect.value == "libra") {
        valeuConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue * bitcoinToday / libraToday)
    }

    //INPUT CURRENCY SELECTION

    if (InputCurrencySelect.value == "real") {
        countryFlagConvert.src = "./assets/real.png"
        inputCurencyValue.placeholder = "R$ 00.00 "
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue)
    }

    if (InputCurrencySelect.value == "dolar") {
        countryFlagConvert.src = "./assets/dolar.png"
        inputCurencyValue.placeholder = "$ 00.00"
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue)
    }

    if (InputCurrencySelect.value == "euro") {
        countryFlagConvert.src = "./assets/euro.png"
        inputCurencyValue.placeholder = "€ 00.00 "
        valueToConvert.innerHTML = new Intl.NumberFormat("ed-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue)
    }

    if (InputCurrencySelect.value == "libra") {
        countryFlagConvert.src = "./assets/libra.png"
        inputCurencyValue.placeholder = "£ 00.00 "
        valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue)
    }

    if (InputCurrencySelect.value == "bitcoin") {
        countryFlagConvert.src = "./assets/bitcoin.png"
        inputCurencyValue.placeholder = "BTC 00.00 "
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue)
    }

    //EQUAL COINS ERROR !!!

    if (InputCurrencySelect.value == currencySelect.value) {
        alert("Insira moedas diferentes")
        // location.reload()
    }


}

//FUNCTION THAT CHANGES THE FLAGS OF CONVERTED CURRENCIES

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

    if (currencySelect.value == "real") {
        countryFlag.src = "./assets/real.png"
    }

    convertValues()

}

//FUNCTION THAT CHANGES THE FLAGS OF THE CURRENCIES TO BE CONVERTED

function selectInputCurrency() {
    const countryFlagConvert = document.querySelector(".convert-currency-logo")
    const inputCurencyValue = document.querySelector(".input-currency")

    if (InputCurrencySelect.value == "real") {
        countryFlagConvert.src = "./assets/real.png"
        inputCurencyValue.placeholder = "R$ 00.00 "

    }

    if (InputCurrencySelect.value == "dolar") {
        countryFlagConvert.src = "./assets/dolar.png"
        inputCurencyValue.placeholder = "$ 00.00 "

    }

    if (InputCurrencySelect.value == "euro") {
        countryFlagConvert.src = "./assets/euro.png"
        inputCurencyValue.placeholder = "€ 00.00 "

    }

    if (InputCurrencySelect.value == "libra") {
        countryFlagConvert.src = "./assets/libra.png"
        inputCurencyValue.placeholder = "£ 00.00 "

    }

    if (InputCurrencySelect.value == "bitcoin") {
        countryFlagConvert.src = "./assets/bitcoin.png"
        inputCurencyValue.placeholder = "BTC 00.00 "

        convertValues()
    }
}

currencySelect.addEventListener("change", selectChange)
convertButton.addEventListener("click", convertValues)
InputCurrencySelect.addEventListener("change", selectChange, selectInputCurrency)