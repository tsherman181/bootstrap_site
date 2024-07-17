const themes = ['css/blue.css', 'css/sand.css', 'css/pink.css', 'css/purple.css', 'css/grey.css'];
var rand = Math.floor(Math.random() * themes.length)

function changeColor() {
    rand += 1;
    rand = rand % themes.length;
    var linkElement = document.getElementById('theme-stylesheet');
    linkElement.setAttribute('href', themes[rand]);
    localStorage.setItem('css', themes[rand]);
}

function setTheme(){
    var linkElement = document.getElementById('theme-stylesheet');
    if (!localStorage.getItem('css')) {
        var theme = themes[rand];
        console.log(theme);
        linkElement.setAttribute('href', theme);
        localStorage.setItem('css', theme);
    }
    else {
        linkElement.setAttribute('href', localStorage.getItem('css'));
    }
}

setTheme();