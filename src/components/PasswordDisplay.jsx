import React from "react";
import { CopyOutlined,ReloadOutlined } from "@ant-design/icons";
import {useState} from "react";

function PasswordDisplay({ password, reloadPassword }) {
    const [senha, setSenha] = useState("12345");

    function copyPassword(){
        navigator.clipboard.writeText(senha); //permite copiar 
    }
  return (
    <div className="w-full p-4 bg-amber-700/30 rounded-sm mt-4 flex items-center">
        <span className="flex-grow text-lg break-all">{password}</span>
        <button type="button" className="p-2 !bg-amber-700/30 rounded-sm hover:!bg-indigo-700 transition-colors me-1 " onClick={copyPassword}>
            <CopyOutlined />
        </button>
        <button type="button" className="p-2 !bg-amber-700/30 hover:!bg-indigo-700 rounded-sm transition-colors" onCLick={reloadPassword}>
            <ReloadOutlined />
        </button>
    </div>
  );
}

export default PasswordDisplay;

//reloadPassword vai ser uma função vinda de outro arquivo
//copyPassword é uma função que copia a senha para a área de transferência
