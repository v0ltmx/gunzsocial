import { Card, Modal, Table, Tag } from "antd";
import { useState } from "react";

export default function Sensation() {

  const [visible, setVisible] = useState(false); 
  const [modalImage, setModalImage] = useState("");

  const { Meta } = Card;

  const mapKeyToColor = (key: any) => {
    switch (key) {
      case '1':
        return 'red';
      case '2':
        return 'pink';
  
     
      default:
        return 'blue'; 
    }
  };

  const dataSource = [
    {
      key: '1',
      name: 'Person',
      rank: 'Leader',
    },
    {
      key: '2',
      name: 'Cesar_',
      rank: 'Co-leader',  
    },
    {
      key: '3',
      name: 'f800cardoso',
      rank: 'Member',  
    },
    {
      key: '4',
      name: 'Rodz',
      rank: 'Member',  
    },
    {
      key: '5',
      name: 'Angyy',
      rank: 'Member',  
    },
    {
      key: '6',
      name: 'Zarkthenberg',
      rank: 'Member',  
    },
    {
      key: '7',
      name: 'Historic',
      rank: 'Member',  
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (text: any, record: any) => (
        <Tag color={mapKeyToColor(record.key)}>{text}</Tag>
      ),
    },
   
  ];

  const cardsData = [
    {
      title: 'Sensation x Excalibur',
      description: '20 a 18',
      cover: 'https://r2.easyimg.io/2tnzihlxt/whatsapp_image_2024-03-28_at_20.40.28.jpeg',
    },
    {
      title: 'Sensation x Excalibur',
      description: '20 a 7',
      cover: 'https://r2.easyimg.io/psi2392i8/whatsapp_image_2024-03-24_at_21.35.51.jpeg',
    },
    {
      title: 'Sensation x Excalibur',
      description: '20 a 19',
      cover: 'https://r2.easyimg.io/z6z9s6lmv/whatsapp_image_2024-03-28_at_13.26.23.jpeg',
    },
    {
      title: 'Sensation x Excalibur',
      description: '20 a 14',
      cover: 'https://r2.easyimg.io/9jvs9fpnd/whatsapp_image_2024-03-28_at_13.31.11.jpeg',
    },
    {
      title: 'Sensation x Excalibur',
      description: '20 a 10',
      cover: 'https://r2.easyimg.io/pi318u3uc/whatsapp_image_2024-03-26_at_20.45.20.jpeg',
    },
    {
      title: 'Sensation x Excalibur',
      description: '20 a 19',
      cover: 'https://r2.easyimg.io/apw67q0qz/whatsapp_image_2024-03-27_at_20.21.34.jpeg',
    },
   
  ];

  const handleCardClick = (cover: string) => {
    setModalImage(cover); 
    setVisible(true);
  };
    return <>
      <h2>Sensation</h2>
      <Table dataSource={dataSource} columns={columns} />;

      <div>
      <h2>Histórico de vitórias</h2>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '10px' }}>
  {cardsData.map((card, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 280, background:'#dedede', margin: '10px' }}
            cover={<img alt="example" src={card.cover} style={{ width: '100%', height: '200px', objectFit: 'cover' }} onClick={() => handleCardClick(card.cover)} />}
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
        <img src={modalImage} alt="Imagem em tamanho maior" style={{ maxWidth: '1024px', display: 'block', margin: '0 auto' }} />
      </Modal>
    </>;
  }
  