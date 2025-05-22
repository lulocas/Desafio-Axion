import Header from "../../Components/Header";
import React, { useEffect, useState } from 'react';

function Comidas(){
    const [comidas, setComidas] = useState([]);
    
        useEffect(() => {
            async function carregarApi() {
                const url = "http://localhost:1337/comidas";
    
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    console.log("Dados recebidos da API:", json);
                    setComidas(json); 
                } catch (error) {
                    console.error("Erro ao carregar API:", error);
                }
            }
    
            carregarApi();
        }, [])


    return(
        <>
            <Header/>
            <h3>List of Foods</h3>
            <div className="linha"></div>
            <div className="divimagens">
                {comidas.map((comida) => {
                    return(
                        <div key={comida.id} className="divImg">
                            <p className="titulo">{comida.name}</p>
                            <img src={comida.link} alt={comida.name} className="imagem"/>
                        </div>
                    )
                })}
            
            </div>
        </>
    );
}

export default Comidas;