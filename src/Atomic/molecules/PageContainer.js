import AtomContainer from "../atoms/AtomContainer";

const PageContainer = (props) => {
  return <AtomContainer maxWidth="md">{props.children}</AtomContainer>;
};

export default PageContainer;
