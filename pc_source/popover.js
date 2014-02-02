//http://www.coupondunia.in/jabong
//http://www.coupondunia.in/myntra
//http://www.coupondunia.in/snapdeal
function windowLoaded() {

var tablink;
  // 1) request selected tab
 
  
var ulCoupons=document.createElement("ul");
var li1=document.createElement("li");
var data1,site;
var element=document.getElementById("couponList");
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabArray){
     
	  tablink=tabArray[0].url;
	  parseSite(tablink);
		data1=document.createTextNode(tablink);
		//extract website name from the url. Ex. jabong from http://www.jabong.com  assuming the sitename has .com preceeding it
		console.log(tablink.split(".")[1]);
		site=tablink.split(".")[1];
		
	 li1.appendChild(data1);
	  ulCoupons.appendChild(li1);

element.appendChild(ulCoupons);
   }
);
  
}
function parseSite(url)
{
var page;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        page = document.implementation.createHTMLDocument("");
        page.documentElement.innerHTML = this.responseText;
	}
}
xmlhttp.open("GET", "http://www.coupondunia.in/jabong", true);
xmlhttp.send();
console.log(page.document.getElementById("activeCoupons").childNodes[1].childNodes[1].id);

return "dada";
}
document.addEventListener('DOMContentLoaded', function () {
  windowLoaded();
});