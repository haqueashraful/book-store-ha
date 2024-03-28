import {
    Cell,
    Legend,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";
  import { getItem } from "../Utils/shared";
  
  const Ratings = () => {
    const colors = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "red", "pink"];
  
    const readedData = getItem("readed");
    const wishData = getItem("wishes");
  
    const combinedData = [...wishData, ...readedData];
    console.log(combinedData);
  
    const chartData = combinedData.map((book, index) => ({
      index: index,
      name: book.bookName,
      rating: book.rating,
      pages: book.totalPages,
      year: book.yearOfPublishing,
    }));
    const style = {
      top: "50%",
      right: 0,
      transform: "translate(0, -50%)",
      lineHeight: "24px",
    };
    return (
      <ResponsiveContainer width="100%" height={500}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={chartData}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="rating"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </RadialBar>
          <Tooltip/>
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  };
  
  export default Ratings;
  