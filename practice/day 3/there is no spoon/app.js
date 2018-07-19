var table = {
    color: "gray",
    legs: 4,
    chairs:2,
    isSturdy: true,
    break: function(){
        this.isSturdy=false;
    }
}

var computer = {
    type: "desktop",
    powered: false,
    maker: "dell",
    powerSwitch: function(){
        if(powered==="false"){this.powered=true;}
        else{this.powered=false;}
    }
}

var trashCan = {
    volume: 3,
    bag: true,
    trash: true,
    takeOutTrash: function(){
        this.trash=false;
    }
}

var carpet = {
    color: "blue",
    isRug: false,
    isClean: true,
    clean: function(){
        if(this.isClean===false){this.isClean=true;}
    }
}

var notepad = {
    pages: 250,
    ruled: "wide",
    used: true,
    write: function(str){
        console.log(`you just added ${str} to the notebook.`);
    }
}

var book = {
    title: "World Almanac",
    shelved: true,
    condition: "new",
    read: function(){
        this.shelved=false;
    }
}

var light = {
    style: "flourescent",
    lightOn: true,
    color: "white",
    lightSwitch: function(){
        if(this.lightOn===false){lightOn=true;}
        else{lightOn=false;}
    }
}

var pencil = {
    typeNo: 2,
    sharp: true,
    eraser: true,
    erase: function(){
        this.eraser=false;
    }
}

var headphone= {
    plugedIn: true,
    color: "blue",
    isEarBud: false,
    plugIn: function(){
        this.plugedIn=true;
    }
}

var door = {
    open: false,
    swing: "left",
    width: 32,
    leaveRoom: function(){
        this.open=true;
        this.open=false;
    }
}
