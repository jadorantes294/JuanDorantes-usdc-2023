/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

var index;// Global Variable for Index X & Y 
var indey;
var c=1; //Print Test Results Counter


function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    console.log("Test #:",c++);//Every time you enter Increase Test Counter
    //console.log("Scanned:", scannedTextObj);//Print SearchTerm
    //console.log("Searched Items:", scannedTextObj);//Print scannedTextObj



    var result = { // Specify Structure to Return Variables
        "SearchTerm": "",
        "Results": [
            {
            "ISBN": "",
            "Page": 0,
            "Line": 0,
                
            }
        ]
    };

    if(searchTerm.length ===0){//Check if String is Empty

        console.log('Empty String');
        result.Results =[];  // Save Result with Empty 

    } 


    else{

        
        for(let y in scannedTextObj){ // Searched threw the whole structure 
            for( let i in scannedTextObj[y].Content ){//Searched threw All Content

                const item_result = scannedTextObj[y].Content[i].Text;// Save whole text into a String

                if(item_result.includes(result.SearchTerm)){//Use Method Include to find that specific phrase 


                    index = i;
                    indey = y; // Save Index and Print for X & Y

                    
                    // Use Specify Indexes to Save into Result
                    result.SearchTerm = searchTerm; // Save Search Terms in Result
                    result.Results[indey].ISBN= scannedTextObj[indey].ISBN;
                    result.Results[indey].Page= scannedTextObj[indey].Content[index].Page;
                    result.Results[indey].Line= scannedTextObj[indey].Content[index].Line; 
                    
                }
                

                           
            }
            
           // console.log("Result Function Jason Object:",result);// Print Final Result

        }


    }
    
    console.log('y:',indey);
    console.log('x:',index);
    
    return result; 
   
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object 1 */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example output object 2 */

const twentyLeaguesOut2 = {
    "SearchTerm": "now",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */

// Test 1 input:the Expected:Pass
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}


 
if (test1result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test1result.Results.length);
}

// Test 2 input:now , Expected:Pass

const test2result = findSearchTermInBooks("now", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test2result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}
 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Test 3 input:The , Expected: Text 1 Fail because its Case Sensitive
const test3result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test3result);
}
 
if (test3result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


// Test 4 input:"" , Expected: Fail because the String is Empty , this is the only Test that Test 2 is expected to fail.
const test4result = findSearchTermInBooks("", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test4result);
}
 
if (test4result.Results.length == 1) {// If it is empty it should fail
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test4result.Results.length);
}


// Test 5 input:"wow"  
const test5result = findSearchTermInBooks("wow", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test5result);
}
 
if (test5result.Results.length == 1) {// If it is empty it should fail
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test5result.Results.length);
}
