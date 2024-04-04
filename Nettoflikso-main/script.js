const backgrounds = [
    {
        imageUrl: './Movies/spiderman.png',
        title: 'Spider-man:\nAcross the Spyderverse',
        content: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
        genre1: 'Animation', genre2: 'Adventure'
    },
    {
        imageUrl: './Movies/extraction.jpg',
        title: 'Extraction 2',
        content: 'Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster\'s imprisoned family.',
        genre1: 'Action', genre2: 'Thriller'
    },
    {
        imageUrl: './Movies/oppenheimer.jpg',
        title: 'Oppenheimer',
        content: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.',
        genre1: 'Action', genre2: 'History'
    },
    {
        imageUrl: './Movies/freedom.jpg',
        title: 'Sound of freedom',
        content: 'After rescuing a boy from ruthless child traffickers, a federal agent learns the boy\'s sister is still captive and decides to embark on a dangerous mission to save her.',
        genre1: 'Action', genre2: 'Mystery'
    },
    {
        imageUrl: './Movies/covenant.jpg',
        title: 'Covenant',
        content: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of gruelling terrain.',
        genre1: 'Action', genre2: 'Thriller'
    },
];

let currentBackgroundIndex = 0;

function updateBackground() {
    const section = document.getElementById('backgroundSection');
    const h2 = section.querySelector('h2');
    const p = section.querySelector('p');
    const genre1 = document.getElementById("genre1");
    const genre2 = document.getElementById("genre2");

    section.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex].imageUrl}')`;

    h2.textContent = backgrounds[currentBackgroundIndex].title;
    p.textContent = backgrounds[currentBackgroundIndex].content;
    genre1.textContent = backgrounds[currentBackgroundIndex].genre1;
    genre2.textContent = backgrounds[currentBackgroundIndex].genre2;
}
document.getElementById('prev-button').addEventListener('click', () => {
    currentBackgroundIndex--;
    if (currentBackgroundIndex < 0) {
        currentBackgroundIndex = backgrounds.length - 1;
    }
    updateBackground();
});
document.getElementById('next-button').addEventListener('click', () => {
    currentBackgroundIndex++;
    if (currentBackgroundIndex >= backgrounds.length) {
        currentBackgroundIndex = 0;
    }
    updateBackground();
});

updateBackground();

const playButton = document.getElementById('play-button');
const playIcon = document.getElementById('play-icon');
const downloadButton = document.getElementById('download-button');
const downloadIcon = document.getElementById('download-icon');

const hoverImageSrc = ['./Icons/bplay.svg', './Icons/bdownload.svg'];

// Event listener for mouse hover
playButton.addEventListener('mouseenter', () => {
    playIcon.src = hoverImageSrc[0];
    playIcon.style.transform = 'scale(1.1)';
});


// Event listener for mouse leave (to reset the image to the original)
playButton.addEventListener('mouseleave', () => {
    playIcon.src = './Icons/play.svg';
    playIcon.style.transform = 'scale(1)';
});

// Same thing for download button
downloadButton.addEventListener('mouseenter', () => {
    downloadIcon.src = hoverImageSrc[1];
    downloadIcon.style.transform = 'scale(1.1)';
});
downloadButton.addEventListener('mouseleave', () => {
    downloadIcon.src = './Icons/download.svg';
    downloadIcon.style.transform = 'scale(1)';
});


