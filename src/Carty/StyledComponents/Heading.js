import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 3rem;
  font-family: var(--font-inter);
  line-height: 1;
`;

export const Super = styled.p`
  font-style: italic;
  font-family: var(--font-inter);
  color: var(--color-inactive-light);
`;

export const BodyText = styled.p`
  font-family: var(--font-poppins);
  color: var(--color-inactive-light);
  line-height: 1.8;
`;

export const BtnDark = styled.button`
  padding: 0.8rem 1.8rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: calc(var(--text-content-base-font-size) * 1.1);
  font-family: var(--font-poppins);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: var(--color-inactive);
  }
  @media (max-width: 575.98px) {
    padding: 0.8rem 1.7rem;
    font-size: calc(var(--text-content-base-font-size) * 0.9);
  }

  /*SMALL DEVICES ( PORTRAIT TABLETS )*/
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  /*MEDIUM DEVICES ( LANDSCAPE TABLETS )*/
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  /*LARGE DEVICES ( LAPTOPS )*/
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  /* EXTRA LARGE DEVICES (LARGE LAPTOPS AND DESKTOPS) */
  @media (min-width: 1200px) {
  }

  /* HIGH DEFINITION SCREENS AND LARGE DESKTOPS */
  @media (min-width: 1440px) {
  }
`;

export const BtnLight = styled.button`
  padding: 0.8rem 1.8rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 25px;
  font-size: calc(var(--text-content-base-font-size) * 1.1);
  font-family: var(--font-poppins);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
    background: #000;
  }
  @media (max-width: 575.98px) {
    padding: 0.8rem 1.7rem;
    font-size: calc(var(--text-content-base-font-size) * 0.9);
  }
`;

export const FeaturePara1 = styled.p`
  font-family: var(--font-poppins);
  font-size: calc(var(--text-content-base-font-size) * 0.7);
  transition: all 0.4s ease;
  color: var(--color-inactive);
`;

export const FeaturePara2 = styled.p`
  color: var(--color-inactive);
  font-size: calc(var(--text-content-base-font-size) * 0.7);
`;

export const FeatureImage = styled.img`
  height: 2rem;
  width: 2rem;
`;
export const FeatureCard = styled.div`
  height: 10rem;
  width: 10rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
  text-align: center;

  border-radius: 20px;
  background: var(--color-inactive-extra-light);
  transition: all 0.4s ease;
  filter: grayscale(100%);

  /*EXTRA SMALL DEVICES*/
  @media (max-width: 575.98px) {
    margin: 0;

    .card-container {
      width: 100%;
    }
  }
  /*SMALL DEVICES ( PORTRAIT TABLETS )*/
  @media (min-width: 576px) and (max-width: 900.98px) {
    height: 13rem;
    width: 13rem;

    ${FeaturePara1} {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
    }
    ${FeaturePara2} {
      font-size: calc(var(--text-content-base-font-size) * 0.9);
    }
    ${FeatureImage} {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  /*MEDIUM DEVICES ( LANDSCAPE TABLETS )*/
  @media (min-width: 901px) and (max-width: 991.98px) {
  }

  /*LARGE DEVICES ( LAPTOPS )*/
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  /* EXTRA LARGE DEVICES (LARGE LAPTOPS AND DESKTOPS) */
  @media (min-width: 1200px) {
  }

  /* HIGH DEFINITION SCREENS AND LARGE DESKTOPS */
  @media (min-width: 1440px) {
  }
  &:hover {
    background: #000;
    filter: grayscale(0%);
    cursor: pointer;
  }
  &:hover ${FeaturePara1} {
    color: #fff;
    cursor: pointer;
  }
`;

// .features-cards img {

// }

// .features-cards p {
//   font-family: var(--font-poppins);
//   font-size: calc(var(--text-content-base-font-size) * 0.7);
//   color: #fff;
// }

// .features-cards > p:last-of-type {
//   color: var(--color-inactive);
// }
