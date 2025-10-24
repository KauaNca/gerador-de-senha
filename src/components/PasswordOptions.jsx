import React, { useEffect, useState } from "react";
import Barra from "./Barra";
import CaixaDeSelecao from "./Checkbox";
import Botao from "./Botao";

function PasswordOptions() {
  const [nivel, setNivel] = useState("Forte");
  const [comprimento, setComprimento] = useState(16);

  const [opcoes, setOpcoes] = useState({
    1: true, // maiúsculas
    2: true, // minúsculas  
    3: true, // números
    4: true, // símbolos
  });

  // Atualizar opção individual
  function atualizarOpcao(chave, valor) {
    setOpcoes((prev) => ({ ...prev, [chave]: valor }));
  }

  // ✅ CORRETO: Calcular nível sempre que opcoes OU comprimento mudar
  useEffect(() => {
    const tiposAtivos = Object.values(opcoes).filter(Boolean).length;
    nivelSenha(tiposAtivos, comprimento);
    console.log("Tipos ativos:", tiposAtivos, "Comprimento:", comprimento);
  }, [opcoes, comprimento]); // ← Executa quando qualquer um mudar

  function nivelSenha(tiposAtivos, caracteres) {
    //Objeto com níveis de senha junto com os número de caracteres
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
    
    const tamanhos = Object.keys(faixas) //transformo o objeto recebido em array
      .map(Number) //pecorro
      .sort((a, b) => b - a); //e ordeno 

    const nivelEncontrado = tamanhos.find((tamanho) => caracteres >= tamanho); //encontro o mais próximo
    setNivel(faixas[nivelEncontrado] || "Muito Fraca");
  }

  return (
    <div className="w-full p-4 rounded-sm mt-4 flex flex-col gap-4">
      {/* Sliders */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-start font-medium">
            Força da senha
          </label>
          <span className="text-sm text-gray-300 font-light">{nivel}</span>
        </div>
        
        <div className="mb-4">
          <label className="block text-start mb-2 font-medium">Comprimento: {comprimento}</label>
          <Barra
            value={comprimento}
            max={32}
            min={8}
            step={1}
            onChange={(value) => setComprimento(value)}
          />
        </div>
      </div>

      {/* Checkboxes em grid */}
      <div className="grid grid-cols-2 gap-2">
        <CaixaDeSelecao
          texto="Incluir letras maiúsculas"
          checked={opcoes[1]}
          onChange={(e) => atualizarOpcao(1, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir letras minúsculas" 
          checked={opcoes[2]}
          onChange={(e) => atualizarOpcao(2, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir números"
          checked={opcoes[3]}
          onChange={(e) => atualizarOpcao(3, e.target.checked)}
        />
        <CaixaDeSelecao
          texto="Incluir símbolos"
          checked={opcoes[4]}
          onChange={(e) => atualizarOpcao(4, e.target.checked)}
        />
      </div>
      
      <div>
        <Botao />
      </div>
    </div>
  );
}

export default PasswordOptions;