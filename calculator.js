// Function to calculate age based on the input Date of Birth
function calculateAge() {
    // Get the Date of Birth input value from the user
    var dobInput = document.getElementById('dob').value;

    // Create a new Date object using the input Date of Birth
    var dob = new Date(dobInput);

    // Get the current date
    var today = new Date();

    // Calculate the age by subtracting birth year from the current year
    var age = today.getFullYear() - dob.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    // Compare months and dates to determine if the birthday has occurred
    if (today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    // Get the element where the result will be displayed
    var resultElement = document.getElementById('result');

    // Display the calculated age in the result element
    resultElement.innerText = "Your age is " + age + " years.";
}
