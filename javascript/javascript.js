// List of projects with data

var projectList = [
    {
        name: 'Basic Wireframe',
        url: 'http://misstristin.github.io/HW-Wireframe',
        thumb: ''
    },
    {
        name: 'Basic Portfolio',
        url: 'http://misstristin.github.io/Basic-Portfolio',
        thumb: ''
    },
    {
        name: 'Responsive Portfolio',
        url: 'http://misstristin.github.io/Responsive-Portfolio',
        thumb: ''
    },
    {
        name: 'Psychic Game',
        url: 'http://misstristin.github.io/psychic-game',
        thumb: ''
    },
    {
        name: 'Harry Potter Hangman',
        url: 'http://misstristin.github.io/word-guess-game',
        thumb: ''
    },
    {
        name: 'Crystal BlackJack',
        url: 'http://misstristin.github.io/unit-4-game',
        thumb: ''  
    },
    {
        name: 'Supernatural TV Show Trivia',
        url: 'http://misstristin.github.io/TriviaGame',
        thumb: ''  
    },
    {
        name: 'Monopoly Project Collab',
        url: 'http://tayloraanenson.github.io/monopoly-project',
        thumb: ''  
    },
    {
        name: 'Liri Node App',
        url: 'http://github.com/misstristin/liri-node-app',
        thumb: ''  
    },
    {
        name: 'Bamazon Node + MySQL App',
        url: 'http://github.com/misstristin/bamazon',
        thumb: ''  
    }
];

// Adding project links to page

//variables
var i, li, a;

for (i=0; i<projectList.length; i++){
    li = $('<li>');   
    a = $('<a>');
    a.attr('href', projectList[i].url);
    a.attr('target', '_blank');
    a.text(projectList[i].name);
    li.append(a);
    $('#linkList').append(li);  
}
