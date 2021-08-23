let DomId = id => {
    return document.getElementById(id);
}

let createElm = (tagName, attr, attrVal) => {
    var g = document.createElement(tagName)
    if(attr.trim() !== '')
    g.setAttribute(attr , attrVal)
    return g;
}

let createElm_WithContent_ = (tagName, content) => {
    var g = document.createElement(tagName)
    g.innerHTML = content;
    return g;
}

let createCheckBox = (tagName, stucode) => {
    var tag = document.createElement(tagName)
    var g = document.createElement("input")
    g.setAttribute("type","checkbox");
    g.setAttribute("class","cbStuCode")
    g.setAttribute("value",stucode)
    tag.appendChild(g)
    return tag; 
}

function testInput() {

    this.checkEmpty = (val) => {
        if (val.trim() === '') {
            return true;
        } else {
            return false;
        }
    }

    this.checkEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    this.checkPhone = (phone) =>{
        const re = /^[0-9]{10,}$/
        return re.test(phone);
    }
}