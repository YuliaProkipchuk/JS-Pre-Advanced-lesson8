const form = document.querySelector('.form_words') as HTMLFormElement;
const wordsInput  = document.querySelector('#input_words') as HTMLInputElement;
const addBtn = document.querySelector('.add-btn') as HTMLInputElement;
const resetBtn = document.querySelector('.reset-btn') as HTMLInputElement;
const badWord = document.querySelector('.bad-words') as HTMLParagraphElement;
const textArea  = document.querySelector('#textHere') as HTMLTextAreaElement;
const cenzorBtn = document.querySelector('.cenzor-btn') as HTMLButtonElement;
let prohibited: string[] = [];
let check: number = 0;
addBtn?.addEventListener('click', (e): void => {
    e.preventDefault();
    if (wordsInput.value) {
        let elem: string | undefined = wordsInput.value;
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
})
resetBtn.addEventListener('click', (): void => {
    prohibited.slice(0);
    badWord.innerHTML = `<span>Bad words: </span>`;
    textArea.value = '';
    check = 0;
})
cenzorBtn?.addEventListener('click', (e): void => {
    e.preventDefault();
    if (!textArea.value) {
        textArea.placeholder = 'Please write a text!';
        textArea.classList.add('redBorder');
    }
    else {
        let index: number;
        let firstHalf: string = '';
        let secondHalf: string = '';
        let val: string = textArea.value;
        let cenzor: string = '';
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
                else{
                    break;
                }
            }
        }
    }
});