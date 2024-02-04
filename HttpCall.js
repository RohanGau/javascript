function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

fetch(url).then(function() {

})
.catch(function() {

});


// $ajax({ name: value, name: value, ...})

$("button").click(function() {
  $ajax({
    url: "demo_test.txt",
    type :"get",
    success: function(result) {
      result = JSON.parse(result),
      console.log(result);
    }
  })
})

// fetch method with timeout
const fetchWithTimeout = (url, delay) => {
  return new Promise((response, reject) => {
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    let timer;
    
    fetch(url, { signal }).then((res) => {
      res.json().then((data) => response(data))
    }).catch((error) => reject(error));

    timer = setTimeout(() => {
      controller.abort;
    }, delay);
  })
}
