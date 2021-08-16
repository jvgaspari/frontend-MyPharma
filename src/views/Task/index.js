import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Task({match}) {

    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [code, setCode] = useState();

    async function LoadTaskDetails(){
        await api.get(`/task/${match.params.id}`)
        .then(response => {
            setName(response.data.name)
            setQuantity(response.data.quantity)
            setPrice(response.data.price)
            setDescription(response.data.description)
            setCode(response.data.code)
        })
    }

    async function Save(){
        //validação dos dados
        if(!name)
            return alert('Você precisa preencher o nome do produto');
        else if(!quantity)
            return alert('Você precisa preencher a quantidade do produto');
        else if(!price)
            return alert('Você precisa preencher o preço do produto');
        else if(!description)
            return alert('Você precisa preencher a descrição do produto');
        else if(!code)
            return alert('Você precisa preencher o código do produto');

        if(match.params.id){
            await api.put(`/task/${match.params.id}`, {
                name,
                quantity,
                price,
                description,
                code
            }).then(() =>
                setRedirect(true)
            )
        }else{
            await api.post('/task', {
                name,
                quantity,
                price,
                description,
                code
            }).then(() =>
                setRedirect(true)
            )
        }
    }

    async function Remove(){
        const res = window.confirm('Deseja remover essa tarefa?')
        if(res === true){
            await api.delete(`/task/${match.params.id}`)
            .then(() => 
                setRedirect(true)
            )
        }
    }

    useEffect(() => {
        LoadTaskDetails()
    }, [])

    return (
        <S.Container>
            { redirect && <Redirect to='/'/> }
            <Header/>
            <S.Form>
                <S.Input>
                    <span>Nome</span>
                    <input 
                        type="text" 
                        placeholder="Adicione o nome do produto"
                        onChange={ e => setName(e.target.value) }
                        value = { name }
                    />
                </S.Input>
                <S.Input>
                    <span>Quantidade</span>
                    <input 
                        type="number" 
                        placeholder="Adicione a quantidade de itens"
                        onChange={ e => setQuantity(e.target.value) }
                        value = { quantity }
                    />
                </S.Input>
                <S.Input>
                    <span>Preço</span>
                    <input 
                        type="number" 
                        placeholder="Adicione o preço do produto"
                        onChange={ e => setPrice(e.target.value) }
                        value = { price }
                    />
                </S.Input>
                <S.Input>
                    <span>Código</span>
                    <input 
                        type="text" 
                        placeholder="Adicione o código de barras"
                        onChange={ e => setCode(e.target.value) }
                        value = { code }
                    />
                </S.Input>
                <S.TextArea>
                    <span>Descrição</span>
                    <textarea 
                        rows={5} 
                        placeholder="Descreva o produto"
                        onChange={ e => setDescription(e.target.value) }
                        value = { description }
                    />
                </S.TextArea>
                <S.Options>
                { match.params.id && <button type="button" onClick={Remove}>Excluir</button> }
                </S.Options>
                <S.Save>
                    <button type="button" onClick={Save}>{ match.params.id ? 'Atualizar':'Cadastrar' }</button>
                </S.Save>
            </S.Form>
            <Footer/>
        </S.Container>
    );
}

export default Task;