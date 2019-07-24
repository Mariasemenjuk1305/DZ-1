let getSel = a => document.querySelector(a);

getSel('.edit').onclick = function () {
    let text = getSel('.txt1').innerHTML;
    getSel('#txt3').innerHTML += text;
    getSel('.txt2').style.visibility = 'visible';
    getSel('.txt4').style.visibility = 'hidden';
    getSel('.txt2').style.height = '350' + 'px';
    getSel('.f1').style.visibility = 'visible';
    getSel('.f1').style.height = '350' + 'px';
}

getSel('.save').onclick = function () {
    let newText = getSel('#txt3').value;
    getSel('.txt1').innerHTML = newText;

    let tableN = document.getElementsByTagName('td');
    for (let i = 0; i < tableN.length; i++) {
        tableN[i].style.width = getSel('#table3').value + 'px';
        tableN[i].style.height = getSel('#table4').value + 'px';
        tableN[i].style.borderWidth = getSel('#table5').value;
        let stBorder = document.getElementById('typeBorder');
        tableN[i].style.borderStyle = stBorder.value;
        let colBorder = document.getElementById('colorBorder');
        tableN[i].style.borderColor = colBorder.value;
    }

    let typeLi = getSel('#typeMarks').value;
    liNew = document.getElementsByTagName('li');
    for (let j = 0; j < liNew.length; j++) {
        liNew[j].style.listTypeStyle = typeLi;
    }
}

getSel('.style').onclick = function () {
    getSel('.txt2').style.visibility = 'hidden';
    getSel('.txt2').style.height = '0' + 'px';
    getSel('.f1').style.visibility = 'hidden';
    getSel('.f1').style.height = '0' + 'px';
    getSel('.txt4').style.visibility = 'visible';
    getSel('.txt4').style.height = '350' + 'px';

}

getSel('#colorText').onclick = function () {
    getSel('.txt4_3').style.visibility = 'visible';
    getSel('.box1').onclick = () => {
        getSel('.txt1').style.color = 'red';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box2').onclick = () => {
        getSel('.txt1').style.color = 'blue';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box3').onclick = () => {
        getSel('.txt1').style.color = 'green';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box4').onclick = () => {
        getSel('.txt1').style.color = 'gray';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
    getSel('.box5').onclick = () => {
        getSel('.txt1').style.color = 'yellow';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box6').onclick = () => {
        getSel('.txt1').style.color = 'purple';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box7').onclick = () => {
        getSel('.txt1').style.color = 'white';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
    getSel('.box8').onclick = () => {
        getSel('.txt1').style.color = 'violet';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box9').onclick = () => {
        getSel('.txt1').style.color = 'brown';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
}

getSel('#bagckroundColor').onclick = function () {
    getSel('.txt4_3').style.visibility = 'visible';

    getSel('.box1').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'red';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box2').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'blue';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box3').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'green';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box4').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'gray';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
    getSel('.box5').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'yellow';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box6').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'purple';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box7').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'white';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
    getSel('.box8').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'violet';
        getSel('.txt4_3').style.visibility = 'hidden';
    }

    getSel('.box9').onclick = () => {
        getSel('.txt1').style.backgroundColor = 'brown';
        getSel('.txt4_3').style.visibility = 'hidden';
    }
}
// choose font size

getSel('#check12').onclick = function () {
    getSel('.txt1').style.fontSize = '12' + 'px';
}

getSel('#check14').onclick = function () {
    getSel('.txt1').style.fontSize = '14' + 'px';
}

getSel('#check16').onclick = function () {
    getSel('.txt1').style.fontSize = '16' + 'px';
}

getSel('#check18').onclick = function () {
    getSel('.txt1').style.fontSize = '18' + 'px';
}

// choose font family
let f1 = document.forms['fontS'];
f1.fontFamily1.onchange = () => {
    for (let i = 0; i < f1.fontFamily1.options.length; i++) {
        if (f1.fontFamily1.options[i].selected) {
            getSel('.txt1').style.fontFamily = f1.fontFamily1.value;
        }
    }
}

// choose font weight
getSel('#bold').onclick = function () {
    getSel('.txt1').style.fontWeight = 'bold';
}

getSel('#italic').onclick = function () {
    getSel('.txt1').style.fontStyle = 'italic';
}

