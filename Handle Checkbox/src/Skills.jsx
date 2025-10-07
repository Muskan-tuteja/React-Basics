import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <>
      <h2>Select Your Skills</h2>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">Php</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="py" value="py" />
      <label htmlFor="py">Ptyon</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="jv" value="jv" />
      <label htmlFor="jv">Java</label>
      <h1>{skills.toString()}</h1>
    </>
  );
}
export default Skills;
