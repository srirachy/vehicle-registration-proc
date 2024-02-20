const Parallax = ({ image, title, content }) => {
  return (
    <>
      <div className="parallax" style={{ backgroundImage: `url(${ image })` }}>
        <div className="container para-content d-flex justify-content-center align-items-center">
          <div className="container text-center para-transparent">
            <h1>{title}</h1>
            <h2>{content}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
