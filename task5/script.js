const form = document.querySelector('.form_words');
const wordsInput = document.querySelector('#input_words');
const addBtn = document.querySelector('.add-btn');
const resetBtn = document.querySelector('.reset-btn');
const badWord = document.querySelector('.bad-words');
const textArea = document.querySelector('#textHere');
const cenzorBtn = document.querySelector('.cenzor-btn');
let prohibited = [];
let check = 0;
addBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (wordsInput.value) {
        let elem = wordsInput.value;
        check === 0 ? badWord.innerHTML += `${elem}` : badWord.innerHTML += `,${elem}`;
        check = 1;
        wordsInput.placeholder = 'word here...';
        wordsInput.classList.remove('redBorder');
        prohibited.push(elem);
        form?.reset();
    }
    else {
        wordsInput.placeholder = 'Please write a word!';
        wordsInput.classList.add('redBorder');
    }
});
resetBtn.addEventListener('click', () => {
    prohibited.slice(0);
    badWord.innerHTML = `<span>Bad words: </span>`;
    textArea.value = '';
    check = 0;
});
cenzorBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!textArea.value) {
        textArea.placeholder = 'Please write a text!';
        textArea.classList.add('redBorder');
    }
    else {
        let index;
        let firstHalf = '';
        let secondHalf = '';
        let val = textArea.value;
        let cenzor = '';
        for (let i = 0; i < prohibited.length; i++) {
            for (let k = 0; k < val.length;) {
                index = val.indexOf(prohibited[i]);
                if (index > -1) {
                    firstHalf = val.slice(0, index);
                    secondHalf = val.slice(index + prohibited[i].length);
                    for (let j = 0; j < prohibited[i].length; j++) {
                        cenzor += '*';
                    }
                    val = firstHalf + cenzor + secondHalf;
                    textArea.value = val;
                    cenzor = '';
                    k = index + prohibited[i].length;
                }
                else {
                    break;
                }
            }
        }
    }
});
