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
 function findSearchTermInBooks(searchTerm, scannedTextObj) {

    //Initialize a result object with the inputted search term and an empty "Results" array.
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    //if the array of books to be searched through is empty, just return the initial result object.
    if(scannedTextObj.length == 0){
        return result;
    }

    //Loop through each Content entry of each book in the scannedTextObj parameter with a nested for loop.
    for(let i=0; i<scannedTextObj.length; i++){
        for(let j=0; j<scannedTextObj[i].Content.length; j++){
            
            /*If the searchTerm is found in the current content entry then the ISBN of the current book, 
            the page of the content entry, and the line of the content entry are added to the "Results" 
            array of the result object. */
            currentContentEntry = scannedTextObj[i].Content[j];
            if(currentContentEntry.Text.includes(searchTerm)){
                result.Results.push(
                    {
                        "ISBN": scannedTextObj[i].ISBN,
                        "Page": currentContentEntry.Page,
                        "Line": currentContentEntry.Line
                    }
                )
            }

        }
    }

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
    
/** Example output object */
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
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

//Testing a searchTerm that appears in all of the entries. Make sure it is found in each one.
const test3result = findSearchTermInBooks("he", twentyLeaguesIn);
if(test3result.Results.length == 3){
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected: 3");
    console.log("Received:", test3result.Results.length);
}

//Testing a searchTerm that does not appear in any of the example quotes. Make sure we do not get a false positive.
const test4result = findSearchTermInBooks("xylophone", twentyLeaguesIn);
if(test4result.Results.length == 0){
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected: 0");
    console.log("Received:", test4result.Results.length);
}

//Make sure that the method is case sensitive and does not give a false positive on the word "Canadian".
const test5result = findSearchTermInBooks("canadian", twentyLeaguesIn);
if(test5result.Results.length == 0){
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected: 0");
    console.log("Received:", test4result.Results.length);
}

