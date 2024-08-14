import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import Select from 'react-select';
import Terminal from './Terminal';

/*
Denna komponent implementerar en testmiljö för att experimentera med bcryptjs, ett bibliotek för att kryptera och jämföra lösenord.
Här är en kort sammanfattning av vad komponenten gör:

- Användaren kan ange två lösenord i två separata fält.
- Lösenorden krypteras med bcryptjs när de ändras och visas som krypterade strängar.
- Användaren kan jämföra lösenorden för att se om de matchar varandra.
- Resultatet av jämförelsen visas och uppdateras i realtid.
- Användaren kan välja att jämföra de krypterade lösenorden eller de okrypterade lösenorden.
- En terminalkomponent används för att visa de krypterade lösenorden och jämförelseresultaten.
*/

const TestBcrypt = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [hashedPassword1, setHashedPassword1] = useState('');
  const [hashedPassword2, setHashedPassword2] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [compareResult, setCompareResult] = useState('');
  const [selectedCompareResult, setSelectedCompareResult] = useState('');

  // Encrypts and sets password1
  const setAndEncryptPwd1 = (pwd1) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pwd1, salt);
    setPassword1(pwd1);
    setHashedPassword1(hash);
  };

  // Encrypts and sets password2
  const setAndEncryptPwd2 = (pwd2) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pwd2, salt);
    setPassword2(pwd2);
    setHashedPassword2(hash);
  };

  // Compares two passwords
  const handleCompare = (compareOptions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        bcrypt.compare(compareOptions[0].value, compareOptions[1].value, function (err, result) {
          if (err) {
            console.error('Error comparing passwords:', err);
            reject(err);
          } else {
            resolve(result ? 'Passwords match!' : 'Passwords do not match!');
          }
        });
      }, 2000);
    });
  };

  // Handles compare button click
  const handleCompareButtonClick = async (compareOptions, setResult) => {
    try {
      setResult('Loading..');
      const result = await handleCompare(compareOptions);
      setResult(result);
    } catch (error) {
      setResult('Error occurred');
    }
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  // Updates options when passwords change
  useEffect(() => {
    const updatedOptions = [];
    const fields = [
      { field: password1, label: 'password1' },
      { field: password2, label: 'password2' },
      { field: hashedPassword1, label: 'hashedPassword1' },
      { field: hashedPassword2, label: 'hashedPassword2' },
    ];

    fields.forEach(({ field, label }) => {
      if (field) {
        updatedOptions.push({ value: field, label });
      } else {
        setOptions(options => options.filter(option => option.label !== label));
      }
    });

    setOptions(updatedOptions);
  }, [password1, password2, hashedPassword1, hashedPassword2]);

  return (
    <div>
      <div className="password-wrapper">
        <label htmlFor="password1">Password1 </label>
        <input
          type={showPassword1 ? "text" : "password"}
          id="password1"
          value={password1}
          onChange={(e) => setAndEncryptPwd1(e.target.value)}
        />
        <input
          type="checkbox"
          id="showPassword1"
          checked={showPassword1}
          onChange={() => setShowPassword1(!showPassword1)}
        />
        <span style={{ verticalAlign: "bottom" }}>
          {showPassword1 ? " Hide" : " Show"}
        </span>
      </div>
      <br />
      <div className="password-wrapper">
        <label htmlFor="password2">Password2 </label>
        <input
          type={showPassword2 ? "text" : "password"}
          id="password2"
          value={password2}
          onChange={(e) => setAndEncryptPwd2(e.target.value)}
        />
        <input
          type="checkbox"
          id="showPassword2"
          checked={showPassword2}
          onChange={() => setShowPassword2(!showPassword2)}
        />
        <span style={{ verticalAlign: "bottom" }}>
          {showPassword2 ? " Hide" : " Show"}
        </span>
      </div>
      <br />
      <Select
        isMulti
        name="pwds"
        placeholder={'First password, then hashed'}
        options={options}
        onChange={handleMultiSelectChange}
        className="basic-multi-select"
        classNamePrefix="select"
        isDisabled={!password1 && !password2}
      />
      <button onClick={() => handleCompareButtonClick(options.slice(0, 2), setCompareResult)}
        disabled={options.length < 2}>
        <small>Compare <strong>{options[0] ? options[0].label : '{pwd}'}</strong> with <strong>{options[1] ? options[1].label : '{hashedPwd}'}</strong></small>
      </button>
      <button onClick={() => handleCompareButtonClick(selectedOptions.slice(0, 2), setSelectedCompareResult)}
        disabled={selectedOptions.length < 2}>
        <small>Compare <strong>{selectedOptions[0] ? selectedOptions[0].label : '{pwd}'}</strong> with <strong>{selectedOptions[1] ? selectedOptions[1].label : '{hashedPwd}'}</strong></small>
      </button>
      <br />
      Hashed password 1: <Terminal hashedPassword1={hashedPassword1} />
      Hashed password 2: <Terminal hashedPassword2={hashedPassword2} />
      Compare passwords: <Terminal compareResult={compareResult} />
      Compare <u>selected</u> passwords: <Terminal selectedCompareResult={selectedCompareResult} />
    </div>
  );
};

export default TestBcrypt;