const convertButton = document.querySelector(".convert-button")
const coinSelect = document.querySelector(".coin-select")
const coinConvertFrom = document.querySelector(".coin-convert-from")
const inputCurrencyValue = document.querySelector(".input-currency").value


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".coin-to-convert") //moeda a ser convertida
    const currencyValueConverted = document.querySelector(".converted-coin") //conversão para essa moeda
//inputCurrencyValue deve receber o valor e mudar a moeda base para o cálculo

    const dolarValue = 6.08
    const euroValue = 6.37
    const poundValue = 7.67
    const brlValue = 1

    const usdDolarValue = 1
    const usdEuroValue = 1.05
    const usdPoundValue = 1.26
    const usdBrlValue = 0.16

    const pDolarValue = 0.79
    const pEuroValue = 0.83
    const pPoundValue = 1
    const pBrlValue = 0.13

    const eDolarValue = 0.96
    const eEuroValue = 1
    const ePoundValue = 1.21
    const eBrlValue = 0.16


    if (coinConvertFrom.value == "brl"){

        if(coinSelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue / dolarValue)
        }
        if(coinSelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
            }).format(inputCurrencyValue / euroValue)
        }
        if(coinSelect.value == "pound"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
            }).format(inputCurrencyValue / poundValue)
        }
        if(coinSelect.value == "brl"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrencyValue / brlValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)


    } else if (coinConvertFrom.value == "dolar"){

        if(coinSelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue / usdDolarValue)
        }
        if(coinSelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(inputCurrencyValue / usdEuroValue)
        }
        if(coinSelect.value == "pound"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
            }).format(inputCurrencyValue / usdPoundValue)
        }
        if(coinSelect.value == "brl"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrencyValue / usdBrlValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)


    } else if (coinConvertFrom.value == "euro"){

        if(coinSelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue / eDolarValue)
        }
        if(coinSelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(inputCurrencyValue / eEuroValue)
        }
        if(coinSelect.value == "pound"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
            }).format(inputCurrencyValue / ePoundValue)
        }
        if(coinSelect.value == "brl"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrencyValue / eBrlValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)


    } else if (coinConvertFrom.value == "pound"){

        if(coinSelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue / pDolarValue)
        }
        if(coinSelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(inputCurrencyValue / pEuroValue)
        }
        if(coinSelect.value == "pound"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
            }).format(inputCurrencyValue / pPoundValue)
        }
        if(coinSelect.value == "brl"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrencyValue / pBrlValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
    }

}   


function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector("#currency-image")

    if (coinSelect.value == "brl") {
        currencyName.innerHTML = "BRL Real"
        currencyImage.src = './assets/brasil.png'
    }
    if (coinSelect.value == "dolar") {
        currencyName.innerHTML = "USD Dólar"
        currencyImage.src = './assets/eua.png'
    }
    if (coinSelect.value == "euro") {
        currencyName.innerHTML = "EUR Euro"
        currencyImage.src = './assets/euro.png'
    }
    if (coinSelect.value == "pound") {
        currencyName.innerHTML = "GBP Pound sterling"
        currencyImage.src = './assets/libra.png'
    }
    if (coinSelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = './assets/bitcoin.png'
    }

convertValues()
}

function changeFirstCurrency () {
    const currencyNameToConvert = document.getElementById("to-convert-currency")
    const currencyImageToConvert = document.querySelector("#to-convert-image")

    if (coinConvertFrom.value == "brl") {
        currencyNameToConvert.innerHTML = "BRL Real"
        currencyImageToConvert.src = './assets/brasil.png'
    }
    if (coinConvertFrom.value == "dolar") {
        currencyNameToConvert.innerHTML = "USD Dólar"
        currencyImageToConvert.src = './assets/eua.png'
    }
    if (coinConvertFrom.value == "euro") {
        currencyNameToConvert.innerHTML = "EUR Euro"
        currencyImageToConvert.src = './assets/euro.png'
    }
    if (coinConvertFrom.value == "pound") {
        currencyNameToConvert.innerHTML = "GBP Pound sterling"
        currencyImageToConvert.src = './assets/libra.png'
    }
    if (coinConvertFrom.value == "btc") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = './assets/bitcoin.png'
    }

}

coinConvertFrom.addEventListener("change", changeFirstCurrency)
coinSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)