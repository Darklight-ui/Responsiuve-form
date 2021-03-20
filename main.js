 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC9Ignq6d8KxtGAR3G6czSAeIHRKa8KkaA",
  authDomain: "okay-app-57679.firebaseapp.com",
  databaseURL: "https://okay-app-57679.firebaseio.com",
  projectId: "okay-app-57679",
  storageBucket: "okay-app-57679.appspot.com",
  messagingSenderId: "303009299344",
  appId: "1:303009299344:web:4ca99e279bb23e178ed115"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var messageRef = firebase.database().ref('message');

document.getElementById('contactForm').addEventListener('submit', myForm);

function myForm(e) {
  e.preventDefault();
  
  //Get each data value
  var name = getDataVal('name');
  var email = getDataVal('email');
  var phone = getDataVal('phone');
  var company = getDataVal('company');
  var message = getDataVal('message');
  
  saveMessage(name,email,phone,company,message);
  
  //success message

  document.querySelector('.sucMesg').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.sucMesg').style.display = 'none';

  }, 3000);

  //clear form
  document.getElementById('contactForm').reset();

  //removing all
  
}

// Setting all the input value with an id attr.
function getDataVal(id) {
  return document.getElementById(id).value
}


function saveMessage(name,email,phone,company,message) {
  var newMessage = messageRef.push();
  newMessage.set({
    name: name,
    email: email,
    phone: phone,
    company: company,
    message: message
  });
  
}