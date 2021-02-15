const descriptors = ['Accessible', 'Interactive', 'Attractive', 'Striking', 'Responsive', 'Intuitive', 'Interesting'];
let index = 0;
const changeDescriptor = () => {
    let webSuperlative = descriptors[index];
    document.getElementById('bannerSpan').textContent=webSuperlative;
    index++;
    if (index >= descriptors.length) {
        index = 0;
    }
}

const changeCircleOptions = ['none', 'url("JennySeal.JPG")', 'url("JennyCup.JPG")', 'url("books.JPG")', 'url("flowers.JPG")']
const circleElement = ['circleTwo', 'circleThree']

const changeCircles = () => {
    let i = Math.floor(Math.random()*changeCircleOptions.length);
    let ind = Math.floor(Math.random()*circleElement.length);
    document.getElementById(circleElement[ind]).style.backgroundImage=changeCircleOptions[i];
}

setInterval(changeDescriptor, 2000);
setInterval(changeCircles, 1500);
