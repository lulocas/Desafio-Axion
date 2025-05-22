import Header from "../../Components/Header";
import React, { useEffect, useState } from 'react';

function Pessoas(){
    const [pessoas, setPessoas] = useState([]);
    
        useEffect(() => {
            async function carregarApi() {
                const url = "http://localhost:1337/pessoas";
    
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    console.log("Dados recebidos da API:", json);
                    setPessoas(json); 
                } catch (error) {
                    console.error("Erro ao carregar API:", error);
                }
            }
    
            carregarApi();
        }, [])

    return(
        <>
            <Header/>
            <h3>List of People</h3>
            <div className="linha"></div>
            <div className="divimagens">
                {pessoas.map((pessoa) => {
                    return(
                        <div key={pessoa.id} className="divImg">
                            <p className="titulo">{pessoa.name}</p>
                            <img src={pessoa.link} alt={pessoa.name} className="imagem"/>
                        </div>
                    )
                })}
            
            </div>
        </>
    );
}

export default Pessoas;