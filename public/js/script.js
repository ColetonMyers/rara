const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "I'm giving you one more chance...",
    "FOOT WARNING ACTIVATED",
    "I am not going to ask again",
    "Ok now this is hurting my feelings",
    "Why are you doing this to me?",
    "sad",
    "much sad",
    "Ok, Lets just start over.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) banner.src = "./public/images/no2.gif";
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size*1.5}px`;
    let total = answers.length;
    // change button text
    if (i < total - 7) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 6) {
        document.body.background="./public/images/foot.gif";
        no_button.innerHTML = answers[i];
        i++;
    }  else if (i < total - 1) {
        document.body.background="./public/images/foot.gif";
        no_button.innerHTML = answers[i];
        i++;
    }   else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
        document.body.background="none";
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./public/images/yes.gif";
    // hide buttons & title div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
    // change background
    document.body.background="./public/images/yes2.gif";
    // hide the question section
    let questionSection = document.getElementsByClassName('title')[0];
    questionSection.style.display = "none";
    // insert break
    let insertbreak = document.getElementsByClassName('break')[0];
    insertbreak.style.display = "flex";
});