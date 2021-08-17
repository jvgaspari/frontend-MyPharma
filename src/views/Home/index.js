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
    const[searchTerm, setSearchTerm] = useState('');

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
            <S.Search>
            <input
                type="search"
                placeholder="Faça uma busca ..."
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />
            </S.Search>
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
                        tasks.filter((val) => {
                            if(searchTerm === ''){
                                return val;
                            }else if(
                                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.description.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }
                        }).map(t => (
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
                                        <button type="button" className="btn-edt">Editar produto</button>
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