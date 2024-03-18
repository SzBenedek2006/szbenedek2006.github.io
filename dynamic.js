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
