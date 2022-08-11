function getSimpleNumbers() {
    let countOfSimpleNum = Number(process.argv[2]);

    if (isNaN(countOfSimpleNum)) {
        console.log('Вы указали не верный параметр');
        return ;
    }

    let SimpleNumbers = [];
    let check_number = 1;
    while (true) {
        check_number++;
        let dividers = [2,3,4,5,6,7,8,9];
        delete dividers[dividers.indexOf(check_number, 0)];
        
        let result = 0;
        dividers.forEach((item, index, array) => {
            if (check_number%item == 0) {
                result++;
            }
        });

        if (result == 0)  {
            SimpleNumbers.push(check_number);
            if (SimpleNumbers.length == countOfSimpleNum){
                break;
            } 
        }

    }
    return SimpleNumbers;
}

console.time('TimeEnd')
getSimpleNumbers()
console.timeEnd('TimeEnd')