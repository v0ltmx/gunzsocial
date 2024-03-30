import { Button } from "antd";
import Image from "next/image";
import Excalibur from "../Excalibur";
import Sensation from "../Sensation";
import Barcelona from "../Barcelona";
import Torneio from "../Torneio";
import { useEffect, useState } from "react";

export default function Inicio() {

  const [showComponent, setShowComponent] = useState(null);
  const [welcomeTextVisible, setWelcomeTextVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuButtonClick = (component: any) => {
    setShowComponent(component);
    setWelcomeTextVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  

  return (
    <>
      {welcomeTextVisible && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px", 
          }}
        >
          <h2>Bem-vindos</h2>
          <Image src="/ss.png" alt="Imagem de Início" width={30} height={30} />
        </div>
      )}

      <div
        style={{
          display: isMobile? "grid" : "flex",
          flexDirection: isMobile ? "column" : "row", 
          gap: isMobile ? "15px" : "30px", 
          // alignItems: isMobile? "none" : "center",
          justifyContent: isMobile? "none" : "center",
        }}
      >
        <Button type="dashed" size={isMobile? "middle" : "large"} onClick={() => handleMenuButtonClick(<Excalibur />)}>Excalibur</Button>
        <Button type="dashed" size={isMobile? "middle" : "large"} onClick={() => handleMenuButtonClick(<Sensation />)}>Sensation</Button>
        <Button type="dashed" size={isMobile? "middle" : "large"} onClick={() => handleMenuButtonClick(<Barcelona />)}>Barcelona</Button>
        <Button type="dashed" size={isMobile? "middle" : "large"} onClick={() => handleMenuButtonClick(<Torneio />)}>Torneio de Flip</Button>
      </div>

      <div>
        {showComponent && (
          <div style={{ marginTop: '40px'}}>
            {showComponent}
          </div>
        )}
      </div>
    </>
  );
}
