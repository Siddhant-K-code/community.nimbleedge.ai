import styled from "styled-components";
import HeaderImage from "./headerimage";
import HeaderText from "./headertext";
import LINKEDIN from "../../../assets/images/linkedin.svg";
import TWITTER from "../../../assets/images/twitter.svg";

const Container = styled.div`
  background-color: red;
  position: relative;
  height: 100%;
  width: 100vw;
  background-color: #fafafa;
  z-index: -1;

  .headers-navbar {
    height: 8vh;
    width: 100%;
    background-color: #fff;
  }

  .headers-main-contents {
    width: 100%;
    height: 92%;
    padding: 2% 10%;
  }

  .header-icon-wrapper {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    z-index: 10;
    cursor: pointer;

    div:nth-child(1) {
      margin-bottom: 1rem;
    }

    img {
      width: 2.5rem;
    }
  }
`;

export default function Header(props) {
  return (
    <Container>
      <div className="headers-navbar"></div>
      <div className="flex-row headers-main-contents">
        <HeaderText />
        <HeaderImage />
      </div>
      <div className="flex-column header-icon-wrapper">
        <div>
          <img src={TWITTER} alt="twitter-icon" />
        </div>
        <div>
          <img src={LINKEDIN} alt="likedin icon" />
        </div>
      </div>
    </Container>
  );
}