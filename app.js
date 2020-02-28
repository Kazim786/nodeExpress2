const express = require('express'); //object of express now. 
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('home page')
    
})

// creating a handler

// app.get('/', (request, response) => {
//     console.log(request)
//     response.send('Hello world')
// })

// app.get('/about', (request, response) => {
//     response.send('about us page')
// }) 

// app.listen(3000, () => {
//     console.log("running on port 3000")
    
// })

// app.post('/faq', (req, res) => {
//     res.send('Frequently asked Questions')
    
// })

// app.get('/pictures?', (request, response) => {
//     response.send('pictures')
    
// })

// app.listen(3000, () => {
    
//     console.log("listening to port 3000");
// })

// app.get('/cats?(fancy)?', (req, res) => {

//     res.send('my cats are fancy')
    
// })

// app.get('/dog*', (req, res) => {
//     res.send('here are my doggies')
    
// })


// app.get('/contact', (req, res) => {
//     let contact = req.param('name') 

//     console.log(contact);
//     let myString = "contact" + contact;

//     res.send(`contact ${contact}`)
// })


// app.get('/contact/:name', (req, res) => {
    
//     let name = req.param('name');

//     res.send(`your name is ${name}`)


// })

//making a calculator

// app.get('/add/:a/:b/', (req, res) => {
    
//     let a = req.param('a');
//     let b = req.param('b');
//     let c = parseInt(a) + parseInt(b);
    
//     res.send(`<h1 style= "color:green">your total is ${c}</h1>`)
// })

//adding picture(s)

//URL should look like this:
//http://localhost:3000/pics?img1=https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg&img2=https://s23209.pcdn.co/wp-content/uploads/2019/08/Easy-Chicken-TacosIMG_9890.jpg

app.get('/pics', (req, res) => {

    let imgVar1 = req.param('img1')
    let imgVar2 = req.param('img2')
    let imgVar3 = req.param('img3')
    let imgVar4 = req.param('img4')
    res.send(`
    <h1>My Images</h1>
    <img src= '${imgVar1}'/>
    <img src= '${imgVar2}'/>
    <img src= '${imgVar3}'/>
    <img src= '${imgVar4}'/>
    `)
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})

