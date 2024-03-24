import { Card, Modal, Table, Tag } from "antd";
import { useState } from "react";

export default function Excalibur() {

  const [visible, setVisible] = useState(false); 
  const [modalImage, setModalImage] = useState("");

  const { Meta } = Card;

  const mapKeyToColor = (key: any) => {
    switch (key) {
      case '1':
        return 'red';
      case '2':
        return 'pink';
      
      case '3':
        return 'green';
     
      default:
        return 'blue'; 
    }
  };

  const dataSource = [
    {
      key: '1',
      name: 'LucasProO',
      rank: 'Leader',
    },
    {
      key: '2',
      name: 'DODOSHOWZERO',
      rank: 'Co-leader',  
    },
    {
      key: '3',
      name: 'cfmatheus',
      rank: 'Admin',  
    },
    {
      key: '4',
      name: 'KikkEr',
      rank: 'Member',  
    },
    {
      key: '5',
      name: 'Tecnoviking',
      rank: 'Member',  
    },
    {
      key: '6',
      name: 'Jefersonbar',
      rank: 'Member',  
    },
    {
      key: '7',
      name: 'HRei',
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
      title: 'Excalibur x Sensation',
      description: '20 a 8',
      cover: 'https://r2.easyimg.io/1vukle9xe/whatsapp_image_2024-03-24_at_12.38.43.jpeg',
    },
    {
      title: 'Excalibur x Sensation',
      description: '20 a 12',
      cover: 'https://r2.easyimg.io/81au3ukig/whatsapp_image_2024-03-12_at_21.12.23.jpeg',
    },
    {
      title: 'Excalibur x Sensation',
      description: '20 a 16',
      cover: 'https://r2.easyimg.io/i1298bcqu/whatsapp_image_2024-03-14_at_18.39.31.jpeg',
    },
    {
      title: 'Excalibur x Sensation',
      description: '20 a 9',
      cover: 'https://r2.easyimg.io/c9yaip87u/whatsapp_image_2024-03-16_at_17.05.12.jpeg',
    },
   
  ];

  const handleCardClick = (cover: string) => {
    setModalImage(cover); 
    setVisible(true);
  };
  

  return <><h2>Excalibur</h2>
  
  <Table dataSource={dataSource} columns={columns} />

  <div>
      <h2>Histórico de vitórias</h2>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
  {cardsData.map((card, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 280, background:'#dedede', margin: '10px' }}
            cover={<img alt="example" src={card.cover} style={{ width: '100%', height: '280px', objectFit: 'cover' }} onClick={() => handleCardClick(card.cover)} />}
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
