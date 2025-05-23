import './login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";


function Login(){
    const [usuarios, setUsuarios] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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
                alert("Usuário não encontrado");
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
                    <label className='labelLogin' htmlFor="email">Email</label>
                    <div className='iconeDiv'>
                        <input className="inputsLogin" type="email" name="email" placeholder="seunoma@email.com" value={email} 
                            onChange={(e) => setEmail(e.target.value)}  required></input>
                        <img src={mail} className="inputIcon"/>
                    </div>
                    <label className='labelLogin' htmlFor="senha">Password</label>
                    <div className='iconeDiv'>
                        <input className="inputsLogin" type={showPassword ? "text" : "password"} name="senha" placeholder='Password' value={password} 
                            onChange={(e) => setPassword(e.target.value)} required>
                        </input>
                        <img src={lock} className="inputIcon"/>
                    </div>
                    <div className='mostrarSenha'>
                        <input type="checkbox" id="mostrarSenha" checked={showPassword} 
                            onChange={(e) => setShowPassword(e.target.checked)} />
                        <label htmlFor="mostrarSenha">Mostrar a senha.</label>
                    </div>
                    <p className='pPergunta'>Problemas para acessar sua conta?</p>
                    <button className='botao' type="submit">Acessar</button>

                    <div className='linhaLogin'>
                        <div className='traco'></div>
                        <span>Ou</span>
                        <div className='traco'></div>
                    </div>

                    <button className='botaoCadastro' onClick={() => navigate("/cadastro")}>Cadastrar</button>

                    <p className='termos'>Termos de uso • Política de privacidade</p>
                </form>
            </div>
            <footer></footer>
        </div>
    );
}

export default Login;