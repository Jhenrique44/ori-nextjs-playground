'use client';

import { adicionarProduto } from "../actions/adicionar-produtos";
import { Produto } from "../app/produtos/page";

export default function AdicionarProduto()  {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data: Produto ={ 
            nome: event.currentTarget.nome.value,
            preco: Number(event.currentTarget.preco.value),
            descricao: event.currentTarget.descricao.value,
            estoque: Number(event.currentTarget.estoque.value),
            importado: event.currentTarget.importado.checked ? 1 : 0,
        }
        await adicionarProduto(data);
        alert('Produto adicionado com sucesso!');
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
            <br />
            <label htmlFor="preco">Preço</label>            
            <input type="number" name="preco" id="preco" />
            <br />
            <label htmlFor="descricao">Descrição</label>            
            <textarea name="descricao" id="descricao" />
            <br />
            <label htmlFor="estoque">Estoque</label>
            <input type="number" name="estoque" id="estoque" />
            <br />
            <label htmlFor="importado">
            <input type="checkbox" id="importado" name="importado"/>
            Importado
            </label>
            <br />
            <button type="submit">Adicionar</button>
        </form>
    )
}