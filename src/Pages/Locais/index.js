import Header from "../../Components/Header";
import React, { useEffect, useState } from 'react';

function Locais(){
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function carregarApi() {
            const url = "http://localhost:1337/locais";

            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("Dados recebidos da API:", json);
                setLocais(json); 
            } catch (error) {
                console.error("Erro ao carregar API:", error);
            }
        }

        carregarApi();
    }, [])

    return(
        <>
            <Header/>
            <h3>List of Places</h3>
            <div className="linha"></div>
            <div className="divimagens">
                {locais.map((local) => {
                    return(
                        <div key={local.id} className="divImg">
                            <p className="titulo">{local.name}</p>
                            <img src={local.link} alt={local.name} className="imagem"/>
                        </div>
                    )
                })}
            
            </div>
        </>
    );
}

export default Locais;