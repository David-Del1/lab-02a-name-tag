const userNameInput = document.getElementById('input');
const userPronounsInput = document.getElementById('input-2');
const submitBtn = document.getElementById('btn');
const name = document.getElementById('name-text');
const pronouns = document.getElementById('pronouns-text');


const colorArray = ['white', 'red', 'blue', 'green', 'magenta', 'pink', 'purple', 'brown', 'yellow', 'lightblue', 'redorange', 'salmon'];



submitBtn.addEventListener('click', () => {

    const userName = userNameInput.value;
    const userPronouns = userPronounsInput.value;

    if (!userName) {
        alert('You must enter a name!');
    }

    name.textContent = userName;
    pronouns.textContent = userPronouns;

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colorArray[randomColor];
});

function getRandomColor() {
    return Math.floor(Math.random() * colorArray.length);
}