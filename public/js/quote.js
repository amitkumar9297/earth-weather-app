const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
// const newQ = document.getElementById('newQ');
const tweetme = document.getElementById('tweet');
let realData = "";
let quotesData = "";

const tweetnow = () => {
    let tweetpost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetpost);
}


const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1643);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null ? author.innerText = `Unknown` : (author.innerText = `${quotesData.author}`);
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData[10].author);
        getNewQuotes();
    }
    catch (error) { }
};
tweetme.addEventListener('click', tweetnow);
// newQ.addEventListener('click', getNewQuotes)
getQuotes();