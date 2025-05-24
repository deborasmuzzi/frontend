import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto ifr;
    height: 100%;
    @media (max-width: 280px){

    }
`;

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`;

export const StyledCrsl = styled.div`
 width:20%;
border-radius: 50px;
margin: auto;
margin-top: 10px;

@media (max-width: 320px) {
  .carousel-wrapper {
    width: 95%;
  }

  .carousel .slide img {
    border-radius: 8px;
  }
}

@media (max-width: 280px) {
  .carousel-wrapper {
    width: 100%;
    padding: 0 5px;
  }
 .carousel .slide img {
    border-radius: 5px;
  }
}
  `
   