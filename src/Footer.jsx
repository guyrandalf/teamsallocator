const Footer = () => {
  let today = new Date();

  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>&copy;{today.getFullYear()} Team member allocation app by Guy Randalf</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
