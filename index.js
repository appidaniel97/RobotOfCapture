const puppeteer = require('puppeteer');

//Db Orm
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_arcca', 'postgres', 'postgres', {
    host: 'arccadb.cvw8aysdigsk.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});

sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database:', error)
})

//Module - Create Table Review
const review = sequelize.define('reviews', {
    dateReview: {
        type: Sequelize.STRING
    },
    titleReview: {
        type: Sequelize.STRING
    },
    commentReview: {
        type: Sequelize.TEXT
    }
})
//review.sync({force: true})

const review2 = sequelize.define('reviews2s', {
    dateReview: {
        type: Sequelize.STRING
    },
    titleReview: {
        type: Sequelize.STRING
    },
    commentReview: {
        type: Sequelize.TEXT
    }
})

const review3 = sequelize.define('reviews3s', {
    dateReview: {
        type: Sequelize.STRING
    },
    titleReview: {
        type: Sequelize.STRING
    },
    commentReview: {
        type: Sequelize.TEXT
    }
})

const review4 = sequelize.define('reviews4s', {
    dateReview: {
        type: Sequelize.STRING
    },
    titleReview: {
        type: Sequelize.STRING
    },
    commentReview: {
        type: Sequelize.TEXT
    }
})

review4.sync({force: true})

async function robot(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const vezpaTijucaUrl = `https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(vezpaTijucaUrl);
    //await page.click('span.taLnk.ulBlueLinks');  
    await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
    //CAPTURA OS DADOS DA PRIMEIRA PAGINA 
    let arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    const arrayName = await page.evaluate(() => Array.from(document.querySelectorAll('.info_text.pointer_cursor div'), element => element.textContent));
    await browser.close();

    //await page.evaluate(()=>document.querySelector('a.nav.next.ui_button.primary').click());
    //arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
       
    //await page.evaluate(()=>document.querySelector('a.nav.next.ui_button.primary').click());
    //arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    //console.log(arrayDate)
    //arrayTitle += await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    //arrayComment += await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    //await page.evaluate(()=>document.querySelector('a.nav.next.ui_button.primary').click());
     
    //arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    //console.log(arrayDate2,"SEGUNDO ARRAY");
    //arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    
    //while(await page.$('a.nav.next.ui_button.primary')){
    //    await page.evaluate(()=>document.querySelector('a.nav.next.ui_button.primary').click());
    //    arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    //    console.log(arrayDate,'1111111111111');
    //    break;
    //};   

    //GRAVAR DADOS NO BANCO
    //arrayDate.forEach((dateDb, index) => {
    //    const titleDb = arrayTitle[index];
    //    const commentDb = arrayComment[index];
    //    console.log(dateDb,titleDb, commentDb);

    //    review.create({
    //        dateReview: dateDb,
    //        titleReview: titleDb,
    //        commentReview: commentDb
    //    });
    //})
    //await browser.close();

   
    
}
robot();

async function robotUrl2(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const url = `https://www.tripadvisor.com/Restaurant_Review-g303631-d15679554-Reviews-Vezpa_Pizzas_Pinheiros-Sao_Paulo_State_of_Sao_Paulo.html`
    await page.goto(url);
    await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());

    const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    const arrayName = await page.evaluate(() => Array.from(document.querySelectorAll('.info_text.pointer_cursor div'), element => element.textContent));
    await browser.close();

    console.log(arrayName)
    //arrayDate.forEach((dateDb, index) => {
    //    const titleDb = arrayTitle[index];
    //    const commentDb = arrayComment[index];
    //    console.log(dateDb,titleDb, commentDb);

    //    review2.create({
    //        dateReview: dateDb,
    //        titleReview: titleDb,
    //        commentReview: commentDb
    //    });
    //})
}
robotUrl2();

async function robotUrl3(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const url = `https://www.tripadvisor.com/Restaurant_Review-g303506-d17542367-Reviews-Nema-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(url);
    await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());

    const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    await browser.close();

    arrayDate.forEach((dateDb, index) => {
        const titleDb = arrayTitle[index];
        const commentDb = arrayComment[index];
        console.log(dateDb);

        review3.create({
            dateReview: dateDb,
            titleReview: titleDb,
            commentReview: commentDb
        });
    })
}
robotUrl3();

async function robotUrl4(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const url = `https://www.tripadvisor.com/Restaurant_Review-g303506-d1636662-Reviews-Vezpa_Pizzas-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(url);
    await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());

    const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    await browser.close();

    arrayDate.forEach((dateDb, index) => {
        const titleDb = arrayTitle[index];
        const commentDb = arrayComment[index];
        console.log(dateDb);

        review4.create({
            dateReview: dateDb,
            titleReview: titleDb,
            commentReview: commentDb
        });
    })
}
robotUrl4();
