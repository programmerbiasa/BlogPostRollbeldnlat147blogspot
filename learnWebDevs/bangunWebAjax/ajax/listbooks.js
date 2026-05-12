var xmlhttp;

function loadXMLDoc(url)
{
xmlhttp= null;

//Mozilla, etc
if (window.XMLHttpRequest)
{
    xmlhttp = new XMLHttpRequest();
}
    
//IE
else if (window.ActiveXObject)
{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

if (xmlhttp!=null) {
    xmlhttp.onreadystatechange=onResponse;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
} else {
    alert("Browser tidak support XMLHTTP");
}
}

function checkreadystate(obj) {
    if(obj.readyState == 4) {
        if(obj.status == 200) {
            return true;
        } else {
            alert("Problem retrieving XML Data.");
        }
    }
}

function onResponse() {
    if (checkreadystate(xmlhttp)) {
        var response = xmlhttp.responseXML.documentElement;
        txt = "<table border='1'>";
        x = response.getElementsByTagName("book");
        for (i=0;i<x.length;i++)        {
            txt = txt +"<tr>";
            xx = x[i].getElementsByTagName("title");
        {
        try {
            txt = txt + "<td>" + xx[0].firstChild.data + "</td>";
        } catch(er) {
            txt = txt + "<td></td>";
        }
    }
    
    xx = x[i].getElementsByTagName("author");
    
    try {
        txt = txt + "<td>" + xx[0].firstChild.data + "</td>";
    } catch (er) {
            txt = txt + "<td></td>";
    }
    txt = txt + "</tr>";
    }
    txt = txt + "</table>";
    document.getElementById('copy').innerHTML = txt;
 }
}