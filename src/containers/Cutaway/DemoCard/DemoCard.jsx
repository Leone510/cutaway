import { CutawayBtn } from "../CutawayBtn/CutawayBtn";
import { StyledDemoBtnWrapper } from "./StyledDemoBtnWrapper";
import { StyledDemoCard } from "./StyledDemoCard";

export const DemoCard = ({img, page}) => {

   return (
     <StyledDemoCard img={img}>

         <StyledDemoBtnWrapper>

            <CutawayBtn>
               <p>Go to work...</p>
            </CutawayBtn>
            
         </StyledDemoBtnWrapper>

     </StyledDemoCard>
   )
}