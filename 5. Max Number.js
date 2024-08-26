function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (num <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(` `));


}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
