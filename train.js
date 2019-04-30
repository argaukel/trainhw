var config = {
    apiKey: "AIzaSyAgVab2wUJkERIRCdQVLarTyHZlb3ty3mQ",
    authDomain: "trildb-ddca5.firebaseapp.com",
    databaseURL: "https://trildb-ddca5.firebaseio.com",
    projectId: "trildb-ddca5",
    storageBucket: "trildb-ddca5.appspot.com",
    messagingSenderId: "741857016385"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    console.log("click");

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var arrival = $("#arrival-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        frequency: frequency,
        arrival: arrival
    };
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.arrival);
  
    alert("Train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#arrival-input").val("");

    // console.log(trainName, destination, frequency, arrival);

  });

  database.ref().on("child_added", function(childSnapshot) {


  })
