import React from 'react';
import avatar from '../images/cris-editado.jpg'
import './main.css'

function Header(){
    return (
        <div className="main-container">
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            
            <h1>Cristian Silva</h1>
            <div className="menu">
                <ul>
                    <li>Perfil</li>
                    <li>Fotos</li>
                    <li>Sobre mim</li>
                    <li>Habilidades</li>
                    <li>Rede Sociais</li>
                </ul>
            </div>
        </div>
        
    )
 }

export default Header;