import styled from "styled-components";
import IMG_ECLIPSE from "./icon-ellipsis.svg";

const Card = styled.div`
  color: var(--clr-white-100);
  background-color: var(--clr-primary-background-card);
  padding: var(--size-600);
  border-radius: 0.7rem;
  margin-inline: min(1rem, 5%);
  &:hover {
    cursor: pointer;
    background-color: #33387a;
  }

  @media screen and (min-width: 1000px){
    margin-inline: 0;
  }
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 0.7rem;

  h2 {
    font-size: var(--fs-400);
    font-weight: var(--fw-500);
  }

  img {
    width: 1rem;
  }

  @media screen and (min-width: 1000px){
    margin-block-end: var(--size-600)
  }
`;

const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1000px){
    flex-direction: column;
    align-items: start;
    gap: var(--size-500)
  }
`;

const CardStatsCurrent = styled.p`
  font-size: var(--fs-700);
  font-weight: var(--fw-300);

  @media screen and (min-width: 1000px){
    font-size: var(--fs-800);
  }
`;

const CardStatsPrevious = styled.p`
  font-size: var(--fs-300);
  font-weight: var(--fw-300);
  opacity: 90%;
  color: var(--clr-white-300);
`;

const CardBgImg = styled.div`
  margin-inline: min(1rem, 5%);
  height: 3.5rem;
  border-radius: 0.7rem 0.7rem 0 0;
  margin-block-end: calc(var(--size-600) * -1);
  
  @media screen and (min-width: 1000px){
    margin-inline: 0;
    margin-block-end: calc(var(--size-600) * -1 + 0.4rem);
  }
`;



export default function StatsCard({
  title,
  statCurrent,
  statPrevious,
  bgColor,
}) {
  const bgImgPath = title.split(" ")[0].toLowerCase();
  console.log(bgImgPath);
  return (
    <div>
      <CardBgImg
        style={{
          background: `no-repeat right 1rem center url(./icon-${bgImgPath}.svg) ${bgColor}`,
        }}></CardBgImg>
      <Card>
        <CardTitle>
          <h2>{title}</h2>
          <img src={IMG_ECLIPSE} alt=""></img>
        </CardTitle>
        <CardStats>
          <CardStatsCurrent>{statCurrent}hrs</CardStatsCurrent>
          <CardStatsPrevious>Last Week - {statPrevious}hrs</CardStatsPrevious>
        </CardStats>
      </Card>
    </div>
  );
}
