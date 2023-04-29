import Carousel from "react-material-ui-carousel";
function Item({ item }: { item: { pictureUrl: string } }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img style={{ width: "100%", height: "100%" }} src={item.pictureUrl} />
    </div>
  );
}
export default function Slider() {
  const items = [
    {
      name: "Random Name #1",
      pictureUrl: "/img/Rectangle83(1).png",
    },
    {
      name: "Random Name #2",
      pictureUrl: "/img/Rectangle83(2).png",
    },
    {
      name: "Random Name #3",
      pictureUrl: "img/Rectangle83(3).png",
    },
    {
      name: "Random Name #4",
      pictureUrl: "/img/Rectangle83.png",
    },
  ];
  return (
    <div className="h-[400px] w-[85%] bg-blue-gray-200 rounded-[30px]">
      <Carousel
        navButtonsProps={{
          style: { backgroundColor: "transparent", color: "black" ,},
        }}
        interval={4000}
        stopAutoPlayOnHover
        swipe
        navButtonsAlwaysVisible
        indicatorIconButtonProps={{
          style: {
            transition: "0.5s",
            color: "#EDEDED",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            transition: "0.5s",
            color: "#D96B14",
            backgroundColor: "#D96B14",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
          
        ))}
      </Carousel>
    </div>
  );
}
