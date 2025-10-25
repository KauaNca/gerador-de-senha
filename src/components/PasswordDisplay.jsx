import { CopyOutlined, ReloadOutlined } from "@ant-design/icons";

function PasswordDisplay({ senha, reloadPassword }) {

  function copyPassword() {
    navigator.clipboard.writeText(senha); //permite copiar
  }

  return (
    <div className="w-full p-4 bg-amber-700/30 rounded-sm mt-4 flex items-center">
      {/* Texto da senha totalmente visível */}
      <span className="flex-grow text-lg break-all text-white font-mono">
        {senha || "Clique em gerar senha"}
      </span>
      <button
        type="button"
        className="p-2 !bg-amber-700/30 rounded-sm hover:!bg-indigo-700 transition-colors me-1 "
        onClick={copyPassword}
      >
        <CopyOutlined />
      </button>
      <button
        type="button"
        className="p-2 !bg-amber-700/30 hover:!bg-indigo-700 rounded-sm transition-colors"
        onClick={reloadPassword} // ✅ Corrigido: onCLick para onClick
      >
        <ReloadOutlined />
      </button>
    </div>
  );
}

export default PasswordDisplay;