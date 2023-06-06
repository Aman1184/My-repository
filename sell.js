document.getElementById("serviceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var device = document.getElementById("device").value;
    var model = document.getElementById("model").value;
    var condition = document.getElementById("condition").value;
    var photos = document.getElementById("photos").files;
    
    // Display result
    var result = document.getElementById("result");
    result.innerHTML = "Device: " + device + "<br>";
    result.innerHTML += "Model: " + model + "<br>";
    result.innerHTML += "Condition: " + condition + "<br>";
    
    if (photos.length > 0) {
      result.innerHTML += "Uploaded Photos: <br>";
      for (var i = 0; i < photos.length; i++) {
        result.innerHTML += photos[i].name + "<br>";
      }
    }
  });
  