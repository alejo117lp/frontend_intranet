import React from "react";
import '../stylesheets/Header.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
/*  Icons are taken from: https://fontawesome.com/v4/icons/ */
/* Código tomado de https://www.devwares.com/blog/create-responsive-sidebar-in-react/ */

function ResponsiveSidebar( {headerText, footerText} ){
  return(
    <div style={{position:'fixed', display: 'flex', height: '100vh', 
         overflow: 'scroll initial',  fontFamily: 'Work Sans'}}>
      <CDBSidebar textColor= "#fff" backgroundColor="#333" toggled={true}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ fontSize: '32px'}}></i>}>
                {headerText}
            </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/Home" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="th-large">Inicio</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/GeneralForm" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="address-card">Formulario</CDBSidebarMenuItem>
                </NavLink>

                {/*<NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user-times">Salir</CDBSidebarMenuItem>
                  </NavLink> */}
            </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper" style={{padding: '20px 5px',}}>
            {footerText}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default ResponsiveSidebar;