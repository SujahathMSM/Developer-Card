import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar() {
  return (
      <img className="avatar"
        src="Sujahath.jpg"
        alt="A software developer named Sujahath"
      />
  );
}

function Intro() {
  return (
    <div>
      <h2>Sujahath Siddeek</h2>
      <p>
        Full Stack Web Developer and Teacher at CodeGen. Apart from fullstack i
        have an huge interest on AI/ML related stuffs. When
        its not coding i am guy who will spend my time on watching
        crime, thriller TV series and Movies
      </p>
    </div>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "☕"}
          {level === "intermediate" && "🐙"}
          {level === "advanced" && "🚀"}
        </span>
    </div>
  );  // className="skill" style={{backgroundColor:props.color}}>{props.name}
}

function SkillList() {
  return(
    <div className="skill-list">

      {
        skills.map((skill) => (
          <Skill skill={skill.skill} color={skill.color} level={skill.level}/>
        ))
      }
        {/* <Skill name="Python" color="green" emoji="🐍" />
        <Skill name="Java" color="yellow" emoji="☕" />
        <Skill name="Machine Learning" color="lightblue" emoji="🤖" />
        <Skill name="React" color="aqua" emoji="⚛️" />
        <Skill name="JavaScript" color="red" emoji="🚀" />
        <Skill name="Git and Github" color="grey" emoji="🐙" /> */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
