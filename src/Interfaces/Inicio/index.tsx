import { Button } from "antd";
import Image from "next/image";
import Excalibur from "../Excalibur";
import Sensation from "../Sensation";
import Barcelona from "../Barcelona";
import Torneio from "../Torneio";
import { useState } from "react";

export default function Inicio() {

  const [showComponent, setShowComponent] = useState(null);

  const handleButtonClick = (component: any) => {
    setShowComponent(component);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   height: "100vh",
        }}
      >
        <h2>Bem-vindos</h2>
        <Image src="/ss.png" alt="Imagem de Início" width={30} height={30} />
      </div>

      {/* <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
         <Button size="large" onClick={() => handleButtonClick(<Excalibur />)}>Excalibur</Button>
        <Button size="large" onClick={() => handleButtonClick(<Sensation />)}>Sensation</Button>
        <Button size="large" onClick={() => handleButtonClick(<Barcelona />)}>Barcelona</Button>
        <Button size="large" onClick={() => handleButtonClick(<Torneio />)}>Torneio de Flip</Button>
      </div> */}

      <div>
        {showComponent && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {showComponent}
          </div>
        )}
      </div>
    </>
  );
}
