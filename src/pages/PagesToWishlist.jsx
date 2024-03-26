import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getItem } from "../Utils/shared";

const PagesToWishlist = () => {
  const readedData = getItem("wishes");
  console.log(readedData);

  const chartData = readedData.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} 
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div>
      <h1>pages to Wishlist  </h1>
      <BarChart width={800} height={600} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#8B5CF6" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default PagesToWishlist;
