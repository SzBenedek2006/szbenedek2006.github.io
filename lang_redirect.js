// Function to redirect users based on their browser language
function redirectBasedOnLanguage() {
    var userLanguage = navigator.language || navigator.userLanguage;
    // Check if the user's language is Hungarian
    if (userLanguage.toLowerCase().startsWith('hu')) {
        // Redirect to the Hungarian version of the website
        window.location.href = 'index_hu.html';
    }
    // If the user's language is not Hungarian, continue loading the English version
}

// Call the function to redirect users based on their language preference
redirectBasedOnLanguage();
