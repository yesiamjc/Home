  // JavaScript code
  document.getElementById("meetingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var meetingId = document.getElementById("meetingIdInput").value;
    var date = document.getElementById("dateInput").value;
    var time = document.getElementById("timeInput").value;
    var topic = document.getElementById("topicInput").value;
    var summary = document.getElementById("summaryInput").value;
    var photo = document.getElementById("photoInput").files[0];
    
    // Process the form data (e.g., send to a repository)
    // You can use AJAX or a form submission library like Axios or Fetch to send the data to the server
    
    // Clear form fields after submission
    document.getElementById("meetingIdInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("topicInput").value = "";
    document.getElementById("summaryInput").value = "";
    document.getElementById("photoInput").value = "";
  });