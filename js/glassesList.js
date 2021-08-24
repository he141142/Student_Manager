
export class ListGlasses {
    constructor() {
        this.list = []
        this.renderContent = "";
    }
    addGlasses(glasses) {
        this.list.push(glasses)
    }
    renderGlasses() {
        this.renderContent = "";
        // this.list.map((e) => {
        //     // console.log(e)
        //     this.renderContent += `
        //     <div class="col-4">
        //        <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${e.id}" src="${e.src}" alt="Glasses">
        //     </div>
        //     `
        // });
        // this.list.reduce((index,value,i)=>{console.log("html = "+index+"|| "+value+"||"+i);return ""})
        this.renderContent =  this.list.reduce((contentHTML,e,index) => {
            // console.log("e: "+e+"||index: "+index)
            contentHTML += `
            <div class="col-4">
                   <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${e.id}" src="${e.src}" alt="Glasses">
            </div>`;
            return contentHTML;
        },"")
       
        return this.renderContent;
    }
    find_Obj(dataID){
        var gl = this.list.reduce((obj,e,index) => {
            obj.content = e.id === dataID ? e : obj.content
            obj.stt = e.id === dataID ? index : obj.stt
            return obj;
        },{stt:0,content:""});
        this.list.splice(gl.stt,1);
        this.list.unshift(gl.content)
        // console.log("list is")
        // console.log(this.list)
        return gl;
    }
}


