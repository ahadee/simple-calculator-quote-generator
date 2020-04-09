let quotes = [
    {
        message: "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
        author: 'Dr. Seuss',
        fontFamily: 'font-family: "Quicksand", sans-serif',
        fontColor: 'font-family: "Quicksand", sans-serif;color: mediumblue'
    },
    {
        message: "You always pass failure on the way to success.",
        author: 'Mickey Rooney',
        fontFamily: "font-family: 'Dancing Script', cursive;font-size: 35px",
        fontColor: "font-family: 'Dancing Script', cursive;color: mediumblue;font-size: 35px"
    },
    {
        message: "It always seems impossible until it is done.",
        author: 'Nelson Mandela',
        fontFamily: "font-family: 'Source Code Pro', monospace;",
        fontColor: 'font-family: "Quicksand", sans-serif;color: mediumblue'
    },
    {
        message: "Positive thinking will let you do everything better than negative thinking will.",
        author: 'Zig Ziglar',
        fontFamily: "font-family: 'Quicksand', sans-serif;",
        fontColor: 'font-family: "Quicksand", sans-serif;color: mediumblue'
    }
]

let btnGenerate = document.getElementById('button1');
let divIndex2 = document.getElementsByTagName('div')[2]
let divIndex3 = document.getElementsByTagName('div')[3]

const newQuote = () => {
    divIndex2.innerHTML = ""
    divIndex3.innerHTML = ""

    let randomNumber = Math.floor(Math.random() * (quotes.length));
    let showQuote = document.getElementById('quoteDisplay').innerHTML;
    let showAuthor = document.getElementById('authorDisplay').innerHTML;
    showQuote = quotes[randomNumber].message
    showAuthor = quotes[randomNumber].author
    useFontFamily = quotes[randomNumber].fontFamily
    useFontColor = quotes[randomNumber].fontColor

    let createElementSpan1 = document.createElement('span')
    let createElementSpan2 = document.createElement('span')
    let textQuote = document.createTextNode(showQuote)
    let textAuthor = document.createTextNode(showAuthor)
    createElementSpan1.setAttribute('style', useFontFamily)
    createElementSpan2.setAttribute('style', useFontColor)

    createElementSpan1.appendChild(textQuote)
    createElementSpan2.appendChild(textAuthor)

    divIndex2.appendChild(createElementSpan1)
    divIndex3.appendChild(createElementSpan2)
}




btnGenerate.addEventListener('click', newQuote)

