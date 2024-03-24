import Image from "next/image";

export default function Inicio() {
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
        <Image
          src="/ss.png"
          alt="Imagem de Início"
          width={100}
          height={100}
        />

        <h2>Bem-vindos à comunidade Flip BR</h2>
      </div>
    </>
  );
}
