import { Component } from "react";
import Stok from "./Stok";
import { Container, Row, Col } from "reactstrap";
import DagitilanGidaKolisi from "./DagitilanGidaKolisi";
import Navi from "./Navi";
import MevcutGidaKolisi from "./MevcutGidaKolisi";
import DagitilanHijyenKolisi from "./DagitilanHijyenKolisi";
import MevcutHijyenKolisi from "./MevcutHijyenKolisi";
import GelenTir from "./GelenTir";
import ToplamPersonel from "./ToplamPersonel";
import ToplamArac from "./ToplamArac";

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
                veriler={this.state.veriler.reverse()}
                search={this.state.search.reverse()}
              />
              <GelenTir veriler={this.state.veriler}/>
              <DagitilanGidaKolisi veriler={this.state.veriler.reverse()} />
              <MevcutGidaKolisi veriler={this.state.veriler.reverse()} />
              <DagitilanHijyenKolisi veriler={this.state.veriler.reverse()} />
              <MevcutHijyenKolisi veriler={this.state.veriler.reverse()} />
              <ToplamPersonel veriler={this.state.veriler.reverse()}/>
              <ToplamArac veriler={this.state.veriler.reverse()}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
