import React from "react";
import { Button, ConfigProvider } from "antd";
import "./Botao.css";

function Botao({ opcoes, onSenhaGerada }) { // ✅ Adicione onSenhaGerada
  function gerarSenha() {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}<>?,.";

    let caracteresPossiveis = "";
    if (opcoes[1]) caracteresPossiveis += letrasMaiusculas;
    if (opcoes[2]) caracteresPossiveis += letrasMinusculas;
    if (opcoes[3]) caracteresPossiveis += numeros;
    if (opcoes[4]) caracteresPossiveis += simbolos;

    // Verificar se pelo menos um tipo de caractere foi selecionado
    if (caracteresPossiveis.length === 0) {
      alert("Selecione pelo menos um tipo de caractere!");
      return;
    }

    let senha = "";
    for (let i = 0; i < opcoes.comprimento; i++) {
      const randomIndex = Math.floor(
        Math.random() * caracteresPossiveis.length
      );
      senha += caracteresPossiveis[randomIndex];
    }
    
    // ✅ Em vez de modificar diretamente, chama a callback
    onSenhaGerada(senha);
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7b00",
          colorBgContainer: "#ff7b00", 
          colorText: "#ffffff",
        },
      }}
    >
      <Button
        type="primary"
        size="large"
        className="botao-gradient"
        block
        onClick={gerarSenha}
      >
        Gerar nova senha
      </Button>
    </ConfigProvider>
  );
}

export default Botao;