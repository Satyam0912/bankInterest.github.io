const input1 = document.getElementById('inputBal1');
const input2 = document.getElementById('inputBal2');
const input3 = document.getElementById('inputBal3');
const input4 = document.getElementById('inputBal4');
const input5 = document.getElementById('inputBal5');

let data1 = document.getElementById('data1');
let data2 = document.getElementById('data2');
let data3 = document.getElementById('data3');
let data4 = document.getElementById('data4');
let data5 = document.getElementById('data5');

function calculate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 200000) {

            arr[i] = Number(arr[i]) + Number(arr[i]) * 10 / 100;
            arr[i] = Number(arr[i]) - Number(arr[i]) * 0.2 / 100;

        }
        else if (arr[i] > 100000) {

            arr[i] = Number(arr[i]) + Number(arr[i]) * 5 / 100;
            arr[i] = Number(arr[i]) - Number(arr[i]) * 0.05 / 100;

        }
        else {

            arr[i] = Number(arr[i]) + Number(arr[i]) * 3 / 100;

        }
    }
}

function submit() {
    let arr = [input1.value, input2.value, input3.value, input4.value, input5.value];
    calculate(arr);
    data1.innerText = arr[0];
    data2.innerText = arr[1];
    data3.innerText = arr[2];
    data4.innerText = arr[3];
    data5.innerText = arr[4];
}