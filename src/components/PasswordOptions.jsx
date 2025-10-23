import React, { useEffect, useState } from "react";
import Barra from "./Barra";
import CaixaDeSelecao from "./Checkbox";
import Botao from "./Botao";

function PasswordOptions() {
  const [nivel, setNivel] = useState("Forte");
  const [usarMaiusculas, setMaiusculas] = useState(true);
  const [usarMinusculas, setMinusculas] = useState(true);
  const [usarNumeros, setNumeros] = useState(true);
  const [usarSimbolos, setSimbolos] = useState(true);

  const [opcoes, setOpcoes] = useState({
    1: usarMaiusculas,
    2: usarMinusculas,
    3: usarNumeros,
    4: usarSimbolos,
  });
  useEffect(() => {
    console.log(opcoes);
  }, [opcoes]);

  function atualizarOpcao(chave, valor) {
    setOpcoes((prev) => ({
      ...prev,
      [chave]: valor,
    }));
  }
  function nivelSenha(valor) {
    if (valor === 4) {
      setNivel("Muito Forte");
    }
    if (valor === 3) {
      setNivel("Forte");
    }
    if (valor === 2) {
      setNivel("Média");
    }
    if (valor === 1) {
      setNivel("Fraca");
    }
  }
  function opcoesDeSenha(mudanca) {
    console.log(mudanca);
    console.log(opcoes);
  }
  return (
    <div className="w-full p-4 rounded-sm mt-4 flex flex-col gap-4">
      {/* //Sliders */}
      <div className="">
        <div className="">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-start mb-2 font-medium">
              Força da senha
            </label>
            <span className="text-sm text-gray-300 font-light">{nivel}</span>
          </div>
          <Barra
            defaultValue={3}
            max={4}
            min={1}
            tooltip={{ open: true }}
            onChange={(value) => nivelSenha(value)}
          />
        </div>

        <label className="block text-start mb-2 font-medium">Comprimento</label>
        <Barra defaultValue={16} max={32} min={8} step={1} />
      </div>

      {/* //Checkboxes em grid*/}
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
      <div className="">
        <Botao />
      </div>
    </div>
  );
}

export default PasswordOptions;
