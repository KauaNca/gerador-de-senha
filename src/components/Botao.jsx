import React from "react";
import { Button, ConfigProvider } from "antd";
import "./Botao.css"

const Botao = () => (
 <ConfigProvider
  theme={{
    token: {
      colorPrimary: "#ff7b00", // Cor principal
      colorBgContainer: "#ff7b00", // Cor de fundo
      colorText: "#ffffff" // Cor do texto
    },
  }}
>
    <Button type="primary" size="large" className="botao-gradient" block>
      Gerar nova senha
    </Button>
  </ConfigProvider>
);

export default Botao;