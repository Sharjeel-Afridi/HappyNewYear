function generateWish() {
    const socialLink = document.getElementById('socialLink').value;
    // Extract username or ID from the social media link (you need to implement this logic)

    // Create a new wish page dynamically
    const wishPage = document.createElement('a');
    wishPage.href = `wish.html?user=${username}`;
    wishPage.innerText = `Wish for ${username}`;

    // Append the wish link to the container
    document.getElementById('wishContainer').appendChild(wishPage);
}


async function getPublicUserData(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
  
    try {
      const response = await fetch(apiUrl);
      const userData = await response.json();
  
      // Extract and use the data as needed
      console.log(userData);
    } catch (error) {
      console.error('Error fetching public user data:', error);
    }
  }
  
  // Example usage
  const username = 'exampleUser';
  getPublicUserData(username);
  