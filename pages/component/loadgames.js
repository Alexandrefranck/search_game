import Card from "react-animated-3d-card";


const MyComponent = (props) => {
    // Change t_thumb par t_720p dans l'URL
  const getGoodQualityImg = (url) => {
    const regex = /t_thumb/g;
    const replacedStr = url.replace(regex, "t_720p");
    return "https:" + replacedStr;
    
  };
 

  return (
    <>
        <Card
          style={{
            backgroundImage: `url(${getGoodQualityImg(props.url)})`,
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
