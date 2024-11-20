import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Plus, User, Mail, Phone, Lock, X, Edit, Trash2 } from "lucide-react";



const Usuario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    ci: "",
    correo: "",
    password: "",
    confirmaPassword: "",
    idRol: 2,
    activo: true,
  });

  const formFields = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      icon: <User size={18} />,
    },
    {
      name: "apellido",
      label: "Apellido",
      type: "text",
      icon: <User size={18} />,
    },
    {
      name: "telefono",
      label: "Teléfono",
      type: "tel",
      icon: <Phone size={18} />,
    },
    {
      name: "ci",
      label: "Cédula de Identidad",
      type: "number",
      icon: <Lock size={18} />,
    },
    {
      name: "correo",
      label: "Correo Electrónico",
      type: "email",
      icon: <Mail size={18} />,
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      icon: <Lock size={18} />,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...currentUser, id: Date.now() };
    setUsers((prev) => [...prev, newUser]);

    setCurrentUser({
      nombre: "",
      apellido: "",
      telefono: "",
      ci: "",
      correo: "",
      password: "",
      confirmaPassword: "",
      idRol: 2,
      activo: true,
    });

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SubmitButton onClick={() => setIsModalOpen(true)}>
          Registrar Usuario <Plus size={20} />
        </SubmitButton>

        <Table>
          <thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Teléfono</Th>
              <Th>Cédula</Th>
              <Th>Correo</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <Td>{user.nombre}</Td>
                <Td>{user.apellido}</Td>
                <Td>{user.telefono}</Td>
                <Td>{user.ci}</Td>
                <Td>{user.correo}</Td>
                <Td>
                  <ActionButton>
                    <Edit size={18} />
                  </ActionButton>
                  <ActionButton onClick={() => handleDelete(user.id)}>
                    <Trash2 size={18} />
                  </ActionButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>

        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </CloseButton>
              <DynamicForm onSubmit={handleSubmit}>
                {formFields.map((field) => (
                  <FormGroup key={field.name}>
                    <InputLabel htmlFor={field.name}>
                      {field.icon} {field.label}
                    </InputLabel>
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={`Ingrese su ${field.label.toLowerCase()}`}
                      value={currentUser[field.name]}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                ))}
                <div style={{ gridColumn: '1 / -1' }}>
                  <SubmitButton type="submit">
                    Registrar Usuario <Plus size={20} />
                  </SubmitButton>
                </div>
              </DynamicForm>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Usuario;
const theme = {
  colors: {
    primary: "#4A90E2",
    secondary: "#3474D4",
    background: "#FFFFFF",
    text: "#333333",
    accent: "#F0F4F8",
    highlight: "#E6F2FF",
    border: "#E1E8ED",
    danger: "#DC3545"
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    background-color: #f6f9fc;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  padding: 2.5rem;
  width: 600px;
  max-width: 95%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.danger};
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const DynamicForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.highlight};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.accent}80;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
`;

const Th = styled.th`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.1);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;