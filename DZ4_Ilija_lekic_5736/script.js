document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('login-form');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      // Here you would typically check the credentials against a server
      // For this example, let's assume any login is successful
      var username = document.getElementById('username').value;
      if (username.length >= 6 && username.length <= 10) {
        window.location.href = 'uspeh.html';
      } else {
        alert('Username must be between 6 and 10 characters.');
      }
    };
  }

  var dateSpan = document.getElementById('current-date');
  if (dateSpan) {
    var today = new Date();
    dateSpan.textContent = today.toLocaleDateString();
  }
});
