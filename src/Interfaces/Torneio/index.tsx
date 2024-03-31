import { Card, Table, Tag } from "antd";

export default function Torneio() {
  const cardData = [
    {
      title: "Equipe 1",
      jogador1: "LucasProO",
      jogador2: "Krustty",
      jogador3: "nothave",
      win: <Tag color="green">WIN:</Tag>,
      lose: <Tag color="red">LOSE:</Tag>,
      pts: <Tag>pts: 0</Tag>,
    },
    {
      title: "Equipe 2",
      jogador1: "Cesar_",
      jogador2: "HRei",
      jogador3: "KikkEr",
      win: <Tag color="green">WIN:</Tag>,
      lose: <Tag color="red">LOSE:</Tag>,
      pts: <Tag>pts: 0</Tag>,
    },
    {
      title: "Equipe 3",
      jogador1: "Person",
      jogador2: "Zarkthenberg",
      jogador3: "JuanSheik_",
      win: <Tag color="green">WIN:</Tag>,
      lose: <Tag color="red">LOSE:</Tag>,
      pts: <Tag>pts: 0</Tag>,
    },
    {
      title: "Equipe 4",
      jogador1: "???",
      jogador2: "???",
      jogador3: "Historic",
      win: <Tag color="green">WIN:</Tag>,
      lose: <Tag color="red">LOSE:</Tag>,
      pts: <Tag>pts: 0</Tag>,
    },
    {
      title: "Equipe 5",
      jogador1: "DODOSHOWZERO",
      jogador2: "f800cardoso",
      jogador3: "Sweatshit",
      win: <Tag color="green">WIN:</Tag>,
      lose: <Tag color="red">LOSE:</Tag>,
      pts: <Tag>pts: 0</Tag>,
    },
  ];

  const data = [
    { key: "1", equipe1: <span>Equipe 1</span>, equipe2: "Equipe 2" },
    { key: "2", equipe1: "Equipe 1", equipe2: "Equipe 3" },
    { key: "3", equipe1: "Equipe 1", equipe2: "Equipe 5" },
    { key: "4", equipe1: "Equipe 1", equipe2: "Equipe 4" },
    { key: "5", equipe1: "Equipe 2", equipe2: "Equipe 3" },
    { key: "6", equipe1: "Equipe 2", equipe2: "Equipe 5" },
    { key: "7", equipe1: "Equipe 2", equipe2: "Equipe 4" },
    { key: "8", equipe1: "Equipe 3", equipe2: "Equipe 5" },
    { key: "9", equipe1: "Equipe 3", equipe2: "Equipe 4" },
    { key: "10", equipe1: "Equipe 5", equipe2: "Equipe 4" },
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
            <li>
              Em caso de ter TK acidental, o mesmo que matou aplica /suicide. Na
              situação de TK proposital, o round atual será convertido para o
              adversário.
            </li>
            <li>Não será permitido o uso de f12, em caso de <i><b>teleporte ou travamento(proposital)</b></i>, terá remake do round.</li>
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
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>Confrontos</h3>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
