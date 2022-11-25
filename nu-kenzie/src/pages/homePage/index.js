import "./styles.css";
import { Fragment, useState } from "react";
import Header from "../../components/Header";
import FormCreateValue from "../../components/Form";
import ListValues from "../../components/List";
import DisplayTotal from "../../components/TotalMoney";

function HomePage({ setPage }) {
  const [values, setValues] = useState([]);

  return (
    <Fragment>
      <Header setPage={setPage} />
      <main className="home-main">
        <div className="home-main-organizer">
        <aside className="aside-organizer">
          <FormCreateValue setValues={setValues} values={values}/>
          <DisplayTotal values={values}/>
        </aside>
          <ListValues values={values} setValues={setValues} />
        </div>
      </main>
    </Fragment>
  );
}

export default HomePage;
