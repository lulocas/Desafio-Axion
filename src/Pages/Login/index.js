import './login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [usuarios, setUsuarios] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
        useEffect(() => {
            async function carregarApi() {
                const url = "http://localhost:1337/clientes";
    
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    console.log("Dados recebidos da API:", json);
                    setUsuarios(json.data || []); 
                } catch (error) {
                    console.error("Erro ao carregar API:", error);
                }
            }
    
            carregarApi();
        }, [])

        const verificar= (e) =>{
            let clienteEncontrado = null;
            e.preventDefault();
            for (let i = 0; i < usuarios.length; i++) {
                console.log(usuarios[i]);
                if (usuarios[i].attributes.email === email && usuarios[i].attributes.password === password) {
                    clienteEncontrado = usuarios[i];
                    break; 
                }
            }
            if (clienteEncontrado) {
                alert("Login feito com sucesso!");
                localStorage.setItem("usuario", JSON.stringify(clienteEncontrado));
                navigate("/comidas");
            } else {
                console.log("Usuário não encontrado");
            }
        }

    return(
        <div className='main'>
            <div className="caixaLog">
                <h1 className='tituloLog'>Orange</h1>
                <form className="inputsLog" onSubmit={verificar}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="seunoma@email.com" value={email} 
                        onChange={(e) => setEmail(e.target.value)}  required></input>
                    <label htmlFor="senha">Password</label>
                    <input type="password" name="senha" placeholder='Password' value={password} 
                        onChange={(e) => setPassword(e.target.value)} required></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;