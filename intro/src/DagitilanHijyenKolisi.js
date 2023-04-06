import { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
export default class DagitilanHijyenKolisi extends Component {
  state = {
    labels: [],
    datasets: [
      {
        label: "Dağıtılan Hijyen Kolisi",
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
    this.getDagitilanHijyenKolisi();
  }

  getTarih = async () => {
    await this.props.veriler.map((veri) => this.state.labels.push(veri.tarih));
  };

  getDagitilanHijyenKolisi =async () => {
    await this.props.veriler.map((veri) =>
      this.state.datasets[0].data.push(veri.dagitilanhijyenkolisi)
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
