export default function Wrapper(props) {
  return (
    <>
      <section className="flex">{props.children}</section>
    </>
  );
}
