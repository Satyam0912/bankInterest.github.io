let dispData = document.getElementById('dispData');
let inputName = document.getElementById('inputName');
let inputBalance = document.getElementById('inputBal');

function submit() {
    if (inputName.value !== '' && Number(inputBalance.value) !== 0) {

        inputBalance.value = Number(inputBalance.value);
        let balAfterInterest;
        if (inputBalance.value > 200000) {

            balAfterInterest = Number(inputBalance.value) + Number(inputBalance.value) * 10 / 100;
            balAfterInterest = Number(balAfterInterest) - Number(balAfterInterest) * 0.2 / 100;

        }
        else if (inputBalance > 100000) {

            balAfterInterest = Number(inputBalance.value) + Number(inputBalance.value) * 5 / 100;
            balAfterInterest = Number(balAfterInterest) - Number(balAfterInterest) * 0.05 / 100;

        }
        else {

            balAfterInterest = Number(inputBalance.value) + Number(inputBalance.value) * 3 / 100;

        }

        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdBalance = document.createElement('td');
        let tdAfterInterest = document.createElement('td');

        tdName.innerText = inputName.value;
        tdBalance.innerText = inputBalance.value;
        tdAfterInterest.innerText = balAfterInterest;

        inputName.value = '';
        inputBalance.value = '';

        tr.appendChild(tdName);
        tr.appendChild(tdBalance);
        tr.appendChild(tdAfterInterest);

        dispData.appendChild(tr);
    }
}
