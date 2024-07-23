const input = document.querySelector('textarea');

function clickUpperCase() {
    const button = document.getElementById('upper-case');
    button.addEventListener('click', () => {
      input.value = input.value.toUpperCase();
    })
}

function clickLowerCase() {
    const button = document.getElementById('lower-case');
    button.addEventListener('click', () => {
      input.value = input.value.toLowerCase();
    })
}

function clickProperCase() {
    const button = document.getElementById('proper-case');
    button.addEventListener('click', () => {
      input.value = input.value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    })
}

function clickSentenceCase() {
    const button = document.getElementById('sentence-case');
    button.addEventListener('click', () => {
      input.value = input.value.split('. ').map(sentence => sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()).join('. ');
    })
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function clickSaveText() {
    const button = document.getElementById('save-text-file');
    button.addEventListener('click', () => {
      download('text.txt', input.value);
    })
}

function start() {
    clickUpperCase();
    clickLowerCase();
    clickProperCase();
    clickSentenceCase();
    clickSaveText();
}

start();