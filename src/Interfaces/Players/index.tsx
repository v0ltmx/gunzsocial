import { Avatar, Table, Tag } from "antd";

export default function Players() {
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
      foto: "eae"
    },
    {
      key: "2",
      name: "Person",
      clan: "Sensation",
      foto: "eae"
    },
    {
      key: "3",
      name: "Cesar_",
      clan: "Sensation",
      foto: "eae"
    },
    {
      key: "4",
      name: "DODOSHOWZERO",
      clan: "Excalibur",
      foto: "eae"
    },
    {
      key: "5",
      name: "cfmatheus",
      clan: "Excalibur",
      foto: "eae"
    },
    {
      key: "6",
      name: "Historic",
      clan: "Sensation",
      foto: "eae"
    },
    {
      key: "7",
      name: "HuuCk",
      clan: "Sensation",
      foto: "eae"
    },
    {
      key: "8",
      name: "HRei",
      clan: "Excalibur",
      foto: "eae"
    },
  ];

  const columns = [
    {
        title: "",
        dataIndex:"foto",
        key:"foto",
        render:()=>(<Avatar size="large" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d43790f4-aec9-449b-b2bc-363e3d5a40d4/d3attvl-38a12599-58b2-4596-9718-d32a640f233b.png" />)
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Clan",
      dataIndex: "clan",
      key: "clan",
      render: (text: any, record: any) => (
        <Tag color={mapKeyToColor(record.key)}>{text}</Tag>
      ),
    },
    
  ];
  return (
    <>
      <h2>Lista de jogadores</h2>
      <Table size="small" dataSource={dataSource} columns={columns} />
    </>
  );
}
