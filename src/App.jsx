import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Create from "./component/Create";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Switch, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./component/Read";
import Update from "./component/Update";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [data, setData] = useState(null | {} | []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(!prefersDarkMode);
  const [check, setCheck] = useState(false);
  const [ButtonToggle, setButtonToggle] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  const handleUpdate = (item) => {
    let { id, name, age, gender, email, enrollment, phone, check } = item;
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("enrollment", enrollment);
    localStorage.setItem("check", check);
    console.log(data);
  };
  

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3000/students/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting data:", err);
      });
  };

  const handleCheck = (item) => {
    setData(data.map(d => (d.id === item.id ? { ...d, checked: !d.checked } : d)));
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header mode={mode} handleChange={handleChange} />
        <Routes>
          <Route
            path="/create"
            element={
              <Create
                data={data}
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                check={check}
                setCheck={setCheck}
                enrollment={enrollment}
                setEnrollment={setEnrollment}
                ButtonToggle={ButtonToggle}
                setButtonToggle={setButtonToggle}
              />
            }
          />
          <Route
            path="/read"
            element={
              <Read
                data={data}
                loading={loading}
                error={error}
                handleUpdate={handleUpdate}
                onDelete={onDelete}
                handleCheck={handleCheck}
              />
            }
          />
          <Route
            path="/update"
            element={
              <Update
                id={id}
                setId={setId}
                data={data}
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                check={check}
                setCheck={setCheck}
                enrollment={enrollment}
                setEnrollment={setEnrollment}
                ButtonToggle={ButtonToggle}
                setButtonToggle={setButtonToggle}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
