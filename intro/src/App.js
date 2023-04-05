import { Component } from "react";
import Stok from "./Stok";
import { Container, Row, Col } from "reactstrap";
import DagitilanGidaKolisi from "./DagitilanGidaKolisi";
import Navi from "./Navi";
import MevcutGidaKolisi from "./MevcutGidaKolisi";
import DagitilanHijyenKolisi from "./DagitilanHijyenKolisi";
import MevcutHijyenKolisi from "./MevcutHijyenKolisi";

export default class App extends Component {
  state = {
    veriler: [],
    search: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/hatayveriler")
      .then((response) => response.json())
      .then((data) => this.setState({ veriler: data }));
  }

  getSearch = (e) => {
    this.setState({
      search: this.state.veriler.filter((veri) =>
        veri.tarih.includes(e.target.value)
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Navi getSearch={this.getSearch} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Stok
                search={this.state.search.reverse()}
                veriler={this.state.veriler}
              />
              <DagitilanGidaKolisi veriler={this.state.veriler} />
              <MevcutGidaKolisi veriler={this.state.veriler} />
              <DagitilanHijyenKolisi veriler={this.state.veriler} />
              <MevcutHijyenKolisi veriler={this.state.veriler} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
