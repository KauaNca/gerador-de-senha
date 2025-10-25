import { useEffect, useState } from 'react';
import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";

function App() {
  // Estado apenas para as opções de caracteres
  const [opcoesCaracteres, setOpcoesCaracteres] = useState({
    1: true, // maiúsculas
    2: true, // minúsculas  
    3: true, // números
    4: true, // símbolos
  });

  // Estados separados
  const [comprimento, setComprimento] = useState(16);
  const [senha, setSenha] = useState("");

  // Função para receber a senha gerada do componente Botão
  const handleSenhaGerada = (novaSenha) => {
    setSenha(novaSenha);
  };

  // Função para recarregar/gerar nova senha
  const handleReloadPassword = () => {
    // Re-gera a senha com as opções atuais
    const novaSenha = gerarSenhaComOpcoesAtuais();
    setSenha(novaSenha);
  };

  // Função para gerar senha baseada nas opções atuais
  const gerarSenhaComOpcoesAtuais = () => {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}<>?,.";

    let caracteresPossiveis = "";
    if (opcoesCaracteres[1]) caracteresPossiveis += letrasMaiusculas;
    if (opcoesCaracteres[2]) caracteresPossiveis += letrasMinusculas;
    if (opcoesCaracteres[3]) caracteresPossiveis += numeros;
    if (opcoesCaracteres[4]) caracteresPossiveis += simbolos;

    // Verificar se pelo menos um tipo de caractere foi selecionado
    if (caracteresPossiveis.length === 0) {
      alert("Selecione pelo menos um tipo de caractere!");
      return "";
    }

    let senhaGerada = "";
    for (let i = 0; i < comprimento; i++) {
      const randomIndex = Math.floor(
        Math.random() * caracteresPossiveis.length
      );
      senhaGerada += caracteresPossiveis[randomIndex];
    }
    
    return senhaGerada;
  };

  // Gerar uma senha inicial quando o componente montar
  useEffect(() => {
    const senhaInicial = gerarSenhaComOpcoesAtuais();
    setSenha(senhaInicial);
  }, []);

  // Log para debug
  useEffect(() => { 
    console.log("Senha atual:", senha);
    console.log("Opções:", { opcoesCaracteres, comprimento });
  }, [senha, opcoesCaracteres, comprimento]);

  return (
    <div className="h-screen w-svw p-6 text-white flex items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-400">
      <div className="w-full max-w-md h-auto p-6 text-center bg-neutral-800 rounded-lg">
        <h1 className="font-bold text-2xl mb-2">Gerador de Senha</h1>
        <span className="text-gray-200 text-lg">
          Crie senhas fortes e seguras para seus projetos
        </span>
        
        {/* PasswordDisplay */}
        <PasswordDisplay 
          senha={senha} 
          reloadPassword={handleReloadPassword} 
        />
        
        {/* PasswordOptions */}
        <PasswordOptions 
          opcoesCaracteres={opcoesCaracteres}
          comprimento={comprimento}
          onAtualizarOpcao={setOpcoesCaracteres}
          onAtualizarComprimento={setComprimento}
          onSenhaGerada={handleSenhaGerada}
        />
        
        {/* Dicas de Segurança */}
        <div className="text-left text-sm p-3 rounded-lg bg-neutral-900 mt-4">
          <span className="block font-medium mb-2">💡 Dicas de Segurança</span>
          <ul className="list-disc pl-4 text-gray-400 space-y-1">
            <li>Use pelo menos 16 caracteres para máxima segurança</li>
            <li>Inclua todos os tipos de caracteres disponíveis</li>
            <li>Nunca reutilize senhas entre diferentes serviços</li>
            <li>Considere usar um gerenciador de senhas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

//estou colocando as funções aqui para facilitar a leitura do código e passando-as como props para o componente PasswordOptions.
//dessa forma, o componente App gerencia o estado principal e a lógica de geração de senhas, enquanto o PasswordOptions lida apenas 
//com a interface do usuário para selecionar opções.