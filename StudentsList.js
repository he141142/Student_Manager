function StudentsList(){
    this.list = []
    this.add = function(sv){
        this.list.push(sv)
    }
    this.del = function(StuCode){
        let index = this.list.map( function(e)  {console.log(e.stuCode); return e.stuCode;}).indexOf(StuCode);
        // console.log("index of "+StuCode+" is: "+index)
        this.list.splice(index,1)
        // console.log(this.list)
    }
    this.modify = function(sv){

    }
    this.search = function(str){

    }
    
}