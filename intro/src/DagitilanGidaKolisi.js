import { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
export default class DagitilanGidaKolisi extends Component {
  state = {
    labels: [],
    datasets: [
      {
        label: "Dağıtılan Gıda Kolisi",
        backgroundColor: [
          "green",
          "red",
          "blue",
          "yellow",
          "purple",
          "brown",
          "pink",
          "gray",
          "lightblue",
          "orange",
          "lightgreen",
          "lime",
        ],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: "1",
        data: [],
      },
    ],
  };

  componentDidMount() {
    this.getTarih();
    this.getDagitilanGidaKolisi();
  }

  getTarih = () => {
    this.props.veriler.map((veri) => this.state.labels.push(veri.tarih));
  };

  getDagitilanGidaKolisi = () => {
    this.props.veriler.map((veri) =>
      this.state.datasets[0].data.push(veri.dagitilangidakolisi)
    );
  };

  render() {
    return (
      <div className="m-5">
        <section>
          <Bar data={this.state} />
        </section>
      </div>
    );
  }
}
