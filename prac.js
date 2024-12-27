const cricketQuiz = [
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "MS Dhoni"],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "What is the maximum number of players a cricket team can field during a match?",
    options: ["11", "12", "10", "9"],
    answer: "11",
  },
  {
    question:
      "How many balls are there in an over in a standard cricket match?",
    options: ["6", "4", "8", "10"],
    answer: "6",
  },
  {
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["India", "Australia", "West Indies", "England"],
    answer: "West Indies",
  },
  {
    question: "What is the term used for a score of zero in cricket?",
    options: ["Duck", "Golden", "Zero", "Nil"],
    answer: "Duck",
  },
  {
    question: "What is the difference between a Test match and an ODI?",
    options: [
      "Test matches are shorter",
      "ODIs use colored clothing",
      "Test matches use pink balls",
      "ODIs are day-night",
    ],
    answer: "ODIs use colored clothing",
  },
  {
    question:
      "How many runs are awarded for hitting the ball out of the boundary without bouncing?",
    options: ["4", "5", "6", "8"],
    answer: "6",
  },
  {
    question: "What does 'LBW' stand for in cricket?",
    options: [
      "Leg Before Wicket",
      "Lost Ball Wide",
      "Line Between Wickets",
      "Late Bounce Wicket",
    ],
    answer: "Leg Before Wicket",
  },
  {
    question: "What is a 'powerplay' in limited-overs cricket?",
    options: [
      "Only certain bowlers bowl",
      "Field restriction period",
      "Player substitution rule",
      "Extra run rule",
    ],
    answer: "Field restriction period",
  },
  {
    question:
      "How many umpires are present on the field during a cricket match?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Who is the leading run-scorer in Test cricket history?",
    options: [
      "Ricky Ponting",
      "Jacques Kallis",
      "Sachin Tendulkar",
      "Brian Lara",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which bowler has taken the most wickets in ODI cricket?",
    options: [
      "Muttiah Muralitharan",
      "Wasim Akram",
      "Glenn McGrath",
      "Shane Warne",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "Who is the youngest player to score a century in international cricket?",
    options: [
      "Shahid Afridi",
      "Sachin Tendulkar",
      "Virat Kohli",
      "Mohammad Ashraful",
    ],
    answer: "Mohammad Ashraful",
  },
  {
    question:
      "Which cricketer has the record for hitting the most sixes in international cricket?",
    options: ["MS Dhoni", "Chris Gayle", "Rohit Sharma", "Shahid Afridi"],
    answer: "Chris Gayle",
  },
  {
    question: "Who captained India to victory in the 1983 Cricket World Cup?",
    options: [
      "Kapil Dev",
      "Sunil Gavaskar",
      "Ravi Shastri",
      "Mohinder Amarnath",
    ],
    answer: "Kapil Dev",
  },
  {
    question: "Which cricket team is known as the 'Black Caps'?",
    options: ["New Zealand", "South Africa", "England", "Australia"],
    answer: "New Zealand",
  },
  {
    question: "What is the name of the T20 league played in India?",
    options: ["BBL", "IPL", "PSL", "CPL"],
    answer: "IPL",
  },
  {
    question: "Which country hosts the Ashes series along with England?",
    options: ["India", "Australia", "South Africa", "New Zealand"],
    answer: "Australia",
  },
  {
    question: "Who won the ICC Men's T20 World Cup in 2022?",
    options: ["India", "England", "Pakistan", "Australia"],
    answer: "England",
  },
  {
    question:
      "What is the highest individual score in a One Day International (ODI) match?",
    options: ["264", "200", "248", "275"],
    answer: "264",
  },
];

function random_question() {
  const data = new Set();
  while (data.size != 5) {
    const random = Math.floor(Math.random() * cricketQuiz.length);
    data.add(cricketQuiz[random]);
  }
  return [...data];
}

const form = document.querySelector("form");
const problem = random_question();
const original_answer = {};
const show = document.getElementById("result");

problem.forEach((obj, random) => {
  const div_element = document.createElement("div");
  div_element.className = "question";
  const para = document.createElement("p");
  para.textContent = `${random + 1} . ${obj["question"]}`;
  div_element.appendChild(para);
  original_answer[`q${random + 1}`] = obj["answer"];

  //options
  obj["options"].forEach((data) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${random + 1}`;
    input.value = data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    label.appendChild(document.createElement("br"));
    div_element.appendChild(label);
  });
  form.appendChild(div_element);
});

const btn = document.createElement("button");
btn.type = "submit";
btn.className = "submit-btn";
btn.innerHTML = "Submit";

form.appendChild(btn);
form.appendChild(document.createElement("br"));

const btn1 = document.createElement("button");
btn1.type = "submit";
btn1.className = "submit-btn";
btn1.id = "out";
btn1.innerHTML = "reset";
form.appendChild(btn1);
form.appendChild(document.createElement("br"));

const btn2 = document.createElement('button');
btn2.type="submit";
btn2.id="new";
btn2.className="submit-btn";
btn2.innerHTML="New Quiz";
form.appendChild(btn2);



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  let result = 0;
  for (let [key, value] of data.entries()) {
    if (value == original_answer[key]) {
      result++;
    }
  }

  show.innerHTML = `${result} is correct out of 5`;
});

const button = document.getElementById("out");
button.addEventListener("click", () => {
  btn1.type = "reset";
  form.reset();
  show.innerHTML = "";
});

const btn12 = document.getElementById("new");
btn12.addEventListener('click',()=>{
  location.reload();
})

