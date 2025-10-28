import React from "react";
import "./App.css";
import Table_body from "./components/Table_body.jsx";
import Header from "./components/Header.jsx";
import axios from "axios";
import Sort from "./components/Sort.jsx";
import users from "./assets/users.json";
import Search from "./components/Search.jsx";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue, setSearchValue);
  return (
    <div>
      <Header />
      <div className="content">
        <h1> Студенты</h1>
        <div className="filter_block">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Sort />
        </div>
        <table>
          <div className="users">
            <thead className="table_heading">
              <th>Имя Фамилия</th>
              <th>Email</th>
              <th>Возраст</th>
              <th>Сайт</th>
              <th>Адрес</th>
              <th>Телефон</th>
            </thead>
            {users
              .filter(({ firstName, lastName }) => {
                const fullName = `${firstName} ${lastName}`;
                const studName = `${lastName} ${firstName}`;

                return (
                  fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
                  studName.toLowerCase().includes(searchValue.toLowerCase())
                );
              })
              .map((obj, index) => (
                <Table_body
                  key={index}
                  firstName={obj.firstName}
                  lastName={obj.lastName}
                  email={obj.email}
                  age={obj.age}
                  website={obj.website}
                  address={obj.address}
                  numberPhone={obj.numberPhone}
                />
              ))}
          </div>
        </table>
      </div>
    </div>
  );
}

export default App;
