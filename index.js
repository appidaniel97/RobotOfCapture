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

let dateDb = "";
let titleDb = "";
let commentDb = "";

console.log("Bem vindo ao Roboto!");

const puppeteer = require('puppeteer');


async function robot(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const vezpaTijucaUrl = `https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(vezpaTijucaUrl);
    //await page.screenshot({path: 'example.png'});
    //await browser.close();

    //const dateReviewd = await page.evaluate(() => {
    //    return document.querySelector('.ratingDate').innerHTML
    //})
    //const titleReviewd = await page.evaluate(() => {
    //    return document.querySelector('.noQuotes').innerHTML
    //})

    //console.log(`Data da avaliação:${dateReviewd}`);
    //console.log(`Titulo da avaliação:${titleReviewd}`);
    
    const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    //console.log(arrayDate);

    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    //console.log(arrayTitle);
    //console.log(arrayTitle[5]);

    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent));
    
    for (let index = 0; index < arrayDate.length; index++) {
        const element = arrayDate[index];
        dateDb = element;
        //console.log(element, "elementos")
        console.log(dateDb, "DATAS")
    }   

    for (let index = 0; index < arrayTitle.length; index++) {
        const element = arrayTitle[index];
        titleDb = element;
        //console.log(element, "elementos")
        console.log(titleDb, "TITULOS")
    }

    for (let index = 0; index < arrayComment.length; index++) {
        const element = arrayComment[index];
        commentDb = element;
        //console.log(element, "elementos")
        console.log(commentDb, "COMENTARIOS")
    }


}

robot();
    