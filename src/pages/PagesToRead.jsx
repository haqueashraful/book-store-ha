import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getItem } from "../Utils/shared";

const PagesToRead = () => {
  const readedData = getItem("readed");
  console.log(readedData);

  const chartData = readedData.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));
  const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;
    const trianglePoints = `${x},${y} ${x + width},${y} ${x + width / 2},${y - 10}`;
  
    return (
      <g>
        <polygon points={trianglePoints} fill={fill} />
        <rect x={x} y={y} width={width} height={height} fill={fill} />
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {props.payload.totalPages}
        </text>
      </g>
    );
  };
  

  return (
    <div>
      <h1>pages to read </h1>

      <BarChart width={800} height={600} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#8B5CF6" shape={<CustomBarShape />}/>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
