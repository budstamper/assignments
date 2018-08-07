var nlp = require("compromise");

var str = "coding"

    var psd = nlp(str);
    var mTags = psd.out('tags')
    
    var pos = mTags[0].tags[0]

    if(pos === "Noun"){
        var x = psd.nouns().toSingular().out();
        console.log(psd.nouns().toSingular().out());
    } else if(pos === "Verb"){
        psd.verbs().toSingular();
    
    }