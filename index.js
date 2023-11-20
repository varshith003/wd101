document.getElementById('dob').addEventListener('change', function() {
  const dobInput = new Date(this.value);
  const currentDate = new Date();
  const minAge = 18;
  const maxAge = 55;

  const userAge = currentDate.getFullYear() - dobInput.getFullYear();

  if (userAge < minAge || userAge > maxAge) {
    alert('Sorry, only individuals aged between 18 and 55 are allowed.');
    this.value = ''; // Clear the input if not within the specified age range
  }
});
