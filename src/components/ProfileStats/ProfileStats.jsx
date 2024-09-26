import styled from "styled-components";
import { PROFILE_STATS } from "../../../data";
import MainStatsCard from "../MainStatsCard/MainStatsCard";
import { useState } from "react";
import StatsCard from "../StatsCard/StatsCard";

const ProfileStatsWrapper = styled.section`
  display: grid;
  gap: var(--size-500);
  margin-block-start: var(--size-800);

  
  @media screen and (min-width: 1000px) {
    margin-block-start: 0;
    gap: var(--size-600);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1000px;
  }
`;

export default function ProfileStats() {
  const [name, setName] = useState("weekly");

  function handleRadioChangeFunc(nameFunc) {
    setName(nameFunc);
  }
  const DATA = PROFILE_STATS;

  return (
    <ProfileStatsWrapper>
      <MainStatsCard
        whatIsChecked={name}
        handleRadioChange={handleRadioChangeFunc}
      />
      {DATA.map((item) => {
        return (
          <StatsCard
            key={item.title}
            title={item.title}
            statCurrent={item.timeframes[name].current}
            statPrevious={item.timeframes[name].previous}
            bgColor={item.bgcolor}
          />
        );
      })}
    </ProfileStatsWrapper>
  );
}
