import { useState } from "react";
import { DefaultLabelImput } from "../../component/DefaultLabelImput";
import NavBar from "../../component/NavBar";
import "./styles.css";
import api from "../../service/api";

function CadastrarCliente() {
  const [form, setForm] = useState({});
  const handleChangeClienteImput = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const [endereco, setEndereco] = useState();
  const handleChangeEnderecoImput = (field, value) => {
    setEndereco((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/clientes", {
        ...form,
        endereco: {
          ...endereco,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="customContainer">
        <h1>Cadastrar Cliente</h1>
        <form className="containerForm" onSubmit={handleSubmit}>
          <DefaultLabelImput
            label="Nome"
            onChange={(event) =>
              handleChangeClienteImput("nome", event.target.value)
            }
          />
          <DefaultLabelImput
            label="Sobrenome"
            onChange={(event) =>
              handleChangeClienteImput("sobrenome", event.target.value)
            }
          />
          <DefaultLabelImput
            label="Data nascimento"
            type="date"
            onChange={(event) =>
              handleChangeClienteImput("dataNascimento", event.target.value)
            }
          />
          <DefaultLabelImput
            label="CPF"
            onChange={(event) =>
              handleChangeClienteImput("cpf", event.target.value)
            }
          />
          <DefaultLabelImput
            label="Email"
            onChange={(event) =>
              handleChangeClienteImput("email", event.target.value)
            }
          />
          <div className="containerFormEndereco">
            <DefaultLabelImput
              label="Rua"
              onChange={(event) =>
                handleChangeEnderecoImput("rua", event.target.value)
              }
            />
            <DefaultLabelImput
              label="Numero"
              onChange={(event) =>
                handleChangeEnderecoImput("numero", event.target.value)
              }
            />
          </div>
          <div>
            <DefaultLabelImput
              label="Bairro"
              onChange={(event) =>
                handleChangeEnderecoImput("bairro", event.target.value)
              }
            />
            <DefaultLabelImput
              label="CEP"
              onChange={(event) =>
                handleChangeEnderecoImput("cep", event.target.value)
              }
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default CadastrarCliente;
