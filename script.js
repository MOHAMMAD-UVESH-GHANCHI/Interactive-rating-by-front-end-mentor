document.addEventListener("DOMContentLoaded", function() {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.querySelector('.btn-submit');
    const thankYouContainer = document.querySelector('.thank-you');
    const selectedRatingSpan = document.getElementById('selected-rating');
  
    let selectedRating = null;
  
    // Add event listeners to rating buttons
    ratingButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        ratingButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        // Add active class to the clicked button
        button.classList.add('active');
        // Update selectedRating variable
        selectedRating = parseInt(button.dataset.rating);
        // Update selectedRatingSpan content
        selectedRatingSpan.textContent = selectedRating;
      });
    });
  
    // Handle submit button click
    submitButton.addEventListener('click', function() {
      if (selectedRating !== null) {
        // Hide main container, show thank you message
        document.querySelector('.main-container').style.display = 'none';
        thankYouContainer.style.display = 'block';
      } else {
        // Display an alert or message asking the user to select a rating before submitting
        alert("Please select a rating before submitting.");
      }
    });
  
    // Optional: Implement a reset button to rate again
    const resetButton = document.querySelector('.thank-you .btn-submit');
    resetButton.addEventListener('click', function() {
      // Reset selectedRating and display main container
      selectedRating = null;
      ratingButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector('.main-container').style.display = 'block';
      thankYouContainer.style.display = 'none';
    });
  });
  