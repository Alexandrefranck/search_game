import Card from "react-animated-3d-card";

const MyComponent = (props) => {

  return (
    <>
      <Card
        style={{
          backgroundImage: `url(${props.url})`,
          borderRadius: "20px",
          width: "200px",
          height: "250px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </>
  );
};

export default MyComponent;
