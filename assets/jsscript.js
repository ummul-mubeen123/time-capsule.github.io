// ======================
// LAB 3 (Your Existing Code)
// ======================

let capsuleName = "My Digital Time Capsule";
let openYear = 2030;
let isPublic = true;
let memories = ["Photos", "Videos", "Letters"];
let capsuleOwner = { name: "Ummul Mubeen" };

function displayVariables() {
    document.getElementById("name").innerHTML = capsuleName;
    document.getElementById("year").innerHTML = "Opens in: " + openYear;
    document.getElementById("public").innerHTML = "Public Capsule: " + isPublic;
    document.getElementById("memories").innerHTML = "Stored Memories: " + memories.join(", ");
    document.getElementById("owner").innerHTML = "Owner: " + capsuleOwner.name;
}
displayVariables();

const showSummary = () => {
    document.getElementById("summary").innerHTML = `
        ${capsuleName} will open in ${openYear}. 
        It stores ${memories.length} memories: ${memories.join(", ")}.
        Owned by: ${capsuleOwner.name}.
    `;
}

const randomMemories = ["Birthday Photos", "Letters", "Videos", "Old Songs", "Voice Notes"];

const addMemory = () => {
    const newMemory = randomMemories[Math.floor(Math.random() * randomMemories.length)];
    memories.push(newMemory);
    displayVariables();
    showSummary();
}


// ======================
// LAB 4 IMPLEMENTATION
// ======================

function runLab4() {

    let output = document.getElementById("lab4Output");

    let result = "<h3 class='font-bold text-indigo-600'>If-Else Output:</h3>";

    // IF-ELSE
    if (openYear > 2025) {
        result += "<p>Future Capsule</p>";
    } else {
        result += "<p>Past Capsule</p>";
    }

    if (isPublic) {
        result += "<p>Capsule is Public</p>";
    } else {
        result += "<p>Capsule is Private</p>";
    }

    if (memories.length > 0) {
        result += "<p>Memories Available</p>";
    } else {
        result += "<p>No Memories</p>";
    }

    if (memories.length >= 3) {
        result += "<p>Rich Capsule</p>";
    } else {
        result += "<p>Few Memories</p>";
    }

    if (capsuleOwner.name === "Ummul Mubeen") {
        result += "<p>Owner Verified</p>";
    }

    // FOR LOOP
    result += "<h3 class='font-bold text-indigo-600 mt-4'>For Loop:</h3><ul>";
    for (let i = 0; i < memories.length; i++) {
        result += "<li>" + memories[i] + "</li>";
    }
    result += "</ul>";

    // WHILE LOOP
    let i = 0;
    result += "<h3 class='font-bold text-indigo-600 mt-4'>While Loop:</h3><ul>";
    while (i < memories.length) {
        result += "<li>" + memories[i] + "</li>";
        i++;
    }
    result += "</ul>";

    // EVEN / ODD
    let numbers = [10, 25, 40, 55, 70];

    result += "<h3 class='font-bold text-indigo-600 mt-4'>Even Numbers:</h3><ul>";
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] % 2 === 0) {
            result += "<li>" + numbers[j] + "</li>";
        }
    }
    result += "</ul>";

    result += "<h3 class='font-bold text-indigo-600 mt-4'>Odd Numbers:</h3><ul>";
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] % 2 !== 0) {
            result += "<li>" + numbers[j] + "</li>";
        }
    }
    result += "</ul>";

    output.innerHTML = result;
}

// RUN LAB 4
runLab4();