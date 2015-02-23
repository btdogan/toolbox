var links = "";
var link= document.getElementsByTagName("a");
var linkCount = link.length;

for (var i = 0; i < linkCount; i++) {
  console.log(link[i].href);
}
