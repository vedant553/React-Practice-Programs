import { useState } from 'react'
import './App.css'

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    English: false,
    Maths: false,
    Physics: false
  });
  const [url, setURL] = useState("");
  const [file, setFile] = useState(null);
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");



  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
 
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubject = (e) => {
    const {name, checked} = e.target;
    setSubject({ ...subject, [name]: checked });
  };

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Selected file: ${file.name}`);
      // You can now upload it to a backend via FormData
    }
  };

  const handleChoice = (e) => {
    setChoice(e.target.value);
  };

  const handleAbout = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      number,
      gender,
      subject,
      url,
      fileName: file?.name,
      choice,
      about,
    });
  };


  const handleReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setNumber("");
    setGender("male");
    setSubject({
      English: false,
      Maths: false,
      Physics: false
    });
    setURL("");
    setFile(null);
    setChoice("");
    setAbout("");
  }

  return (
    <div style={{border: "2px solid red"}}>
    <form onSubmit={handleSubmitForm} style={{border: "2px solid blue", margin: "6px", padding: "4px"}}>
      <label><b>First Name<sup>*</sup></b> <br /> <input type="text" name='fname' placeholder='Enter First Name' value={fname} onChange={handleFname} required /> </label> <br /> 
      <label><b>Last Name<sup>*</sup></b> <br /> <input type="text" name='lname' placeholder='Enter Last Name' value={lname} onChange={handleLname} required /> </label> <br />
      <label ><b>Email<sup>*</sup></b> <br /> <input type="email" name='email' placeholder='Enter Email' value={email} onChange={handleEmail} required /> </label> <br />
      <label ><b>Contact<sup>*</sup></b> <br /> <input type="number" name='number' placeholder='Enter Mobile Number' value={number} onChange={handleNumber} required /> </label> <br />

      <div><b>Gender<sup>*</sup></b> <br />
      <label ><input type="radio" name='gender' value="male" checked={gender === "male"} onChange={handleGender} /> male</label>
      <label ><input type="radio" name='gender' value="female" checked={gender === "female"} onChange={handleGender} /> female</label>
      <label ><input type="radio" name='gender' value="other" checked={gender === "other"} onChange={handleGender} /> other</label>
      </div>

      <div><b>Your best Subject</b> <br />
        <input type="checkbox"  name="English" checked={subject.English} onChange={handleSubject} /> English
        <input type="checkbox" name="Maths" checked={subject.Maths} onChange={handleSubject} /> Maths
        <input type="checkbox" name="Physics" checked={subject.Physics} onChange={handleSubject} /> Physics
      </div>

      <label><b>Upload Resume<sup>*</sup></b> <br /> <input type="file" name='file' onChange={handleFile} accept=".pdf,.doc,.docx" required /> </label> <br />

      <label><b>Enter URL<sup>*</sup></b> <br /> <input type="url" name='url' value={url} onChange={handleURL} required/> </label> <br />

      <label> <b>Select Your Choice</b> <br />
        <select value={choice} onChange={handleChoice} name='choice'>
          <option value="">Select Your Choice</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="maybe">Maybe</option>
        </select>
      </label> <br />

      <label><b>About</b> <br /> </label>
      <textarea value={about} onChange={handleAbout} name='about'></textarea> <br />

      <button type="button" onClick={handleReset}>Reset</button>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App
