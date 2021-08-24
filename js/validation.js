let getElm = (id) => {
    return document.getElementById(id);
};

let getElmByClass = (className ,index) => {
    console.log(document.getElementsByClassName(className)[parseInt(index)])
  return document.getElementsByClassName(className)[index];
}
export {getElm,getElmByClass};