import { Table, Tag } from "antd";

export default function Sensation() {
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
    return <>
      <h2>Sensation</h2>
      <Table dataSource={dataSource} columns={columns} />;
    </>;
  }
  