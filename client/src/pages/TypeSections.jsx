import PrincipalSection from "./PrincipalSection";
import SecondSection from "./SecondSection";

export const PricipalSection = (props) => {
  // console.log(props.publi);

  return (
    <>
      <PrincipalSection publi={props.publi} />
      <SecondSection publi={props.publi} />
    </>
  );
};
export default PricipalSection;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
