import styled from "styled-components";
import { PROFILE_STATS } from "../../../data";
const MainStatsCardWrapper = styled.div`
margin-inline: min(1rem, 5%);

@media screen and (min-width: 1000px){
    grid-row: 1/3;
    height: 100%;
    margin-inline: 0;
    
}

`;

const ProfileInfo = styled.div`
  color: #ffff;
  font-weight: var(--fw-300);
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--size-500);
  background-color: var(--clr-primary-blue);
  padding: var(--size-600);
  border-radius: 0.7rem;
  position: relative;
  z-index: 999;
  
  img {
    max-height: 3rem;
    border: 2px solid var(--clr-white-100);
    border-radius: 50%;
  }

  h1 {
    font-size: var(--fs-700);
  }

  p {
    font-size: var(--fs-300);
    opacity: 70%;
    line-height: 1.5;
  }

  @media screen and (min-width: 1000px){
    flex-direction: column;
    align-items: start;
    gap: var(--size-600);
   padding-block-end: 3.5rem;
    img {
        max-height: 4rem;
    }

    h1 {
    font-size: var(--fs-800);
  }
  }
`;

const Menu = styled.div`
  font-weight: var(--fw-300);
  font-size: var(--fs-600);
  background-color: var(--clr-primary-background-card);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0 0 0.7rem 0.7rem;
  gap: min(var(--size-500), 5%);

  padding-block-end: var(--size-600);
  padding-block-start: calc(var(--size-600) + 0.6rem);
  margin-block-start: -0.6rem;

  label {
    opacity: 85%;
    color: var(--clr-white-300);
    cursor: pointer;
    &:hover {
        color: var(--clr-white-100);
    }
  }

  input {
    appearance: none;
    margin: 0;
  
   
    &:checked + label {
      color: var(--clr-white-100);
      opacity: 100% !important;
    }
  }

  @media screen and (min-width: 1000px){
    font-size: var(--fs-400);
    flex-direction: column;
    align-items: start;
    gap: var(--size-400);
    padding-inline-start: var(--size-600);
  }
`;
export default function MainStatsCard({ whatIsChecked, handleRadioChange }) {
  const DATA = PROFILE_STATS;
  return (
    <MainStatsCardWrapper>
      <ProfileInfo>
        <img
          src={DATA[0].profileImg}
          alt={`${DATA[0].profilePerson} profile image`}></img>
        <div>
          <p>Report for</p>
          <h1>{DATA[0].profilePerson}</h1>
        </div>
      </ProfileInfo>
      <Menu>
        <input
          onChange={() => handleRadioChange("daily")}
          id="daily"
          type="radio"
          name="nav"
          checked={whatIsChecked === "daily"}></input>
        <label htmlFor="daily">Daily</label>
        <input
          onChange={() => handleRadioChange("weekly")}
          id="weekly"
          type="radio"
          name="nav"
          checked={whatIsChecked === "weekly"}></input>
        <label htmlFor="weekly">Weekly</label>
        <input
          onChange={() => handleRadioChange("monthly")}
          id="monthly"
          type="radio"
          name="nav" 
          checked={whatIsChecked === "monthly"}
          ></input>
        <label htmlFor="monthly">Monthly</label>
      </Menu>
    </MainStatsCardWrapper>
  );
}
