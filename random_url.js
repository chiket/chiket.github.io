var url = new Array(); 
url[0] = 'https://www.amazon.com/';
url[1] = 'https://www.yahoo.com/'; 
location.assign(url[Math.round(Math.random()*(url.length-1))]);
