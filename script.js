const questions = [
    {
        q1: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Dennis Ritchie"],
        answer: "Charles Babbage",
        name: "q1"
    },
    {
        q1: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High Transfer Machine Learning", "HyperText Managing Links", "Home Tool Markup Language"],
        answer: "HyperText Markup Language",
        name: "q2"
    },
    {
        q1: "Which data structure follows the LIFO principle?",
        options: ["Queue", "Stack", "Linked List", "Graph"],
        answer: "Stack",
        name: "q3"
    },
    {
        q1: "Which programming language is widely used for AI and ML?",
        options: ["Python", "C++", "Java", "Swift"],
        answer: "Python",
        name: "q4"
    },
    {
        q1: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: "O(log n)",
        name: "q5"
    },
    {
        q1: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer System Security", "Centralized Style Sheets", "Coded Style Structure"],
        answer: "Cascading Style Sheets",
        name: "q6"
    },
    {
        q1: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        answer: "MongoDB",
        name: "q7"
    },
    {
        q1: "Which part of the CPU carries out arithmetic and logical operations?",
        options: ["Control Unit", "Arithmetic Logic Unit", "Memory Unit", "Registers"],
        answer: "Arithmetic Logic Unit",
        name: "q8"
    },
    {
        q1: "What is the full form of API?",
        options: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Process Integration", "Application Process Interface"],
        answer: "Application Programming Interface",
        name: "q9"
    },
    {
        q1: "Which HTTP method is used to send data to a server?",
        options: ["GET", "POST", "DELETE", "PATCH"],
        answer: "POST",
        name: "q10"
    },
    {
        q1: "What is the main purpose of an operating system?",
        options: ["To manage hardware resources", "To design web pages", "To perform calculations", "To create animations"],
        answer: "To manage hardware resources",
        name: "q11"
    },
    {
        q1: "What is the default port for HTTP?",
        options: ["80", "443", "22", "3306"],
        answer: "80",
        name: "q12"
    },
    {
        q1: "Which of these is an example of a compiled language?",
        options: ["Python", "JavaScript", "C", "PHP"],
        answer: "C",
        name: "q13"
    },
    {
        q1: "Which sorting algorithm has the worst-case time complexity of O(n²)?",
        options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Radix Sort"],
        answer: "Bubble Sort",
        name: "q14"
    },
    {
        q1: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Queue Language", "System Query Language"],
        answer: "Structured Query Language",
        name: "q15"
    },
    {
        q1: "Which of the following is an example of cloud computing?",
        options: ["Dropbox", "Windows OS", "MS Paint", "Notepad"],
        answer: "Dropbox",
        name: "q16"
    },
    {
        q1: "Which company developed the C programming language?",
        options: ["Microsoft", "Apple", "Bell Labs", "IBM"],
        answer: "Bell Labs",
        name: "q17"
    },
    {
        q1: "Which key combination is used to refresh a webpage in most browsers?",
        options: ["Ctrl + R", "Ctrl + C", "Ctrl + P", "Ctrl + S"],
        answer: "Ctrl + R",
        name: "q18"
    },
    {
        q1: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Reference Link", "Unique Resource Link", "Unified Routing Language"],
        answer: "Uniform Resource Locator",
        name: "q19"
    },
    {
        q1: "Which protocol is used for sending emails?",
        options: ["SMTP", "FTP", "HTTP", "POP3"],
        answer: "SMTP",
        name: "q20"
    }
];

// Taking Random Number array 

const set = new Set();

while(set.size < 5){
    set.add(Math.floor(Math.random()*6))
}

const uniqueIndex = Array.from(set);
console.log(questions[uniqueIndex[0]].q1)


// Creating Tags And Adding Data To display

const parent = document.getElementById("quizForm");



for(let i=0; i<uniqueIndex.length; i++){

    let div = document.createElement("div");
    div.className = "question";


    let question = document.createElement("p");
    question.textContent = `${i+1}. ${questions[uniqueIndex[i]].q1}`;
    div.appendChild(question);
    


    // CREATING OPTIONS AND ADDING DATA 

    for(let j = 0; j<4; j++){

        let label = document.createElement("label");

        let input = document.createElement("input");
        input.type="radio";
        input.name = `q${i}`;
        input.value = questions[uniqueIndex[i]].options[j];

        const br = document.createElement("br");
        label.appendChild(input);
        
        let option = document.createTextNode(questions[uniqueIndex[i]].options[j]);
        label.appendChild(option);
        label.appendChild(br);

        div.appendChild(label);

    }



    parent.appendChild(div);
    
} //completing all the generating mcq's

const submitButton = document.createElement("input");
submitButton.type="submit";
submitButton.value="submit";
submitButton.id="submit-button";

parent.insertAdjacentElement("beforeend",submitButton);

// COMPLETED DISPLAYING THE DATA, NOT WILL VALIDATE IT 

const form = document.getElementById("quizForm");

// the answer object will contain mcq's question number and ans

let answers={};
for(let i=0; i<5; i++){
    answers[`q${i}`] = questions[uniqueIndex[i]].answer;
}

console.log(answers);

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const data = new FormData(form);

    let total=0;
  
    for(let [key,val] of data.entries()){
        console.log(val, answers[key])
        if(val === answers[key]){
            total++;
        }
    }

    console.log(total);

    
const result = document.getElementById("correct");
result.textContent = `${total} out of 5 is Correct`;
  
form.reset();
})







