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

async function robot(){
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const vezpaTijucaUrl = `https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
    await page.goto(vezpaTijucaUrl);


    await page.click('span.taLnk.ulBlueLinks');
    console.log('PASSOU DO CLICK')
    
    //CAPTURA OS DADOS DA PRIMEIRA PAGINA 
    let arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
    const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
    const arrayName = await page.evaluate(() => Array.from(document.querySelectorAll('.info_text.pointer_cursor'), element => element.textContent));

    //await Promise.all([
    //    page.waitForNavigation(), 
    //    page.click('a.nav.next.ui_button.primary')
    //]);
    //console.log(arrayDate,"ANTES DE PASSAR PAGINA")
    //VOU PARA SEGUNDA PAGINA
   // await page.click('a.nav.next.ui_button.primary'); //passar para proxima pagina
    //const [response] = await Promise.all([
    //    page.waitForNavigation(), // The promise resolves after navigation has finished
    //    page.click('a.nav.next.ui_button.primary'), // Clicking the link will indirectly cause a navigation
    //  ]);

    //CAPTURAR DADOS DA SEGUNDA PAGINA
    await page.goto('https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-or15-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html');
    const arrayDate2 = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    //console.log(arrayDate2,"SEGUNDO ARRAY");
    arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
    console.log(arrayDate,'22222222222222222222')

    arrayDate.forEach((dateDb, index) => {
        const titleDb = arrayTitle[index];
        const commentDb = arrayComment[index];
        //console.log(dateDb,titleDb, commentDb);

        //review.create({
        //    dateReview: dateDb,
        //    titleReview: titleDb,
        //    commentReview: commentDb
        //});
    })
    //await browser.close();
}
robot();