import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Home() {

    const [filterActived, SetFilterActived] = useState("all");
    const[tasks, setTasks] = useState([]);

    async function LoadTasks(){
        await api.get(`/task/filter/${filterActived}`)
            .then(response => {
                setTasks(response.data);
            });
    }

    useEffect(() => {
        LoadTasks();
    }, [filterActived])

    return (
        <S.Container>
            <Header/>
            <S.FilterArea>
                <button type="button" onClick={() => SetFilterActived("positivo")}>
                    <Filter title="positivo" actived={filterActived === 'positivo'} />
                </button>
                <button type="button" onClick={() => SetFilterActived("negativo")}>
                    <Filter title="negativo" actived={filterActived === 'negativo'} />
                </button>
                <button type="button" onClick={() => SetFilterActived("all")}>
                    <Filter title="resetar"/>
                </button>
            </S.FilterArea>
            <S.Content>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Estoque</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Código de barra</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        tasks.map(t => (
                            <tr>
                                <TaskCard 
                                    name={t.name} 
                                    quantity={t.quantity} 
                                    price={t.price} 
                                    description={t.description} 
                                    code={t.code}
                                />
                                <td>
                                    <Link to={`/task/${t._id}`}>
                                        <button type="button">Editar produto</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </form>
            </S.Content>
            <Footer/>
        </S.Container>
    );
}

export default Home;