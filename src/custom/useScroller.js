import { useDispatch, useSelector } from "react-redux";
import { cutawayActions } from "../store/cutaway/actionTypes";

export const useScroller = () => {
   const { menuActive } = useSelector(store => store.cutaway);
   const dispatch = useDispatch();

   const scrollToWork = async (work) => {
      menuActive && await dispatch(cutawayActions.closeMenu());
      window.location.href=`#${work}`
   }

   const scrollTop = () => {

      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      })
   }

   return {
      scrollToWork,
      scrollTop,
   }
}