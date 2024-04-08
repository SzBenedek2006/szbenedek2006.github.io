// Fetch profile image from GitHub or Instagram
fetchProfileImage();

async function fetchProfileImage() {
    try {
        // Fetching profile image from GitHub
        let githubResponse = await fetch('https://api.github.com/users/SzBenedek2006');
        let githubData = await githubResponse.json();
        document.getElementById('profile-image').src = githubData.avatar_url;
    } catch (error) {
        console.error('Error fetching GitHub profile image:', error);
        try {
            // Fetching profile image from Instagram
            let instagramResponse = await fetch('https://www.instagram.com/szbenedek2006/?__a=1');
            let instagramData = await instagramResponse.json();
            let profilePicURL = instagramData.graphql.user.profile_pic_url_hd;
            document.getElementById('profile-image').src = profilePicURL;
        } catch (error) {
            console.error('Error fetching Instagram profile image:', error);
        }
    }
}

// Dynamically load high res background
var img = new Image();

// Set the src attribute to the URL of the high-resolution image
img.src = 'background-image.jpg';

// When the image is loaded, apply it as the background
img.onload = function() {
    document.body.style.backgroundImage = 'url(' + img.src + ')';
    document.body.classList.add('loaded');
};


// Button
document.addEventListener('DOMContentLoaded', function () {
            var menuButton = document.getElementById('toggle-menu');
            var menu = document.getElementById('menu');
            var headerContents = document.querySelector('.header');

            menuButton.addEventListener('click', function () {
                if (menu.style.display === 'none') {
                    menu.style.display = 'block';
                    headerContents.style.display = 'none'; // Hide header contents
                } else {
                    menu.style.display = 'none';
                    headerContents.style.display = 'block'; // Show header contents
                }
            });
        });
