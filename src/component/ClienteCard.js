import { Link } from "react-router-dom";

function ClienteCard({ data }) {
  return (
    <div className="card mb-3">
      <div className="card-body" style={styles.cardStyles}>
        <div style={styles.cardTitleContainer}>
          <h5 className="card-title" style={styles.title}>
            {`${data.nome} ${data.sobrenome}`}
          </h5>
        </div>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>Email: </strong> {data.email}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>CPF:</strong> {data.cpf}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>Data de nascimento:</strong>{" "}
          {data.dataNascimento}{" "}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>Endereço:</strong>{" "}
          {`${data.endereco.rua}, ${data.endereco.numero} - ${data.endereco.bairro}`}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>CEP:</strong> {data.endereco.cep}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>Conta Numero:</strong>{" "}
          {data.contaNumero}
        </p>
        <p className="card-text" style={styles.cardParagraph}>
          <strong style={styles.strongText}>Saldo:</strong> {data.contaSaldo}
        </p>
        <Link className="btn btn-primary" to={`/clientes/${data.id}`}>
          {" "}
          Acessar{" "}
        </Link>
      </div>
    </div>
  );
}

const styles = {
  cardStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#DDD",
  },
  cardTitleContainer: {
    borderBottom: " 2px solid black",
    width: "100%",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
  },
  strongText: {
    textTransform: "uppercase",
  },
  cardParagraph: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};

export default ClienteCard;
