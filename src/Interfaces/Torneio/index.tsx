import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons";
import { Card, Modal, Table, Tag } from "antd";
import { useState } from "react";

export default function Torneio() {
  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [visibleCarousel, setVisibleCarousel] = useState(false);

  const { Meta } = Card;
  const cardData = [
    {
      title: "Equipe 1",
      jogador1: "LucasProO",
      jogador2: "Krustty",
      jogador3: "nothave",
      win: <Tag color="green">WIN: 2</Tag>,
      lose: <Tag color="red">LOSE: 1</Tag>,
      pts: <Tag>pts: 6</Tag>,
    },
    {
      title: "Equipe 2",
      jogador1: "Cesar_",
      jogador2: "HRei",
      jogador3: "KikkEr",
      win: <Tag color="green">WIN: 2</Tag>,
      lose: <Tag color="red">LOSE: 1</Tag>,
      pts: <Tag>pts: 6</Tag>,
    },
    {
      title: "Equipe 3",
      jogador1: "Person",
      jogador2: "Zarkthenberg",
      jogador3: "JuanSheik_",
      win: <Tag color="green">WIN: 2</Tag>,
      lose: <Tag color="red">LOSE: 1</Tag>,
      pts: <Tag>pts: 6</Tag>,
    },
    {
      title: "Equipe 4",
      jogador1: "HuuCk",
      jogador2: "Angyy",
      jogador3: "Historic",
      win: <Tag color="green">WIN: 1</Tag>,
      lose: <Tag color="red">LOSE: 3</Tag>,
      pts: <Tag>pts: 3</Tag>,
    },
    {
      title: "Equipe 5",
      jogador1: "DODOSHOWZERO",
      jogador2: "f800cardoso",
      jogador3: "Sweatshit",
      win: <Tag color="green">WIN: 1</Tag>,
      lose: <Tag color="red">LOSE: 2</Tag>,
      pts: <Tag>pts: 3</Tag>,
    },
  ];

  const data = [
    { key: "1", equipe1: <span>Equipe 1</span>, equipe2: "Equipe 2" },
    {
      key: "2",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 1
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 3
        </div>
      ),
    },
    {
      key: "3",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 1
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 5
        </div>
      ),
    },
    {
      key: "4",
      equipe1: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 1
        </div>
      ),
      equipe2: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 4
        </div>
      ),
    },
    {
      key: "5",
      equipe1: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 2
        </div>
      ),
      equipe2: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 3
        </div>
      ),
    },
    {
      key: "6",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 2
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 5
        </div>
      ),
    },
    {
      key: "7",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 2
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 4
        </div>
      ),
    },
    { key: "8", equipe1: "Equipe 3", equipe2: "Equipe 5" },
    {
      key: "9",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 3
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 4
        </div>
      ),
    },
    {
      key: "10",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 5
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 4
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Clan",
      dataIndex: "equipe1",
      key: "equipe1",
      align: "center" as const,
    },
    {
      title: "vs.",
      dataIndex: "",
      key: "versus",
      align: "center" as const,
      render: () => "vs.",
    },
    {
      title: "Clan",
      dataIndex: "equipe2",
      key: "equipe2",
      align: "center" as const,
    },
  ];

  const cardsData = [
    {
      title: "Time Lucão x Time DODO",
      description: "20 a 12",
      cover:
        "https://r2.easyimg.io/d7flrkrvu/captura_de_tela_2024-04-02_às_23.33.41.png",
    },
    {
      title: "Time César x Time DODO",
      description: "20 a 19",
      cover:
        "https://r2.easyimg.io/4x0w5yi21/whatsapp_image_2024-04-02_at_22.46.10.jpeg",
    },
    {
      title: "Time Lucão x Time Person",
      description: "20 a 16",
      cover:
        "https://r2.easyimg.io/uuwngvybr/captura_de_tela_2024-04-02_às_23.40.40.png",
    },
    {
      title: "Time DODO x Time Dok",
      description: "20 a 19",
      cover:
        "https://r2.easyimg.io/jgydhkj9t/captura_de_tela_2024-04-02_às_23.42.45.png",
    },
    {
      title: "Time Person x Time Dok",
      description: "20 a 17",
      cover:
        "https://r2.easyimg.io/56slqa4j9/whatsapp_image_2024-04-02_at_23.30.45.jpeg",
    },
  ];

  const handleCardClick = (cover: string) => {
    setModalImage(cover);
    setVisible(true);
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Torneio 2024.04</h2>

        <div style={{ marginBottom: "40px" }}>
          <h4>Regras</h4>
          <ul>
            <li>As partidas seguem o padrão de estilo de CW.</li>
            <li>Não será permitido o uso de itens donate.</li>
            <li>
              Fairplay obrigatório de até 10 minutos em caso de
              Disconnect/problemas técnicos.
            </li>
            <li>
              O horário dos confrontos serão combinados entre o juiz e
              adversários, caso não houver acordo a partida tomará W.O.
            </li>
            <li>Não será permitido relogar da sala para (Resetar o Frag).</li>
            <li>
              Em caso de ter TK acidental, o mesmo que matou aplica /suicide. Na
              situação de TK proposital, o round atual será convertido para o
              adversário.
            </li>
            <li>
              Não será permitido o uso de f12, em caso de{" "}
              <i>
                <b>teleporte ou travamento(proposital)</b>
              </i>
              , terá remake do round.
            </li>
            <li>
              Os jogos serão no servidor{" "}
              <i>
                <b>Universe Gamers Gunz</b>
              </i>
              .
            </li>
            <li>
              Premiação para equipe vencedora:{" "}
              <i>
                <b>R$300,00.</b>
              </i>
            </li>
          </ul>
          <span style={{ fontWeight: "700" }}>
            As partidas serão transmitidas AO VIVO na <i>twitch.tv/v0ltmx</i> e
            gravadas/disponibilizadas no Youtube.
          </span>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {cardData.map((card, index) => (
          <Card
            title={
              <span style={{ display: "flex", justifyContent: "space-around" }}>
                {card.title} {card.pts}
              </span>
            }
            style={{ width: 200, margin: "10px" }}
            key={index}
          >
            {card.win}
            {card.lose}
            <p>{card.jogador1}</p>
            <p>{card.jogador2}</p>
            <p>{card.jogador3}</p>
          </Card>
        ))}
      </div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>
          Confrontos da fase de pontos
        </h3>
      </div>
      <Table columns={columns} dataSource={data} />

      <div style={{ textAlign: "center" }}>
        <h3>Resultados das partidas</h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "10px",
        }}
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 280, background: "#dedede", margin: "10px" }}
            cover={
              <img
                alt="imagemcw"
                src={card.cover}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                onClick={() => handleCardClick(card.cover)}
              />
            }
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>

      <Modal
        title="Imagem da CW"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={1200}
      >
        <img
          src={modalImage}
          alt="Imagem"
          style={{ maxWidth: "1024px", display: "block", margin: "0 auto" }}
        />
      </Modal>

      {/* <div>
        <h3 style={{ textAlign: "center" }}>
          Clipes e melhores momentos da transmissão
        </h3>
      </div>

      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://player.twitch.tv/?video=2109052848&parent=https://flipbrasil.vercel.app/"
          allowFullScreen={true}
          height="378"
          width="620"
        ></iframe>
      </div> */}
    </>
  );
}
