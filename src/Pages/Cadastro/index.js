import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import './cadastro.css';

function Cadastro() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const cadastrarUsuario = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:1337/clientes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user,
                    email,
                    password
                })
                

            });

            console.log(user, email, password);
            if (response.ok) {
                alert("Cadastro realizado com sucesso! Agora faça seu login.");
                navigate("/");
            } else {
                alert("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div className="main">
            <div className='divPai'>
                <div className='divImagemBG'></div>
            </div>
            <div className="caixaLog">
                <img className='logoImg' src={logo}/>
                <form className="inputsLog" onSubmit={cadastrarUsuario}>
                    <label className='labelLogin' htmlFor="user">Username</label>
                    <input className="inputsLogin" type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} required />
                    <label className='labelLogin' htmlFor="email">Email</label>
                    <div className='iconeDiv'>
                        <input className="inputsLogin" type="email" placeholder="seunoma@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <img src={mail} className="inputIcon"/>
                    </div>
                    <label className='labelLogin' htmlFor="senha">Password</label>
                    <div className='iconeDiv'>
                        <input className="inputsLogin" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <img src={lock} className="inputIcon"/>
                    </div>
                    <div className='mostrarSenha'>
                        <input type="checkbox" id="mostrarSenha" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
                        <label htmlFor="mostrarSenha">Mostrar a senha.</label>
                    </div>
                    <button className='botaoCadastrar'>Cadastrar</button>
        
                    <div className='linhaLogin'>
                        <div className='traco'></div>
                        <span>Ou</span>
                        <div className='traco'></div>
                    </div>
        
                    <button className='botaoLogin' onClick={() => navigate("/")}>Login</button>
        
                    <p className='politica'>Termos de uso • Política de privacidade</p>
                </form>
            </div>
            <footer></footer>
        </div>
    );
}

export default Cadastro;