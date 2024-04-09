import { EyeFilled, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Modal, Table, Tag, Tooltip } from "antd";
import { useState } from "react";

export default function Players() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    name: "",
    conquistas: [] as string[],
    foto: "",
    clan: "",
    since: "",
    titulos: [] as string[],
  });

  const handleShowDetail = (record: any) => {
    setSelectedItem(record);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const mapKeyToColor = (key: any) => {
    switch (key) {
      case "1":
        return "red";
      case "2":
        return "pink";
      case "3":
        return "green";
      case "4":
        return "green";

      default:
        return "blue";
    }
  };
  const dataSource = [
    {
      key: "1",
      name: "LucasProO",
      clan: "Excalibur",
      foto: "https://r2.easyimg.io/2n1w9loye/whatsapp_image_2024-04-05_at_00.09.40.jpeg",
      conquistas: [
        // "3x Flip Major MVP"
      ],
      since: "2004",
      titulos: [
        // "https://www.hltv.org/img/static/event/trophies/2635.png",
        // "https://www.hltv.org/img/static/event/trophies/3133.png",
        // "https://www.hltv.org/img/static/event/trophies/3133.png",
      ],
    },
    {
      key: "2",
      name: "Person",
      clan: "Sensation",
      foto: "eae",
      conquistas: [""],
      since: "2009",
      titulos: [
       
      ],
    },
    {
      key: "3",
      name: "Cesar_",
      clan: "Sensation",
      foto: "eae",
      conquistas: [""],
      since: "2009",
      titulos: [
       
      ],
    },
    {
      key: "4",
      name: "DODOSHOWZERO",
      clan: "Excalibur",
      foto: "eae",
      conquistas: [""],
      since: "2009",
      titulos: [
      ],
    },
    {
      key: "5",
      name: "cfmatheus",
      clan: "Excalibur",
      foto: "eae",
      conquistas: [""],
      since: "2012",
      titulos: [
        
      ],
    },
    {
      key: "6",
      name: "Historic",
      clan: "Sensation",
      foto: "eae",
      conquistas: [""],
      since: "2015",
      titulos: [
       
      ],
    },
    {
      key: "7",
      name: "HuuCk",
      clan: "Sensation",
      foto: "eae",
      conquistas: [],
      since: "2014",
      titulos: [
       
      ],
    },
    {
      key: "8",
      name: "HRei",
      clan: "Excalibur",
      foto: "eae",
      conquistas: [""],
      since: "2009",
      titulos: [
       
      ],
    },
    {
      key: "9",
      name: "Angyy",
      clan: "Sensation",
      foto: "https://r2.easyimg.io/qofpaoia4/whatsapp_image_2024-04-08_at_23.54.41.jpeg",
      conquistas: ["ESPADA QUEBRADA 2024.4"],
      since: "2006",
      titulos: [
       "https://r2.easyimg.io/b1oq8p8vi/kisspng-broken-sword-5-the-serpent-s-curse-drawing-clip-a-5ae4f2d7c2f209.0634773315249538157985-removebg-preview.png"
      ],
    },
    {
      key: "10",
      name: "Sweatshit",
      clan: "Excalibur",
      foto: "eae",
      conquistas: [""],
      since: "2016",
      titulos: [
       
      ],
    },
    {
      key: "11",
      name: "JuanSheik_",
      clan: "Barcelona",
      foto: "eae",
      conquistas: [""],
      since: "2013",
      titulos: [
       
      ],
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "foto",
      key: "foto",
      align:"center" as any,
      render: () => (
        <Avatar
          size="large"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d43790f4-aec9-449b-b2bc-363e3d5a40d4/d3attvl-38a12599-58b2-4596-9718-d32a640f233b.png"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align:"center" as any,
    },
    {
      title: "Clan",
      dataIndex: "clan",
      key: "clan",
      align:"center" as any,
      render: (text: any, record: any) => (
        <Tag color={mapKeyToColor(record.key)}>{text}</Tag>
      ),
    },
    {
      title: "Ação",
      dataIndex: "",
      key: "actions",
      align:"center" as any,
      render: (_: any, record: any) => (
        <Tooltip title="Ver detalhe">
          <Button type="dashed" onClick={() => handleShowDetail(record)}>
            <EyeFilled />
          </Button>
        </Tooltip>
      ),
    },
  ];
  return (
    <>
      <h2>Lista de jogadores</h2>
      <Table size="small" dataSource={dataSource} columns={columns} />
      <Modal visible={modalVisible} onCancel={handleModalClose} footer={null} width={530}>
  <div style={{ display: "flex", gap: "20px" }}>
    <Avatar size={130} src={selectedItem.foto} />
    <div>
      <div style={{ display: "flex", gap: "210px", alignItems: "center" }}>
        <h3>{selectedItem.name}</h3>
        <Avatar
          size={25}
          src="https://www.hltv.org/img/static/flags/30x20/BR.gif"
        />
      </div>
         

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Joga desde:</span> <span>{selectedItem.since}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Clã atual:</span> <span>{selectedItem.clan}</span>
      </div>
       
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Conquistas:</span>{" "}
        <span>
          {selectedItem.conquistas.map((conquista: string, index: number) => (
            <Tag key={index} color="red">
              {conquista}
            </Tag>
          ))}
        </span>
      </div>
      <Divider/>

      <div>
        <div style={{ display: "flex", gap: "5px" }}>
          {selectedItem.titulos.map((trofeu: string, index: number) => (
            <Avatar key={index} size={64} src={trofeu} />
          ))}
        </div>
      </div>
    </div>
  </div>
</Modal>
 
    </>
  );
}
