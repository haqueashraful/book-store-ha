import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getItem } from "../Utils/shared";

const PagesToWishlist = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const readedData = getItem("wishes");
  console.log(readedData);

  const chartData = readedData.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));
  const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;
    const trianglePoints = `${x},${y} ${x + width},${y} ${x + width / 2},${
      y - 10
    }`;

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
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={150} height={60} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalPages"
            barSize={50}
            fill="#8B5CF6"
            shape={<CustomBarShape />}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToWishlist;
