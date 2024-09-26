import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";
export const GlobalStyle = createGlobalStyle`
:root {
    @media screen and (min-width: 1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    
}
   
//COLORS
background-color: var(--clr-primary-background);
font-size: 18px;
--red: red;
--clr-white-100: hsl(0, 0%, 100%);
--clr-white-200: hsl(0, 0%, 94%);
--clr-white-300: rgb(189, 193, 255);
--clr-white-400:  hsl(0, 1%, 44%);
--clr-primary-background: hsl(226, 43%, 10%);
--clr-primary-background-card: hsl(235, 46%, 20%);
--clr-primary-blue: rgb(88, 71, 235);

//

//SIZES
--size-400: 0.5rem;
--size-500: 1rem;
--size-600: 1.5rem;
--size-800: 3rem;
//
//FONTS
font-family: "Rubik", sans-serif;
--fs-300: 0.75rem;
--fs-400: 0.875rem;
--fs-500: 1rem;
--fs-600: 1.0625rem;
--fs-700: 1.5rem;
--fs-800: 2rem;
--fw-300: 300;
--fw-500: 500;
//

}  
${reset}
`;
