import { useEffect, useState } from "react";
import ClienteCard from "../component/ClienteCard";
import NavBar from "../component/NavBar";
import api from "../service/api";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/clientes");
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container text-center" style={styles.container}>
        <div className="row">
          {data.length !== 0 ? (
            data.map((cliente, index) => (
              <div className="col">
                <ClienteCard key={index} data={cliente} />
              </div>
            ))
          ) : (
            <h1>Carregando...</h1>
          )}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    paddingBlock: 15,
    paddingInline: "5%",
  },
};

export default Home;
