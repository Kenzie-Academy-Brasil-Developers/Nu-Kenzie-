import "./styles.css"
import { useState } from "react";
import Header from "../../components/Header";
import FormCreateValue from "../../components/Form";
import ListValues from "../../components/List";

function HomePage({ setPage }) {
  const [values, setValues] = useState([]);

  return (
    <div>
      <Header setPage={setPage} />
      <main className="home-main">
        <div className="home-main-organizer">
        <aside>
          <FormCreateValue setValues={setValues} values={values}/>
        </aside>
          <ListValues values={values} setValues={setValues} />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
