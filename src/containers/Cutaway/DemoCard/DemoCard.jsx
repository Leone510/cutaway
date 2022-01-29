import { CutawayBtn } from "../CutawayBtn/CutawayBtn";
import { StyledDemoBtnWrapper } from "./StyledDemoBtnWrapper";
import { StyledDemoCard } from "./StyledDemoCard";

export const DemoCard = ({img, href}) => {

   const goToWork = () => {
      window.location.href = href
   }

   return (
     <StyledDemoCard img={img}>

         <StyledDemoBtnWrapper>

            <CutawayBtn onClick={goToWork}>
               <p>Go to work...</p>
            </CutawayBtn>
            
         </StyledDemoBtnWrapper>

     </StyledDemoCard>
   )
}