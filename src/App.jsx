// import { useState } from 'react'
import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";

function App() {
  return (
    <div className="h-screen w-svw p-6 text-white flex items-center justify-center bg-linear-to-r/increasing from-indigo-500 to-teal-400">
      <div className="w-xl h-auto p-4 text-center bg-neutral-800 rounded-lg">
        <h1 className="font-bold titulo">Gerador de senha</h1>
        <span className="text-gray-200 text-lg">Crie senhas fortes e seguras para seus projetos</span>
        <PasswordDisplay password="123456" />
        <PasswordOptions />
        <div className="text-left text-sm p-2 pl-4 rounded-lg bg-neutral-900">
          <span className="block">💡 Dicas de Segurança</span>
          <ul className="list-disc pl-4 text-gray-400 ">
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
