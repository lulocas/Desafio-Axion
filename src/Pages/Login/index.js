import './login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";


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
                    setUsuarios(json); 
                } catch (error) {
                    console.error("Erro ao carregar API:", error);
                }
            }
    
            carregarApi();
        }, [])

        const verificar= (e) =>{
            console.log(email);
            console.log(password);
            let clienteEncontrado = null;
            e.preventDefault();
            console.log("Usuários carregados:", usuarios);

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i] && usuarios[i].email && usuarios[i].password) {
                    if (usuarios[i].email === email && usuarios[i].password === password) {
                        clienteEncontrado = usuarios[i];
                        console.log("Cliente encontrado:", clienteEncontrado);
                        break;
                    }
                } else {
                    console.error("Usuário sem estrutura esperada:", usuarios[i]);
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
        <div className="main">
            <div className='divPai'>
                <div className='divImagemBG'></div>
            </div>
            <div className="caixaLog">
                <img className='logoImg' src={logo}/>
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