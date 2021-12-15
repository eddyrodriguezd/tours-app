import FooterComponent from "../components/public/Footer/FooterComponent";
export default function FooterPrimary(props) {
  return (
    <>
      {props.children}
      <FooterComponent />
    </>
  );
}
