import React, {useState} from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [state, setState] = useState([]);

  const addSkill = (event) => {
    event.preventDefault();
    const technologies = event.target[0].value;

    setState([...state, technologies]);
    event.target[0].value = "";
  };

  return (
    <div>
      <div> My name: Anastasiia</div>
      <div> My surname: Beltsova</div>
      <div>Learned Technologies:
        {state.map((skill, i) => (
          <div key={skill + i}>
            {skill}
          </div>
        ))}
      </div>
      <form action="#" onSubmit={addSkill}>
        <input type="text"></input>
        <button>Add it</button>
      </form>
    </div>
  );
}

root.render(<App />);
