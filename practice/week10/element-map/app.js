const data = [
    {
        name: `bob
        `
    },{
        name: `bill
        `
    },{
        name: `brian
        `
    },{
        name: `paul
        `
    },{
        name: `hue
        `
    },{
        name: `dave
        `
    }
]

document.body.onload = addElement(data);

function addElement(data){
    for(var i=0;i<data.length;i++){
        console.log('doing')
        document.body.appendChild(document.createElement("div").appendChild(document.createTextNode(data[i].name)))
        // document.body.appendChild(document.creteElement('<br>'))
    }
}