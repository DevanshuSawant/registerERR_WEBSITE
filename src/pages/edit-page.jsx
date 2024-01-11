import {db, event, getDoc, doc, setDoc } from '../utils/firebase.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthChecker } from '../utils/general_utils';


function EditPage() {
  
  const[reg_no, setReg_no] = useState(localStorage.getItem('reg_no'));
  const[name, setName] = useState(localStorage.getItem('name'));
  const[branch, setBranch] = useState(localStorage.getItem('branch'));
  const[roll_no, setRoll_no] = useState(localStorage.getItem('roll_no'));
  const[smart_card_no, setSmart_card_no] = useState(localStorage.getItem('smart_card_no'));
  const[msteams_mail, setMsteams_mail] = useState(localStorage.getItem('msteams_mail'));
  const[phone_no, setPhone_no] = useState(localStorage.getItem('phone_no'));
  const[year, setYear] = useState(localStorage.getItem('year'));
  const[batch_no, setBatch_no] = useState(localStorage.getItem('batch_no'));
  let authEmail = localStorage.getItem('email');



  // const getData = async () => {
  //   const docRef = doc(db, event, authEmail);
  //   const docSnap = await getDoc(docRef);
  //   console.log("Document data:", docSnap.data());
  // }

  const submit = (e) => {
    e.preventDefault();    

    setDoc(doc(db, "STDATA", authEmail), {
      year: year,
      batch: year+batch_no,
      batch_no: batch_no,
      batch_roll_no: year+batch_no+"-"+roll_no,
      branch: branch,
      gmail: authEmail,
      msteams_mail: msteams_mail,
      name: name,
      phone_no: phone_no,
      reg_no: reg_no,
      roll_no: roll_no,
      smart_card_no: smart_card_no,
      
    });
    localStorage.setItem("name", name);
    localStorage.setItem("reg_no", reg_no);
    localStorage.setItem("branch", branch);
    localStorage.setItem("batch_no", batch_no);
    localStorage.setItem("year", year);
    localStorage.setItem("roll_no", roll_no);
    localStorage.setItem("smart_card_no", smart_card_no);
    localStorage.setItem("msteams_mail", msteams_mail);
    localStorage.setItem("phone_no", phone_no);
    localStorage.setItem("batch_roll_no", year+batch_no+"-"+roll_no);
    localStorage.setItem("batch", year+batch_no);

    console.log("UPDATED DATA");

  };


  // getData();
  return (
    <div id="edit-page">
      <nav className="navbar">
        <h1>registerERR</h1>
        <div className="links">
          <AuthChecker/>
          <Link to="/about" className='link'><h3>About</h3></Link>
        </div>
      </nav>
      <h1 style={{textAlign: "center"}}>Edit Your Details</h1>
      <form className='editdata'>
        <label for="BRANCH" className="editdata-label-1 editdata-label" >BRANCH:</label>
        <select className="editdata-input" name="BRANCH" value={branch} onChange={(e) => setBranch(e.target.value)} >
          <option className="editdata-input-value" value="AI&DS" selected>AI&DS</option>
          <option className="editdata-input-value" value="CM" selected>CM</option>
          <option className="editdata-input-value" value="CYSE" selected>CYSE</option>
          <option className="editdata-input-value" value="EC" selected>EC</option>
          <option className="editdata-input-value" value="ETC" selected>ETC</option>
          <option className="editdata-input-value" value="IT" selected>IT</option>
        </select>

        <label for="ROLL NO" className="editdata-label-2 editdata-label" >ROLL NO:</label>
        <input 
            className="editdata-input"
            label="Roll No"
            type="number"
            placeholder="Roll No"
            value={roll_no}
            onChange={(e) => setRoll_no(e.target.value)}
        />

        <label for="YEAR" className="editdata-label-3 editdata-label" >YEAR:</label>
        <select className="editdata-input" name="YEAR" defaultValue={year} onChange={(e) => setYear(e.target.value)} >
          <option className="editdata-input-value" value="FE" selected>FE</option>
          <option className="editdata-input-value" value="SE" selected>SE</option>
          <option className="editdata-input-value" value="TE" selected>TE</option>
          <option className="editdata-input-value" value="BE" selected>BE</option>
        </select>

        <label for="BATCH" className="editdata-label-4 editdata-label" >BATCH:</label>
        <select className="editdata-input" name="BATCH" defaultValue={batch_no} onChange={(e) => setBatch_no(e.target.value)} >
          <option className="editdata-input-value" value="1" selected>1</option>
          <option className="editdata-input-value" value="2" selected>2</option>
          <option className="editdata-input-value" value="3" selected>3</option>
          <option className="editdata-input-value" value="4" selected>4</option>
          <option className="editdata-input-value" value="5" selected>5</option>
          <option className="editdata-input-value" value="6" selected>6</option>
          <option className="editdata-input-value" value="7" selected>7</option>
          <option className="editdata-input-value" value="8" selected>8</option>
          <option className="editdata-input-value" value="9" selected>9</option>
          <option className="editdata-input-value" value="10" selected>10</option>
          <option className="editdata-input-value" value="11" selected>11</option>
          <option className="editdata-input-value" value="12" selected>12</option>
          <option className="editdata-input-value" value="13" selected>13</option>
          <option className="editdata-input-value" value="14" selected>14</option>
          <option className="editdata-input-value" value="15" selected>15</option>
        </select>

        <label for="MS TEAMS MAIL" className="editdata-label-5 editdata-label" >MS TEAMS MAIL:</label>
        <input
          className="editdata-input"
          label="MS Teams Mail"
          type="email"
          placeholder="user@sakec.ac.in"
          value={msteams_mail}
          onChange={(e) => setMsteams_mail(e.target.value)}
        />

        <label for="PHONE NO" className="editdata-label-6 editdata-label" >PHONE NO:</label>
        <input
          className="editdata-input"
          label="Phone No"
          type="number"
          placeholder="xxxxxxxxxx"
          value={phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
          required
        />

        <label for="NAME" className="editdata-label-7 editdata-label" >NAME:</label>
        <input
          className="editdata-input"
          label="Name"
          type="text"
          placeholder="LASTNAME FIRSTNAME MIDDLENAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="REG NO" className="editdata-label-8 editdata-label" >REG NO:</label>
        <input
          className="editdata-input"
          label="Reg No"
          type="number"
          placeholder="xxxxx"
          value={reg_no}
          onChange={(e) => setReg_no(e.target.value)}
        />

        <label for="SMART CARD NO" className="editdata-label-9 editdata-label" >SMART CARD NO:</label>
        <input
          className="editdata-input"
          label="Smart Card No"
          type="text"
          placeholder="C2021AIDS1007"
          value={smart_card_no}
          onChange={(e) => setSmart_card_no(e.target.value)}
        />

          
        <button onClick={submit} className="editdata-submit" >Update Details</button>
      </form>
    </div>
  );
}

export default EditPage;
