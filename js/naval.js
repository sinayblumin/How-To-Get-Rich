// Naval Ravikamt's "How To Get Rich (Without Getting Lucky)" as a simple web app made by Sinay Blumin.
// Open Sourced with an MIT licence.

// Tweets Array
const tweets = [
    'Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.',
    'Understand that ethical wealth creation is possible. If you secretly despise wealth, it will elude you.',
    'Ignore people playing status games. They gain status by attacking people playing wealth creation games.',
    'You’re not going to get rich renting out your time. You must own equity – a piece of a business – to gain your financial freedom.',
    'You will get rich by giving society what it wants but does not yet know how to get. At scale.',
    'Pick an industry where you can play long term games with long term people.',
    'The Internet has massively broadened the possible space of careers. Most people haven’t figured this out yet.',
    'Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.',
    'Pick business partners with high intelligence, energy, and, above all, integrity.',
    'Don’t partner with cynics and pessimists. Their beliefs are self-fulfilling.',
    'Learn to sell. Learn to build. If you can do both, you will be unstoppable.',
    'Arm yourself with specific knowledge, accountability, and leverage.',
    'Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.',
    'Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.',
    'Building specific knowledge will feel like play to you but will look like work to others.',
    'When specific knowledge is taught, it’s through apprenticeships, not schools.',
    'Specific knowledge is often highly technical or creative. It cannot be outsourced or automated.',
    'Embrace accountability, and take business risks under your own name. Society will reward you with responsibility, equity, and leverage.',
    'The most accountable people have singular, public, and risky brands: Oprah, Trump, Kanye, Elon.',
    '“Give me a lever long enough, and a place to stand, and I will move the earth.” – Archimedes',
    'Fortunes require leverage. Business leverage comes from capital, people, and products with no marginal cost of replication (code and media).',
    'Capital means money. To raise money, apply your specific knowledge, with accountability, and show resulting good judgment.',
    'Labor means people working for you. It’s the oldest and most fought-over form of leverage. Labor leverage will impress your parents, but don’t waste your life chasing it.',
    'Capital and labor are permissioned leverage. Everyone is chasing capital, but someone has to give it to you. Everyone is trying to lead, but someone has to follow you.',
    'Code and media are permissionless leverage. They’re the leverage behind the newly rich. You can create software and media that works for you while you sleep.',
    'An army of robots is freely available – it’s just packed in data centers for heat and space efficiency. Use it.',
    'If you can’t code, write books and blogs, record videos, do podcasts.',
    'Leverage is a force multiplier for your judgement.',
    'Judgement requires experience, but can be built faster by learning foundational skills.',
    'There is no skill called “business.” Avoid business magazines and business classes.',
    'Study microeconomics, game theory, psychology, persuasion, ethics, mathematics, and computers.',
    'Reading is faster than listening. Doing is faster than watching.',
    'You should be too busy to “do coffee”, while still keeping an uncluttered calendar.',
    'Set and enforce an aspirational personal hourly rate. If fixing a problem will save less than your hourly rate, ignore it. If outsourcing a task will cost less than your hourly rate, outsource it.',
    'Work as hard as you can. Even though who you work with and what you work on are more important than how hard you work.',
    'Become the best in the world at what you do. Keep redefining what you do until this is true.',
    'There are no get rich quick schemes. That’s just someone else getting rich off you.',
    'Apply specific knowledge, with leverage, and eventually you will get what you deserve.',
    "When you’re finally wealthy, you’ll realize that it wasn't what you were seeking in the first place. But that's for another day.",
];

// .random Prototype
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  };


// prev() & next() functions
let current = 0;

function next() {
    current = current + 1; 
    current = current % tweets.length; 
    return tweets[current]; 
}

function prev() {
    if (current === 0) { 
        current = tweets.length; 
    }
    current = current - 1; 
    return tweets[current]; 
}

// Define tweets <div>
const tweet = document.querySelector('#tweet');
tweet.innerHTML = tweets[0];

// Previous Button
const previousButton = document.querySelector('.previous');
previousButton.addEventListener('click', () => tweet.innerHTML = prev(), true);

// Random Button
const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => tweet.innerHTML = tweets.random(), true);

// Next Button
const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => tweet.innerHTML = next(), true);

// About Div open & close
const aboutLink = document.querySelector('.alink');
const aboutDiv = document.querySelector('#about');
aboutLink.addEventListener('click', () => {
    aboutDiv.classList.add("about"); 
    aboutDiv.classList.remove("hidden");
}, true);
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => aboutDiv.classList.add("hidden"));

// Dark Mode
const body = document.querySelector('body');
const darkMode = document.querySelector('.darkmode');
darkMode.addEventListener('click', () => {
    if(body.className.match("light")) {
        body.classList.add("dark-on"),
        body.classList.remove("light")
        aboutDiv.classList.add("dark-on"),
        aboutDiv.classList.remove("light")
    } else {
        body.classList.add('light')
        body.classList.remove('dark-on')
        aboutDiv.classList.add('light')
        aboutDiv.classList.remove('dark-on')
    }
}, true);