//Commands for capture date in sites
//document.querySelector('.ratingDate').innerHTML - Date of reviewed
//document.querySelector('.noQuotes').innerHTML - Title about review
//Array title
    //Array.from(document.querySelectorAll('.noQuotes')).map(function(element, index, arrayBase){
    //     //console.log(element.textContent);
    //     const arrayTitle = element.textContent;
    //     return arrayTitle
    //})

//document.querySelector('.partial_entry').innerHTML - Comment about review

console.log("Bem vindo ao Roboto!");

const puppeteer = require('puppeteer');


async function robot(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const vezpaTijucaUrl = `https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(vezpaTijucaUrl);
    await page.screenshot({path: 'example.png'});
    //await browser.close();

    const dateReviewd = await page.evaluate(() => {
        return document.querySelector('.ratingDate').innerHTML
    })
    const titleReviewd = await page.evaluate(() => {
        return document.querySelector('.noQuotes').innerHTML
    })

    console.log(`Data da avaliação:${dateReviewd}`);
    console.log(`Titulo da avaliação:${titleReviewd}`);
    
    //const arrayTitle = await page.evaluate(() => {
    //    Array.from(document.querySelectorAll('.noQuotes')).map(function(element, index, arrayBase){
    //        const array = element.textContent;
    //         return array
    //    })
    //});
    //console.log(array)
}

robot();
    