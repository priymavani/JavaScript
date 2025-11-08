// 🧠 Definition

// Debouncing in JavaScript is a technique to limit how often a function runs — especially for functions that get called many times in quick succession (like when typing, resizing, scrolling, etc.).

// It ensures that the function runs only once after a certain period of time has passed since the last call.

// 💬 Real-life Example

// Imagine you’re typing in a search box.
// Each key press triggers an API call to fetch suggestions — that’s too many calls 🚫.

// With debouncing, you delay the API call until the user stops typing for a short while (say 500ms).
// So only one call is made — for the final input ✅.

// ⚙️ How It Works

// Here’s the idea:

// Each time the user triggers the function (e.g., on key press), you start a timer.

// If another call happens before the timer finishes, you reset it.

// Only after the user stops calling it for a given time, the function finally runs.

function debounce(search , timedelay){
    let clearTimer;

    return function(query){
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => {
            search(query);
        }, timedelay);
    }
}

// here the debounce function will return a new function which will call the search function after the specified time delay.
// we can store thre returned function in variable 
// the variable will act as function
// we can give the arguments in variable function


const search = (query) => {
    console.log(`searching for`,query);
};

const debouncedSearch = debounce(search, 1000);

// debouncedSearch("J");
// debouncedSearch("Ja");
// debouncedSearch("Jav");


// Wire the input element to the debounced search using addEventListener.
const search_element = document.getElementById('search');

search_element.addEventListener('input', (e) => debouncedSearch(e.target.value));


// search("J");
// search("Ja");
// search("Jav");
// search("Java");
// search("Javas");    
// search("Javasc");
// search("Javascr");
// search("Javascri");
// search("Javascrip");
// search("Javascript");   
