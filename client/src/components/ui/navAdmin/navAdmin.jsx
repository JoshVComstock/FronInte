import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  UserCircle,
  LogOut,
  Settings,
  Bell,
  Search,
  Users,
  Database,
  Calendar,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../enums/routes/Routes";
import { useNavigate } from "react-router-dom";
const theme = {
  colors: {
    primary: "#4A90E2",
    secondary: "#3474D4",
    background: "#FFFFFF",
    text: "#333333",
    accent: "#F0F4F8",
    highlight: "#E6F2FF",
    border: "#E1E8ED",
    danger: "#DC3545",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
    },
  },
};

const NavContainer = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  height: 65px;
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  flex-grow: 1;
  max-width: 400px;
  margin: 0 2rem;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex-grow: 1;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => props.theme.colors.text};
  &:focus {
    outline: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }

  position: relative;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.675rem;
`;

const UserProfileTrigger = styled(IconButton)`
  background-color: ${(props) =>
    props.isOpen ? props.theme.colors.highlight : "transparent"};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 250px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 50;
`;

const DropdownHeader = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DropdownItemsList = styled.div`
  padding: 0.5rem 0;
`;

const DropdownItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  border-radius: 8px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  color: ${(props) => props.theme.colors.text};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }

  svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.colors.primary};
  }

  &.logout {
    color: ${(props) => props.theme.colors.danger};

    svg {
      color: ${(props) => props.theme.colors.danger};
    }
  }
`;

const NavButton = styled(Link)`
  padding: 0.625rem 1.25rem;
  background-color: ${(props) =>
    props.variant === "outline" ? "transparent" : props.theme.colors.primary};
  color: ${(props) =>
    props.variant === "outline"
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline"
        ? props.theme.colors.highlight
        : props.theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const NavbarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const navigate = useNavigate();
  const logout = () => {
    return navigate(ROUTES.LOGIN);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavContainer>
          <NavContent>
            <LogoSection>
              <Logo>Unifranz</Logo>
            </LogoSection>

            <SearchContainer>
              <Search size={20} color="#888" />
              <SearchInput placeholder="Buscar..." />
            </SearchContainer>

            <NavActions>
              <NavButton variant="outline" to={ROUTES.USUARIO}>
                <Users size={18} />
                Usuario
              </NavButton>
              <NavButton to={ROUTES.FACULTAD}>
                <Database size={18} />
                Facultades
              </NavButton>
              <UserProfileTrigger
                isOpen={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <UserCircle size={24} />

                {isDropdownOpen && (
                  <DropdownMenu>
                    <DropdownHeader>
                      <UserCircle size={32} />
                      <div>
                        <div>Admin User</div>
                        <div
                          style={{
                            color: theme.colors.text,
                            opacity: 0.6,
                            fontSize: theme.typography.fontSize.small,
                          }}
                        >
                          admin@example.com
                        </div>
                      </div>
                    </DropdownHeader>

                    <DropdownItemsList>
                      <DropdownItem>
                        <Settings size={18} />
                        Perfil
                      </DropdownItem>
                      <DropdownItem>
                        <Calendar size={18} />
                        Actividades
                      </DropdownItem>
                      <DropdownItem className="logout" onClick={logout}>
                        <LogOut size={18} />
                        Salir
                      </DropdownItem>
                    </DropdownItemsList>
                  </DropdownMenu>
                )}
              </UserProfileTrigger>
              <IconButton>
                <Bell size={20} />
                {notifications > 0 && (
                  <NotificationBadge>{notifications}</NotificationBadge>
                )}
              </IconButton>
            </NavActions>
          </NavContent>
        </NavContainer>
        <DivOutlet>
          <Outlet />
        </DivOutlet>
      </Container>
    </ThemeProvider>
  );
};

export default NavbarAdmin;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const DivOutlet = styled.div`
  height: calc(65px - 100%);
  margin: 20px;
`;
