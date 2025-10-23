import React from "react";
import { Slider, ConfigProvider } from "antd";
import "antd/dist/reset.css";

function Barra({defaultValue, max, min,step, onChange}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            trackBg: "#ff7b00",        // cor da faixa percorrida (laranja)
            railBg: "#3b2a1e",         // cor da faixa de fundo (marrom escuro)
            handleColor: "#ff7b00",    // cor da bolinha (laranja)
            handleActiveColor: "#ffa94d", // bolinha quando ativa
            handleSize: 16,            // tamanho do handle
            railSize: 6,               // espessura da barra
          },
        },
      }}
    >
        <Slider defaultValue={defaultValue} max={max} min={min} step={step} onChange={onChange} />
    </ConfigProvider>
  );
}

export default Barra;
