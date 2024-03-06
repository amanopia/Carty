import styled from "styled-components";
import leavesImage from "../assets/leave1.png";
import dataArray from "./imageDataArray";

const ParentDiv = styled.div`
  height: fit-content;
  margin-top: 2rem;
  color: #fff;
  .logged-in {
    color: var(--btn-color-primary);
  }
  .midSectionLeft p {
    color: var(--color-inactive);
    font-style: italic;
  }
  .midSectionLeft p span {
    font-weight: bold;
  }
  & .images {
    position: relative;
    height: 4rem;
    width: 4rem;
    border: 1px solid red;
    margin-top: 2rem;
  }

  & .shield {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .leaves {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
  }

  .midSectionRight img {
    height: 3rem;
    width: 3rem;
    margin-left: 0.5rem;
    object-fit: cover;
    border-radius: 50%;
    margin-left: -10px;
    border: 2px solid black;
  }
  .midSectionRight img:nth-child(1) {
    margin-left: 0;
  }
  .people-image-container {
    display: flex;
    align-items: center;
  }
  & .midSectionRight .desc p {
    color: var(--color-inactive);
  }
  /*EXTRA SMALL DEVICES*/
  @media (max-width: 575.98px) {
    .midSectionLeft {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 1rem;
    }
    .midSectionLeft p {
      width: 70%;
      text-align: center;
    }
    .midSectionRight {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 4rem;
      gap: 1.5rem;
    }

    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  /*SMALL DEVICES ( PORTRAIT TABLETS )*/
  @media (min-width: 576px) {
    & .shield {
      height: 2rem;
    }
    ${
      "" /* & .leaves {
      height: 4.5rem;
      width: 4.5rem;
    } */
    }
    .midSectionLeft {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 1rem;
    }
    .midSectionLeft p {
      width: 40%;
      text-align: center;
      font-size: calc(var(--text-content-base-font-size) * 1.2);
    }
    .midSectionRight {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 4rem;
      gap: 1rem;
    }
    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  /*MEDIUM DEVICES ( LANDSCAPE TABLETS )*/
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    & .images {
      height: 3rem;
      width: 3rem;
    }
    & .shield {
      height: 2rem;
    }
    & .leaves {
      height: 5rem;
      width: 5rem;
    }
    .midSectionLeft {
      width: 50%;
      gap: 3rem;
    }
    .midSectionLeft p {
      width: 100%;
      text-align: center;
      ${"" /* font-size: calc(var(--text-content-base-font-size) * 1.5); */}
    }
    & .midSectionRight {
      margin-top: 0;
      height: 100%;
      justify-content: space-between;
    }

    ${
      "" /* .midSectionRight img {
      height: 3rem;
      width: 3rem;
    } */
    }
  }

  /*LARGE DEVICES ( LAPTOPS )*/
  @media (min-width: 992px) {
    & .images {
      disply: none;
      margin-top: 0;
    }
    & .shield {
      height: 1rem;
    }
    & .leaves {
      height: 3rem;
      width: 3rem;
    }
    .midSectionLeft {
      width: 30%;
      flex-direction: row;
      gap: 1rem;
    }
    .midSectionLeft p {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
      width: 50%;
      text-align: start;
    }
    & .midSectionRight {
      flex-direction: row;
    }

    & .midSectionRight .desc {
      align-items: start;
    }
    & .midSectionRight .desc p {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
    }
  }

  /* EXTRA LARGE DEVICES (LARGE LAPTOPS AND DESKTOPS) */
  @media (min-width: 1200px) {
    margin-top: 8rem;
    & .images {
      disply: none;
      margin-top: 0;
    }
    & .shield {
      height: 1rem;
    }
    & .leaves {
      height: 3rem;
      width: 3rem;
    }
    .midSectionLeft {
      width: 30%;

      gap: 1rem;
    }
    .midSectionLeft p {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
      width: 50%;
      text-align: start;
    }

    & .midSectionRight .desc {
      align-items: start;
    }
    & .midSectionRight .desc p {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
    }
  }

  /* HIGH DEFINITION SCREENS AND LARGE DESKTOPS */
  @media (min-width: 1440px) {
  }
`;
export default function MidSection() {
  return (
    <ParentDiv>
      <div className="midSectionLeft">
        <div className="images">
          {/* images will come here */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2VPU4DMRCFF5EWEBdAFEDEPhsKDpBTRIhTUAIFiJKeKgdIEVoqhCAFSFkPewA6ukhQUKRCItFDNmmWsH+xCwosPWkbf5/HM9ZG0V9Y7LcaNLpNUdcu9rvfaviDH5tLFBxS8EJRzMSoIQ3O+aBX64MHu+sUXFDwPgOezYgGHZqdrXJwGq9R0KNgXAHMbOwe9CwjXyB4qg9WP69O8gVGTQIIJgUVeMLlO/8C+lzRKECTPwqmCM8BBMOiCu4CTNF9keDEvwJ9lC8YbG/6V6CbuYJpH249BDeFcCdI4piCz/pwjJlqXSqY9uJsjuk5rQR3AkYLFHRrnL5r91QWOMlVe5EGl+UnR8fr98kkPqDB2y+nfqVgf25wRpLurbg3Yl+6izpmsrEcBO67vgBhX7bvdvz17gAAAABJRU5ErkJggg=="
            alt="some-icon"
            className="shield"
          />
          <img src={leavesImage} alt="leaves" className="leaves" />
        </div>
        {/* Text will come here */}
        <p>
          <span>2022</span> The world's biggest digital bank
        </p>
      </div>
      <div className="midSectionRight">
        <div className="people-image-container">
          {dataArray.map((element, index) => (
            <img key={index} src={element.image} alt={element.alt} />
          ))}
        </div>
        <div className="desc">
          <h1>12 M</h1>
          <p>
            <span className="logged-in">● &nbsp;</span>World active users
          </p>
        </div>
      </div>
    </ParentDiv>
  );
}
