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
      lose: <Tag color="red">LOSE: 2</Tag>,
      pts: <Tag>pts: 6</Tag>,
    },
    {
      title: "Equipe 2",
      jogador1: "Cesar_",
      jogador2: "HRei",
      jogador3: "KikkEr",
      win: <Tag color="green">WIN: 3</Tag>,
      lose: <Tag color="red">LOSE: 1</Tag>,
      pts: <Tag>pts: 9</Tag>,
    },
    {
      title: "Equipe 3",
      jogador1: "Person",
      jogador2: "Zarkthenberg",
      jogador3: "JuanSheik_",
      win: <Tag color="green">WIN: 3</Tag>,
      lose: <Tag color="red">LOSE: 1</Tag>,
      pts: <Tag>pts: 9</Tag>,
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
      lose: <Tag color="red">LOSE: 3</Tag>,
      pts: <Tag>pts: 3</Tag>,
    },
  ];

  const data = [
    {
      key: "1",
      equipe1: (
        <div style={{ background: "red", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 1
        </div>
      ),
      equipe2: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 2
        </div>
      ),
    },
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
    {
      key: "8",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          W <CheckCircleFilled style={{ color: "white" }} /> Equipe 3
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          <CloseOutlined style={{ color: "white" }} /> Equipe 5
        </div>
      ),
    },
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

  const dataPlayoffs = [
    {
      key: "1",
      equipe1: (
        <div style={{ background: "red", color: "white" }}>
          0x2 <CloseOutlined style={{ color: "white" }} /> Time Person
        </div>
      ),
      equipe2: (
        <div style={{ background: "green", color: "white" }}>
        2x0 <CheckCircleFilled style={{ color: "white" }} /> Time DODO
      </div>
      ),
    },
    {
      key: "2",
      equipe1: (
        <div style={{ background: "red", color: "white" }}>
          0x2 <CloseOutlined style={{ color: "white" }} /> Time Cesar
        </div>
        
      ),
      equipe2: (
        <div style={{ background: "green", color: "white" }}>
          2x0 <CheckCircleFilled style={{ color: "white" }} /> Time Lucão
        </div>
       
      ),
    },   
  ];

  const dataFinal = [
    {
      key: "1",
      equipe1: (
        <div style={{ background: "green", color: "white" }}>
          2x0 <CheckCircleFilled style={{ color: "white" }} /> Time Lucão
        </div>
      ),
      equipe2: (
        <div style={{ background: "red", color: "white" }}>
          0x2 <CloseOutlined style={{ color: "white" }} /> Time DODO
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

  const columnsPlayoffs = [
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
    {
      title: "Time Dok x Time Lucão",
      description: "20 a 17",
      cover:
        "https://r2.easyimg.io/f5mdftu9z/whatsapp_image_2024-04-04_at_22.40.42.jpeg",
    },
    {
      title: "Time Cesar x Time Dok",
      description: "20 a 17",
      cover:
        "https://r2.easyimg.io/d53gjzgge/whatsapp_image_2024-04-04_at_22.38.25.jpeg",
    },
    {
      title: "Time Person x Time Cesar",
      description: "20 a 17",
      cover:
        "https://r2.easyimg.io/kdndqhh7i/whatsapp_image_2024-04-04_at_22.38.26.jpeg",
    },
    {
      title: "Time Cesar x Time Lucão",
      description: "20 a 15",
      cover:
        "https://r2.easyimg.io/z1mkta7o1/captura_de_tela_2024-04-08_às_22.29.04.png",
    },
    {
      title: "Time Person x Time DODO",
      description: "20 a 16",
      cover:
        "https://r2.easyimg.io/s0djsfwje/captura_de_tela_2024-04-08_às_22.30.07.png",
    },
    {
      title: "SEMI FINAL - Time Lucão x Time Cesar",
      description: "15 a 10",
      cover:
        "https://r2.easyimg.io/fn1iwvc92/whatsapp_image_2024-04-10_at_21.37.12.jpeg",
    },
    {
      title: "SEMI FINAL - Time Lucão x Time Cesar",
      description: "15 a 9",
      cover:
        "https://r2.easyimg.io/sroij984k/whatsapp_image_2024-04-10_at_21.37.12_(1).jpeg",
    },
  ];

  const handleCardClick = (cover: string) => {
    setModalImage(cover);
    setVisible(true);
  };

  const dataScoreboard = [
    { name: "LucasProO", KDP: "114/78/4" },
    { name: "Krustty", KDP: "81/-100(RELOGOU)/4" },
    { name: "nothave", KDP: "55/88/4" },
    { name: "Cesar_", KDP: "107/88/4" },
    { name: "HRei", KDP: "78/-100(RELOGOU)/4" },
    { name: "KikkEr", KDP: "77/92/4" },
    { name: "DODOSHOWZERO", KDP: "109/85/4" },
    { name: "f800cardoso", KDP: "60/90/4" },
    { name: "Sweatshit", KDP: "43/-100(RELOGOU)/4" },
    { name: "Person", KDP: "103/90/4" },
    { name: "Zarkthenberg", KDP: "73/-100(RELOGOU)" },
    { name: "JuanSheik_", KDP: "68/-100(RELOGOU)" },
    { name: "HuuCk", KDP: "91/90/4" },
    { name: "Historic", KDP: "105/88/4" },
    { name: "Angyy", KDP: "79/106/4" },
  ];

  const colunasScoreboard = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center" as any,
    },
    {
      title: "Kill/Death/Partidas",
      dataIndex: "KDP",
      key: "KDP",
      align: "center" as any,
    },
  ];

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Major Flip 2024.04</h2>

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

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h3>Scoreboard</h3>
      </div>

      <Table
        dataSource={dataScoreboard}
        columns={colunasScoreboard}
        // scroll={{ y: 440 }}
      />

      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h3>Semifinais</h3>
      </div>

      <Table columns={columnsPlayoffs} dataSource={dataPlayoffs} />

      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h3>Final</h3>
      </div>

      <Table columns={columnsPlayoffs} dataSource={dataFinal} />

    
    </>
  );
}
