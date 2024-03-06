import {
  FeatureCard,
  FeaturePara2,
  FeaturePara1,
  FeatureImage,
} from "../StyledComponents/Heading";
import "./MiniCard.css";
export default function MiniCard(props) {
  console.log(Object.keys(props));
  let cardLayout = null;

  if (Object.keys(props).length === 3) {
    cardLayout = (
      <FeatureCard>
        <FeaturePara1>{props.title}</FeaturePara1>
        <FeatureImage src={props.src} alt="card" />
        <FeaturePara2>{props.description}</FeaturePara2>
      </FeatureCard>
    );
  } else if (
    Object.keys(props).length === 2 &&
    Object.keys(props)[0] === "src"
  ) {
    cardLayout = (
      <FeatureCard>
        <img src={props.src} alt={props.alt} />
      </FeatureCard>
    );
  } else if (Object.keys(props).length === 2) {
    cardLayout = (
      <FeatureCard>
        <FeaturePara1>{props.percentage}</FeaturePara1>
        <FeaturePara1>{props.description}</FeaturePara1>
      </FeatureCard>
    );
  }

  return <div className="actual-card-container">{cardLayout}</div>;
}

// props will be a generalised object
// and we can get the length of props through Object.keys(props)

// based on the length of the object
// we can conditionally render different types of cards
