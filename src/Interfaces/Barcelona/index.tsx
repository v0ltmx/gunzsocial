import { Table, Tag } from "antd";

export default function Barcelona() {

  const mapKeyToColor = (key: any) => {
    switch (key) {
      case '1':
        return 'red';
      case '2':
        return 'pink';
      case '3':
        return 'green';
      case '4':
        return 'green';
     
      default:
        return 'blue'; 
    }
  };
  const dataSource = [
    {
      key: "1",
      name: "HuuCK",
      rank: "Leader",
    },
    {
      key: "2",
      name: "Maninha",
      rank: "Co-leader",
    },
    {
      key: "3",
      name: "Rhuan_PrO",
      rank: "Admin",
    },
    {
      key: "4",
      name: "Won",
      rank: "Admin",
    },
    {
      key: "5",
      name: "nothave",
      rank: "Member",
    },
    {
      key: "6",
      name: "RipTime",
      rank: "Member",
    },
    
  
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      align:"center" as any,
      render: (text: any, record: any) => (
        <Tag color={mapKeyToColor(record.key)}>{text}</Tag>
      ),
    },
  ];
  return (
    <>
    
        <h2>Barcelona</h2>
        <Table dataSource={dataSource} columns={columns} />
      
      
    </>
  );
}
