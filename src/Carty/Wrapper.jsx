function Wrapper({ children }) {
  const style = {
    borderRadius: "0 0 40px 40px",
    margin: "0 auto",
    width: "95%",
  };
  return (
    <div style={style} className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
