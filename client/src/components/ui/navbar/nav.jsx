import React, { useState } from 'react';
import { FaBell, FaBook, FaChalkboard, FaHome, FaProjectDiagram, FaTasks, FaUserFriends } from "react-icons/fa";
import { Container, ContainerPadre, DivI, DivOutlet, LogoContainer, LogoIcon, LogoText, NavItem, NavItems } from '../../../style/navStyle';
import { Outlet } from 'react-router-dom';
import { ROUTES } from '../../../enums/routes/Routes';
import NavRight from './navRight';

const Nav = () => {

    const [isNavRead, setisNavRead] = useState(false);

    const navRead = () => {
        setisNavRead(!isNavRead);
    };

    return (
        <ContainerPadre>
            <Container>
                <LogoContainer>
                    <LogoIcon />
                    <LogoText>GestTeam</LogoText>
                </LogoContainer>
                <NavItems>
                    <NavItem to={ROUTES.DASHBOARD}>
                        <DivI><FaHome /></DivI> Inicio
                    </NavItem>
                    <NavItem to={ROUTES.MATERIA}>
                        <DivI><FaBook /></DivI> Materias
                    </NavItem>
                    <NavItem to={ROUTES.PROYECTO}>
                        <DivI><FaProjectDiagram /></DivI> Proyectos
                    </NavItem>
                    <NavItem to={ROUTES.COLABORACION}>
                        <DivI><FaUserFriends /></DivI> Colaboraciones
                    </NavItem>
                    <NavItem to={ROUTES.NOTIFICACION}>
                        <DivI><FaBell /></DivI> Notificaciones
                    </NavItem>
                    <NavItem to={ROUTES.TAREAPENDIENTE}>
                        <DivI><FaTasks /></DivI> Tareas Pendientes
                    </NavItem>
                    <NavItem to={ROUTES.PIZARRA}>
                        <DivI><FaChalkboard /></DivI> Pizarras
                    </NavItem>
                </NavItems>
            </Container>

            <DivOutlet>
                <Outlet />
            </DivOutlet>

            <NavRight isNavRead = {isNavRead} navRead={navRead}/>
        </ContainerPadre>
    );
};

export default Nav;
