import { ImgFirst, ImgWrapper, Shadow, Title, Title2, WelcomeSection } from "./HomePage.styled";

import image1 from "../../assets/backgr-1.jpg";
import image2 from "../../assets/backgr-2.jpeg";
import image3 from "../../assets/backgr-3.png";
import image4 from "../../assets/backgr-4.png";
import image5 from "../../assets/backgr-5.png";
import image6 from "../../assets/backgr-6.jpg";

export default function HomePage() {
  return (
    <WelcomeSection>
      <Shadow>
        <Title>Welcome to EventSphere!</Title>
        <Title2>Your online events registration app</Title2>
        <ImgWrapper>
          <ImgFirst src={image1}></ImgFirst>
          <ImgFirst src={image2}></ImgFirst>
          <ImgFirst src={image3}></ImgFirst>
          <ImgFirst src={image4}></ImgFirst>
          <ImgFirst src={image5}></ImgFirst>
          <ImgFirst src={image6}></ImgFirst>
        </ImgWrapper>
      </Shadow>
    </WelcomeSection>
  );
}
