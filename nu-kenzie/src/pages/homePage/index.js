import { useState } from "react";
import Header from "../../components/Header";
import FormCreateValue from "../../components/Form";

function HomePage({ setPage }) {
  const [values, setValues] = useState([]);

  return (
    <div>
      <Header setPage={setPage} />
      <main>
        <aside>
          <FormCreateValue setValues={setValues} />
        </aside>
      </main>
    </div>
  );
}

export default HomePage;
