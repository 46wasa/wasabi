var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wasabi-image.PNG') {
      myImage.setAttribute ('src','images/scheat-image.png');
    } else {
      myImage.setAttribute ('src','images/wasabi-image.PNG');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('あなたの名前は？');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'シェアトは好き？' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'シェアトは好き？' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }