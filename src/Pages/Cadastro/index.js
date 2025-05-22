import { useState } from "react";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensagem, setMensagem] = useState("");

    const cadastrarUsuario = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:1337/api/clientes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: { nome, email, password }
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMensagem("Cadastro realizado com sucesso!");
            } else {
                setMensagem("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            setMensagem("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Cadastrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default Cadastro;