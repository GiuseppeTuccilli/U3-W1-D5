const Top = function () {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex ms-3">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: " #221f1f" }}
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thriller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ marginRight: "2em" }}>
        <i className="bi bi-grid icons"></i>
        <i className="bi bi-grid-3x3 icons"></i>
      </div>
    </div>
  );
};

export default Top;
