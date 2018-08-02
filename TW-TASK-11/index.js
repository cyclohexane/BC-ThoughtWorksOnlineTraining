const readlineSync = require('readline-sync');

let studentInfo = [];

mainMenu();

function mainMenu() {
    console.log(`
1. 添加学生
2. 生成成绩单
3. 退出`);
    var choice = parseInt(readlineSync.question('请输入你的选择（1~3）：'));//readlineSync会将输入的内容转化为字符串
    switch (choice) {
        case 1: {
            let info = readlineSync.question('请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：');
            addStudents(info);
            break;
        }
        case 2: {
            let id = readlineSync.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            printReport(id);
            break;
        }
        case 3: {
            return;
        }
    }
}

function addStudents(info) {
    if (infoIsCorrect(info)) {
        format(info);
    } else {
        let info = readlineSync.question('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
        addStudents(info);
    }
    mainMenu();
}

function infoIsCorrect(info) {                   //判断是否输入六个数据
    return info.split(', ').length === 6 ? true : false;
}

function format(info) {
    let [name, id, CHS, MATH, ENG, IT] = info.split(', ');
    CHS = parseInt(CHS.split(': ')[1]);
    MATH = parseInt(MATH.split(': ')[1]);
    ENG = parseInt(ENG.split(': ')[1]);
    IT = parseInt(IT.split(': ')[1]);
    total = CHS + MATH + ENG + IT;
    avg = total / 4;
    studentInfo.push({ name: name, id: id, CHS: CHS, MATH: MATH, ENG: ENG, IT: IT, avg: avg, total: total });
    console.log(`学生${name}的成绩被添加`);
}

function printReport(id) {
    if (idIsCorrect(id)) {
        print(selectSTU(id));
    } else {
        let id = readlineSync.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        printReport(id);
    }
    mainMenu();
}

function idIsCorrect(id) {
    if (Number(id.split(', ').join(''))) {      //判断输入的id是否全为数字
        return true;
    } else {
        return false;
    }
}

function selectSTU(id) {
    let selectedSTU = [];
    id.split(', ').forEach(i => {
        let stu = studentInfo.find(item => item.id === i);
        if (stu) {
            selectedSTU.push(stu);
        }
    });
    return selectedSTU;
}


function print(selectedSTU) {
    let classTOTAL = [];
    let report = `
成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================`;
    selectedSTU.forEach(i => {
        report += `\n${i.name}|${i.CHS}|${i.MATH}|${i.ENG}|${i.IT}|${i.avg}|${i.total}`;
        classTOTAL.push(i.total);
    });
    classTOTAL = classTOTAL.sort((a, b) => a - b);
    let classAVG = classTOTAL.reduce((sum, i) => sum + i) / selectedSTU.length;
    let classMEDIAN = (classTOTAL[parseInt(classTOTAL.length / 2)] + classTOTAL[parseInt((classTOTAL.length - 1) / 2)]) / 2;
    report += `
========================
全班总分平均数：${classAVG}
全班总分中位数：${classMEDIAN}`;
    console.log(report);
}