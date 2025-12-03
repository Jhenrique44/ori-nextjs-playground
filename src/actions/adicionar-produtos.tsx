'use server'

import { revalidatePath } from "next/cache";
import { Produto } from "../app/produtos/page";
import { redirect } from "next/navigation";

export async function adicionarProduto(produto: Produto)  { 
    const response = await fetch('https://api.origamid.online/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    });
    if (!response.ok) {
        throw new Error('Erro ao adicionar produto');
    }
    return await response.json();
    revalidatePath('/produtos');
    redirect('/produtos');
}