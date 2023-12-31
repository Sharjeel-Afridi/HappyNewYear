const input = document.getElementById('input');
const submitbtn = document.getElementById('submit');
const imagediv = document.getElementById('image');
const wishContainer = document.getElementById('wishContainer');



submitbtn.addEventListener('click', async () => {
  const username = input.value;
  wishContainer.classList.add('show');
  if( username != ""){
    wishContainer.innerHTML = '';
    const userData = await getPublicUserData(username);
    const image = userData.avatar_url;
    
    localStorage.setItem('image', image);
    const wishApiResponce = await fetch("https://api.quotable.io/random?tags=Love").then((resp)=>{return resp.json()}).then(data => {return data});
    const wishText = wishApiResponce.content;
    
    generateWish(image, wishText);
  }
});



async function getPublicUserData(username) {
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(apiUrl);
    const userData = await response.json();

    return userData;
  } catch (error) {
    console.error('Error fetching public user data:', error);
  }
}

function generateWish(image, wishText) {
  const wishPage = document.createElement('div');
  wishPage.setAttribute('id', 'wish-div');
  
  wishPage.innerHTML = `<h1>HAPPY NEW YEAR 2024</h1> <img src='${image}'>`;
  
  
  const wishParagraph = document.createElement('p');
  wishParagraph.textContent = wishText;
  wishPage.appendChild(wishParagraph);

  wishContainer.appendChild(wishPage);
}


  