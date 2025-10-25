import React, { useEffect, useState } from "react";
import Barra from "./Barra";
import CaixaDeSelecao from "./Checkbox";
import Botao from "./Botao";

function PasswordOptions({ opcoesCaracteres, comprimento, onAtualizarOpcao, onAtualizarComprimento, onSenhaGerada }) {
  const [nivel, setNivel] = useState("Forte");
  //onAtualizarOpcao - é o setOpcoesCaracteres do App.jsx
  //onAtualizarComprimento - é o setComprimento do App.jsx

  // Atualizar opção individual de caracteres
  function atualizarOpcao(chave, valor) {
    onAtualizarOpcao(prev => ({ 
      ...prev, 
      [chave]: valor 
    }));
  }

  // ✅ Calcular nível sempre que opcoesCaracteres OU comprimento mudar
  useEffect(() => {
    const tiposAtivos = Object.values(opcoesCaracteres).filter(Boolean).length;
    nivelSenha(tiposAtivos, comprimento);
  }, [opcoesCaracteres, comprimento]);

  function nivelSenha(tiposAtivos, caracteres) {
    console.log(`Tipos ativos: ${tiposAtivos}, Caracteres: ${caracteres}`);
    
    // Objeto com níveis de senha junto com os número de caracteres
    const regras = {
      4: {
        16: "Muito Forte",
        12: "Forte",
        8: "Média",
        0: "Fraca",
      },
      3: {
        12: "Forte",
        8: "Média",
        0: "Fraca",
      },
      2: {
        8: "Média",
        0: "Fraca",
      },
      1: {
        6: "Fraca",
        0: "Muito Fraca",
      },
      0: {
        0: "Muito Fraca",
      },
    };

    const faixas = regras[tiposAtivos] || regras[0];
    
    const tamanhos = Object.keys(faixas)
      .map(Number)
      .sort((a, b) => b - a);

    const nivelEncontrado = tamanhos.find((tamanho) => caracteres >= tamanho);
    setNivel(faixas[nivelEncontrado] || "Muito Fraca");
  }

  // Função para validar e atualizar comprimento
  const handleComprimentoChange = (valor) => {
    const valorValidado = Math.max(8, Math.min(32, valor));
    onAtualizarComprimento(valorValidado);
  };

  return (
    <div className="w-full p-4 rounded-sm mt-4 flex flex-col gap-4">
      {/* Indicador de Força da Senha */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-start font-medium">Força da senha</label>
          <span className={`text-sm font-light ${
            nivel === "Muito Forte" ? "text-green-400" :
            nivel === "Forte" ? "text-blue-400" :
            nivel === "Média" ? "text-yellow-400" :
            nivel === "Fraca" ? "text-orange-400" :
            "text-red-400"
          }`}>
            {nivel}
          </span>
        </div>

        {/* Barra de Comprimento */}
        <div className="mb-4">
          <label className="block text-start mb-2 font-medium">
            Comprimento: <span className="text-teal-300">{comprimento}</span>
          </label>
          <Barra
            value={comprimento}
            defaultValue={16}
            max={32}
            min={8}
            step={1}
            onChange={handleComprimentoChange}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>8</span>
            <span>32</span>
          </div>
        </div>
      </div>

      {/* Checkboxes em grid */}
      <div className="grid grid-cols-2 gap-3">
        <CaixaDeSelecao
          texto="Incluir letras maiúsculas"
          checked={opcoesCaracteres[1]}
          onChange={(e) => atualizarOpcao(1, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir letras minúsculas"
          checked={opcoesCaracteres[2]}
          onChange={(e) => atualizarOpcao(2, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir números"
          checked={opcoesCaracteres[3]}
          onChange={(e) => atualizarOpcao(3, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir símbolos"
          checked={opcoesCaracteres[4]}
          onChange={(e) => atualizarOpcao(4, e.target.checked)}
        />
      </div>

      {/* Botão de Gerar Senha */}
       <div>
        <Botao 
          opcoes={{
            ...opcoesCaracteres,
            comprimento: comprimento
          }} 
          onSenhaGerada={onSenhaGerada} // ✅ Passa a callback
        />
      </div>
    </div>
  );
}

export default PasswordOptions;