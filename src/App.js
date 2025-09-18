import React from "react";
import "./App.css";
import Table_body from "./components/Table_body";
import Header from "./components/Header.js";
import axios from "axios";

// React.useEffect(() => {
//   axios.get("https://fakerapi.it/api/v2/persons").then((res) => {
//     setItems(res.data);
//   });
// }, []);

function App() {
  // const arr = [
  //   {
  //     firstName: "misha ivanov",
  //     email: "kristian.cummings@powlowski.com",
  //     age: "21",
  //     website: "http:hettinger.biz",
  //     address: "Arvel Underpass 7427",
  //     phoneNumber: "8 922 622- 18-98",
  //   },
  //   {
  //     firstName: "ivan",
  //     email: "kristian.cummings@powlowski.com",
  //     age: "21",
  //     website: "http:hettinger.biz",
  //     address: "Arvel Underpass 7427",
  //     phoneNumber: "8 922 622- 18-98",
  //   },
  // ];
  const [users, setUsers] = React.useState([]);
  // console.log(users);

  // React.useEffect(() => {
  //   fetch("https://fakerapi.it/api/v2/persons")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setUsers(json);
  //       console.log(setUsers(json));
  //     });
  // });
  React.useEffect(() => {
    axios("https://fakerapi.it/api/v2/persons").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="content">
        <h1> Студенты</h1>
        <div className="filter_block">
          <div className="search_block">
            <img height={18} width={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск по имени" />
          </div>
          {/* <div className="sort_block"> */}
          <nav className="sort_block">
            <ul className="topMenu">
              <li className="dropdownBtn">Имя А-Я</li>
              <img src="/img/sort.svg" width={20} height={20} />
            </ul>
            <ul className="subMenu">
              <li> Имя А-Я</li>
              <li>Имя Я-А</li>
              <li>Сначала моложе</li>
              <li>Сначала старше</li>
              <li>Высокий рейтинг</li>
              <li>Низкий рейтинг</li>
            </ul>
          </nav>
          {/* </div> */}
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
            {users.map((obj) => (
              <Table_body
                // key={index}
                firstName={obj.firstName}
                email={obj.email}
                age={obj.age}
                website={obj.website}
                address={obj.address}
                phoneNumber={obj.phoneNumber}
              />
            ))}
            {/* <Table_body
              // key={index}
              firstName="misha ivanov"
              email="kristian.cummings@powlowski.com"
              age={21}
              website="http:hettinger.biz"
              address="Arvel Underpass 7427"
              phoneNumber="8 922 622- 18-98"
            /> */}
          </div>
        </table>
      </div>
    </div>
  );
}

export default App;
