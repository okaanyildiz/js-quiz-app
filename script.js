const questions = [{
    id: 0,
    q: "How can you open a link in a new tab/browser window?",
    a: [{ text: "<a href=”url”target=”_blank”>", isCorrect: true },
    { text: "<a href=”url” new>", isCorrect: false },
    { text: "<a href=”url” target=”new>", isCorrect: false },
    { text: "None of the answers is correct", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which HTML tag is used to define an internal style sheet?",
    a: [{ text: "<css>", isCorrect: false, isSelected: false },
    { text: "<script>", isCorrect: false },
    { text: "<style>", isCorrect: true },
    { text: "All options are correct", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is the default value of the position property?",
    a: [{ text: "fixed", isCorrect: false },
    { text: "static", isCorrect: true },
    { text: "absolute", isCorrect: false },
    { text: "semantic", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is the correct HTML for adding a background color?",
    a: [{ text: "<body style='background-color:yellow;'>", isCorrect: true },
    { text: "static", isCorrect: false },
    { text: "<body bg='yellow'>", isCorrect: false },
    { text: "<background>yellow</background>", isCorrect: false }
    ]
},
{
    id: 4,
    q: "$ cd Desktop $ mkdir poco",
    a: [{ text: "Creates a repository “poco”", isCorrect: false },
    { text: "Creates a folder “poco” to the Desktop", isCorrect: true },
    { text: "Removes a folder from the Desktop", isCorrect: false },
    { text: "Adds a file to the folder", isCorrect: false }
    ]
},
{
    id: 5,
    q: "How do you create a function in JavaScript?",
    a: [{ text: "function myFunction()", isCorrect: true },
    { text: "function = myFunction()", isCorrect: false },
    { text: "function:myFunction()", isCorrect: false },
    { text: "All options are correct", isCorrect: false }
    ]
},
{
    id: 6,
    q: "How to write an IF statement in JavaScript?",
    a: [{ text: "if i = 5 then", isCorrect: false },
    { text: "if i = 5", isCorrect: false },
    { text: "if (i == 5)", isCorrect: true },
    { text: "All options are false", isCorrect: false }
    ]
},
]

// Set start
let start = true;

// Iterate
function iterate(id) {

    // Get the result display section
    const result = document.querySelectorAll(".result");
    result[0].innerText = "";

    // Get the question
    const question = document.querySelector("#question");
    question.style.display = 'flex';
    question.style.justifyContent = 'center';
    question.style.alignItems = 'center';


    // Set the question text
    question.innerText = questions[id].q;

    // Get and write the options
    const op1 = document.querySelector('#op1');
    op1.innerText = questions[id].a[0].text;
    const op2 = document.querySelector('#op2');
    op2.innerText = questions[id].a[1].text;
    const op3 = document.querySelector('#op3');
    op3.innerText = questions[id].a[2].text;
    const op4 = document.querySelector('#op4');
    op4.innerText = questions[id].a[3].text;

    // Provide the true or false value to the options
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;

    let selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grab the evaluate button
    const evaluate = document.querySelectorAll(".evaluate");

    // Answer Data

    let trueAnswers = 0;
    let falseAnswers = 0;

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            result[0].classList.add('blinker');
            trueAnswers += 1;
            // console.log(`true answers: ${trueAnswers}`);
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            result[0].classList.add('blinker');
            falseAnswers += 1;
            // console.log(`false answers: ${falseAnswers}`);
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and next question method
const next = document.querySelectorAll('.next')[0];
let id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < questions.length) {
        id++;
        iterate(id);
    }
})


