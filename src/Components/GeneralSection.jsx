import { Component } from "react";

class GeneralSection extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=deadea8b&s=" + this.props.search)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.Search });
      })
      .catch((er) => {
        alert("errore nella chiamata", er);
      });
  }

  render() {
    return (
      <>
        <div className="mx-3">
          <h4 className="text-white">{this.props.text}</h4>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 mb-4">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                    <img
                      style={{ height: "250px" }}
                      className="img-fluid"
                      src={movie.Poster}
                      alt="movie picture"
                    />
                  </div>
                );
              })}
              {/*<div className="col mb-2 text-center px-1">
                <img
                  className="img-fluid"
                  src="https://placecats.com/300/300"
                  alt="movie picture"
                />
              </div>*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GeneralSection;
