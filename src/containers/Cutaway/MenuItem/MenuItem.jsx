import { StyledMenuItem } from './StiledMenuItem';

export const MenuItem = ({children, ...props}) => {

   return (
      <StyledMenuItem {...props}>
         <h4>{children}</h4>
      </StyledMenuItem>
   )
}
