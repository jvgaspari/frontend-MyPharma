import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src="https://www.mypharma.com.br/wp-content/uploads/2021/05/logo-mypharma-original.png" alt="logo MyPharma"/>
            </S.LeftSide>
            <S.RightSide>
                <Link to='/' className="btn-adc">Início</Link>
                <Link to='/task' className="btn-adc">Adicionar produto</Link>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;