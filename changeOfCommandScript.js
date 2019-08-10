/*
init()

document.getElementById('reset').addEventListener('click', function() {
    init()
});
*/

allValues = function(arr, input) {
    var arr;

    if (input) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].innerHTML = input;
        }
    } else {

    }
    
}





document.getElementById('final-product').addEventListener('click', function() {
    // The user input is tracked for each text box
    var visible = function() {
        document.getElementById('script').style.display = "block";
    }
    
    visible();

    date = document.getElementById('ceremony-date').value;
    
    unit = document.getElementById('unit').value;

    cgRank = document.getElementById('cg-rank').value;
    cgFirst = document.getElementById('cg-first').value;
    cgMiddle = document.getElementById('cg-middle').value;
    cgLast = document.getElementById('cg-last').value;

    dcsmFirst = document.getElementById('dcsm-first').value;
    dcsmMiddle = document.getElementById('dcsm-middle').value;
    dcsmLast = document.getElementById('dcsm-last').value;

    inCRank = document.getElementById('in-c-rank').value;
    inCFirst = document.getElementById('in-c-first').value;
    inCMiddle = document.getElementById('in-c-middle').value;
    inCLast = document.getElementById('in-c-last').value;

    inSTitle = document.getElementById('in-s-title').value;
    inSFirst = document.getElementById('in-s-first').value;
    inSLast = document.getElementById('in-s-last').value;

    outCRank = document.getElementById('out-c-rank').value;
    outCFirst = document.getElementById('out-c-first').value;
    outCMiddle = document.getElementById('out-c-middle').value;
    outCLast = document.getElementById('out-c-last').value;

    outSTitle = document.getElementById('out-s-title').value;
    outSFirst = document.getElementById('out-s-first').value;
    outSLast = document.getElementById('out-s-last').value;

    csmFirst = document.getElementById('csm-first').value;
    csmMiddle = document.getElementById('csm-middle').value;
    csmLast = document.getElementById('csm-last').value;
    
    senCRank = document.getElementById('sen-c-rank').value;
    senCFirst = document.getElementById('sen-c-first').value;
    senCMiddle = document.getElementById('sen-c-middle').value;
    senCLast = document.getElementById('sen-c-last').value;

    cotRank = document.getElementById('cot-rank').value;
    cotFirst = document.getElementById('cot-first').value;
    cotMiddle = document.getElementById('cot-middle').value;
    cotLast = document.getElementById('cot-last').value;

    chapLast = document.getElementById('chap-last').value;

    bandCRank = document.getElementById('band-c-rank').value;
    bandCLast = document.getElementById('band-c-last').value;

    drumRank = document.getElementById('drum-rank').value;
    drumLast = document.getElementById('drum-last').value;
    

    allValues(document.getElementsByClassName('date'), date);
    allValues(document.getElementsByClassName('unit'), unit);

    allValues(document.getElementsByClassName('cg-rank'), cgRank);
    allValues(document.getElementsByClassName('cg-first'), cgFirst);
    allValues(document.getElementsByClassName('cg-middle'), cgMiddle);
    allValues(document.getElementsByClassName('cg-last'), cgLast);

    allValues(document.getElementsByClassName('dcsm-first'), dcsmFirst);
    allValues(document.getElementsByClassName('dcsm-middle'), dcsmMiddle);
    allValues(document.getElementsByClassName('dcsm-last'), dcsmLast);

    allValues(document.getElementsByClassName('in-c-rank'), inCRank);
    allValues(document.getElementsByClassName('in-c-first'), inCFirst);
    allValues(document.getElementsByClassName('in-c-middle'), inCMiddle);
    allValues(document.getElementsByClassName('in-c-last'), inCLast);

    allValues(document.getElementsByClassName('in-s-title'), inSTitle);
    allValues(document.getElementsByClassName('in-s-first'), inSFirst);
    allValues(document.getElementsByClassName('in-s-last'), inSLast);

    allValues(document.getElementsByClassName('out-c-rank'), outCRank);
    allValues(document.getElementsByClassName('out-c-first'), outCFirst);
    allValues(document.getElementsByClassName('out-c-middle'), outCMiddle);
    allValues(document.getElementsByClassName('out-c-last'), outCLast);

    allValues(document.getElementsByClassName('out-s-title'), outSTitle);
    allValues(document.getElementsByClassName('out-s-first'), outSFirst);
    allValues(document.getElementsByClassName('out-s-last'), outSLast);

    allValues(document.getElementsByClassName('csm-first'), csmFirst);
    allValues(document.getElementsByClassName('csm-middle'), csmMiddle);
    allValues(document.getElementsByClassName('csm-last'), csmLast);

    allValues(document.getElementsByClassName('sen-c-rank'), senCRank);
    allValues(document.getElementsByClassName('sen-c-first'), senCFirst);
    allValues(document.getElementsByClassName('sen-c-middle'), senCMiddle);
    allValues(document.getElementsByClassName('sen-c-last'), senCLast);

    allValues(document.getElementsByClassName('cot-rank'),  cotRank);
    allValues(document.getElementsByClassName('cot-first'), cotFirst);
    allValues(document.getElementsByClassName('cot-middle'), cotMiddle);
    allValues(document.getElementsByClassName('cot-last'), cotLast);

    allValues(document.getElementsByClassName('chap-last'), chapLast);

    allValues(document.getElementsByClassName('band-c-rank'), bandCRank);
    allValues(document.getElementsByClassName('band-c-last'), bandCLast);

    allValues(document.getElementsByClassName('drum-rank'), drumRank);
    allValues(document.getElementsByClassName('drum-last'), drumLast);
});

