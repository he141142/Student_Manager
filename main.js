var idList = ['masv', 'hoten', 'sdt', 'cmnd', 'email'];
var listAttr = ['stuCode', 'fullName', 'email', 'cmnd', 'phone'];

var studentList = new StudentsList();

var test = new testInput();

function addStudent() {
    let flag = 0;
    //getData input
    let stuCode = DomId("masv").value
    let fullName = DomId("hoten").value
    let cmnd = DomId("cmnd").value
    let phone = DomId("sdt").value
    let email = DomId("email").value
    //check validation
    for (const val of idList) {
        if (!NullInput(val)) {
            flag++;
        };
    }

    if (!EmailException("email")) flag++;
    if (!PhoneException("sdt")) flag++;

    if (flag != 0) return;

    var sv = new Student(stuCode, phone, email, cmnd, fullName);
    studentList.add(sv)
    UpdateUI(studentList.list)
}

let NullInput = (id) => {
    if (test.checkEmpty(DomId(id).value)) {
        DomId(id).style.borderColor = 'red';
    } else {
        DomId(id).style.borderColor = 'green';
        return true;
    }
    return false;

}

let EmailException = (id) => {
    if (!test.checkEmail(DomId(id).value)) {
        DomId(id).style.borderColor = 'red';
    } else {
        DomId(id).style.borderColor = 'green';
        return true;
    }
    return false;
}

let PhoneException = (id) => {
    if (!test.checkPhone(DomId(id).value)) {
        DomId(id).style.borderColor = 'red';
    } else {
        DomId(id).style.borderColor = 'green';
        return true;

    }
    return false;
}



let UpdateUI = (list) => {
    let tbSv = DomId("tbodySinhVien");
    tbSv.innerHTML = "";

    for (const val of list) {
        console.log("hi")
        Render_Row_(val, tbSv);
    }


}

let Render_Row_ = (student, tbSv) => {
    //    console.log("Stucode: "+student.stuCode +"Use array: "+student[listAttr[0]])
    let TrBody = createElm("tr", "class", "studentRow");
    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            TrBody.appendChild(createCheckBox("td", student[listAttr[0]]));
        } else {
            TrBody.appendChild(createElm_WithContent_("td", student[listAttr[i - 1]]));
        }
    }
    tbSv.appendChild(TrBody)
}


function SetStorage() {
    var jsonSv = JSON.stringify(studentList.list)
    localStorage.setItem("StudentsListJSON", jsonSv)

}

function GetStorage() {
    var jsonSv = localStorage.getItem("StudentsListJSON")
    var StudentListFromStore = JSON.parse(jsonSv)
    studentList.list = StudentListFromStore
    UpdateUI(studentList.list)
}

function DeleteStudent() {
    var cb = document.getElementsByClassName("cbStuCode");
    var listStudent_Choosen_ = []
    for (const i of cb) {
        if (i.checked) {
            listStudent_Choosen_.push(i.value);
            // console.log("value"+i.value)
        }
    }

    for(const i of listStudent_Choosen_){
        studentList.del(listStudent_Choosen_)
    }
    UpdateUI(studentList.list)
}