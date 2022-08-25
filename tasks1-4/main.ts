// task 1
let city:string;
city = 'Київ';
city = 'Львів';
let addres: string = city.slice();
console.log(addres);

// task 2
let num: any = prompt('Напишіть число');
+num=== 0 ? console.log('Число 0') : +num % 2 == 0 ? console.log('Число парне') : console.log('Число непарне');
// task 3
function max(...args: Array<number>): number {
    let max = 0;
    args.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    })
    return max;
}
console.log(max(5,-2,30,6));
// task 4
function getSqrt(number?: unknown): string {
    if (typeof number == 'number') {
        return (number > 0 ? `Квадратний корінь з ${number} дорівнює ${Math.sqrt(number)}` : 'Введіть додатнє число');
    }
    else if (!number) {
        return 'Будь ласка, введіть число!';
    }
    else {
        return 'Повинно бути числове значення';
    }
}
console.log(getSqrt(256));