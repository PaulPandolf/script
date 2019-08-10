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

























/*
function init() {
    document.getElementById('ceremony-date').value = '2019-08-15';
    document.getElementById('unit').value = '';
    document.getElementById('cg-rank').value = '';
    document.getElementById('cg-first').value = '';
    document.getElementById('cg-middle').value = '';
    document.getElementById('cg-last').value = '';

    document.getElementById('dcsm-first').value = '';
    document.getElementById('dcsm-middle').value = '';
    document.getElementById('dcsm-last').value = '';

    document.getElementById('in-c-rank').value = '';
    document.getElementById('in-c-first').value = '';
    document.getElementById('in-c-middle').value = '';
    document.getElementById('in-c-last').value = '';

    document.getElementById('in-s-title').value = '';
    document.getElementById('in-s-first').value = '';
    document.getElementById('in-s-last').value = '';

    document.getElementById('out-c-rank').value = '';
    document.getElementById('out-c-first').value = '';
    document.getElementById('out-c-middle').value = '';
    document.getElementById('out-c-last').value = '';

    document.getElementById('out-s-title').value = '';
    document.getElementById('out-s-first').value = '';
    document.getElementById('out-s-last').value = '';

    document.getElementById('csm-first').value = '';
    document.getElementById('csm-middle').value = '';
    document.getElementById('csm-last').value = '';
    
    document.getElementById('sen-c-rank').value = '';
    document.getElementById('sen-c-first').value = '';
    document.getElementById('sen-c-middle').value = '';
    document.getElementById('sen-c-last').value = '';

    document.getElementById('cot-rank').value = '';
    document.getElementById('cot-first').value = '';
    document.getElementById('cot-middle').value = '';
    document.getElementById('cot-last').value = '';

    document.getElementById('chap-last').value = '';

    document.getElementById('band-c-rank').value = '';
    document.getElementById('band-c-last').value = '';

    document.getElementById('drum-rank').value = '';
    document.getElementById('drum-last').value = '';
}




/****************************************
 * Variables
    
    Ceremony date

    Incoming Commmander first name
    Incoming Commmander middle initial
    Incoming Commmander last name
    Incoming Comander rank

    Incoming Spouse title
    Incoming Spouse first name
    Incoming Spouse last name

    Outgoing Commmander first name
    Outgoing Commmander middle initial
    Outgoing Commmander last name
    Outgoing Comander rank

    Outgoing Spouse Title
    Outgoing Spouse first name
    Outgoing Spouse last name
    
    Current CSM first name
    Current CSM last name
    Current CSM middle initial

    Commander of troops rank
    Commander of troops first name
    Commander of troops middle initial
    Commander of troops last name
    Commander of troops unit

    Superior Commmander first name
    Superior Commmander middle initial
    Superior Commmander last name
    Superior Comander rank

    Chaplain last name
    Unit

    Band Commmander rank
    Band Comander last name

    Drum Major rank
    Drum Major last name
*/
/*
var Person = function(firstName, lastName, middleI, rank) {
    this.firstName = firstName;
    this.middleI = middleI;
    this.lastName = lastName;
    this.rank = rank;
}

var cg = new Person();
var seniorC = new Person();
var incomingC = new Person();
var incomingSpouse = new Person();
var outgoingC = new Person();
var outgoingSpouse = new Person();
var cot = new Person();
var bandCommander = new Person();
var bandDrumMajor = new Person();
var chaplain = new Person();
*/






































