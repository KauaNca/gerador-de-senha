import React from "react";
import { Checkbox, ConfigProvider } from "antd";
function CaixaDeSelecao({ onChange, texto, defaultChecked = true, name }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          Checkbox: {
            colorPrimary: "#ff7b00", // cor do check (laranja)
            colorBorder: "#ff7b00", // cor da borda (laranja)
            colorBgContainer: "#3b2a1e", // cor de fundo (marrom escuro)
            borderRadius: 8, // bordas arredondadas
            colorText: "#ffffff", // cor do texto (branco),
            borderRadiusSM: 8,
            colorPrimaryHover: "#ffa94d", // cor do check quando hover (laranja claro
          },
        },
      }}
    >
      <div className="bg-orange-900 text-white p-2 hover:bg-orange-800 rounded-lg flex">
        <Checkbox
          defaultChecked={defaultChecked}
          onChange={onChange}
          name={name}
        >
          {texto}
        </Checkbox>
      </div>
    </ConfigProvider>
  );
}
export default CaixaDeSelecao;