// choose what do you want

getSel('.add').onclick = function () {
    getSel('.txt1').style.visibility = 'hidden';
    getSel('.txt1').style.minHeight = '0' + 'px';
    getSel('.txt2').style.visibility = 'hidden';
    getSel('.txt2').style.height = '0' + 'px';
    getSel('.txt4').style.visibility = 'hidden';
    getSel('.txt4').style.height = '0' + 'px';
    getSel('.f1').style.visibility = 'hidden';
    getSel('.f1').style.height = '0' + 'px';
    getSel('.but').style.visibility = 'hidden';
    getSel('.but').style.height = '0' + 'px';
    getSel('.choose').style.visibility = 'visible';
    getSel('.choose').style.marginTop = '-270' + 'px';
    getSel('#formTable2').style.height = '0' + 'px';
    getSel('#formTable').style.height = '0' + 'px';
}

let f2 = document.forms['f2'];
getSel('#checkTable').onclick = function () {
    getSel('#formTable').style.visibility = 'visible';
    getSel('#formTable').style.height = '600' + 'px';
    getSel('#formTable2').style.visibility = 'hidden';
    getSel('#formTable2').style.height = '0' + 'px';

}

getSel('#checkList').onclick = function () {
    getSel('#formTable2').style.visibility = 'visible';
    getSel('#formTable2').style.height = '280' + 'px';
    getSel('#formTable2').style.marginTop = '-12' + 'px';
    getSel('#formTable').style.visibility = 'hidden';
    // getSel('.choose_1').style.visibility = 'visible';
    getSel('#formTable').style.height = '0' + 'px';
    // getSel('.choose_2').style.height = '0' + 'px';

}
let textArea = document.forms['f1'];
getSel('.butCreat').onclick = () => {
    let tr_S = getSel('#table1').value;
    console.log(tr_S);
    let td_S = getSel('#table2').value;
    console.log(td_S);
    let tableNew = '';
    tableNew = '<table>';
    for (let i = 0; i < tr_S; i++) {
        tableNew += '<tr> text </tr>';
        for (let j = 0; j < td_S; j++) {
            tableNew += '<td> text </td>';
        }
    }
    tableNew += '</table>'
    getSel('#txt3').textContent += tableNew;

    document.getElementById('formTable').reset();
    getSel('#formTable').style.visibility = 'hidden';
    getSel('#formTable').style.height = '0' + 'px';
    getSel('.choose').style.visibility = 'hidden';
    getSel('.choose').style.height = '0' + 'px';
    getSel('.choose_2').style.visibility = 'hidden';
    getSel('.choose_2').style.height = '0' + 'px';

    getSel('.txt1').style.visibility = 'visible';
    getSel('.txt2').style.visibility = 'visible';
    getSel('.f1').style.visibility = 'visible';
    getSel('.but').style.visibility = 'visible';
    getSel('.txt1').style.minHeight = '450' + 'px';
    getSel('.txt2').style.height = '350' + 'px';
    getSel('.f1').style.height = '350' + 'px';
    getSel('.but').style.height = '50' + 'px';
    getSel('.f1').style.marginTop = '20' + 'px';
}
let f3 = document.forms['f3'];
getSel('.butCreatList').onclick = () => {
    let countLi = getSel('#table6').value;
    let ulNew = '';
    ulNew = '<ul>';
    for (let i = 0; i < countLi; i++) {
        ulNew += '<li> text </li>';
    }
    ulNew += '</ul>'
    getSel('#txt3').textContent += ulNew;
    document.getElementById('formTable2').reset();

    getSel('#formTable2').style.visibility = 'hidden';
    getSel('#formTable2').style.height = '0' + 'px';
    getSel('.choose').style.visibility = 'hidden';
    getSel('.choose').style.height = '0' + 'px';

    getSel('.txt1').style.visibility = 'visible';
    getSel('.txt2').style.visibility = 'visible';
    getSel('.f1').style.visibility = 'visible';
    getSel('.but').style.visibility = 'visible';
    getSel('.txt1').style.minHeight = '450' + 'px';
    getSel('.txt2').style.height = '350' + 'px';
    getSel('.f1').style.height = '350' + 'px';
    getSel('.but').style.height = '50' + 'px';
    getSel('.f1').style.marginTop = '20' + 'px';
}