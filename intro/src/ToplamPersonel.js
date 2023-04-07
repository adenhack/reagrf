import { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
export default class ToplamPersonel extends Component {
  state = {
    labels: [],
    datasets: [
      {
        label: "Toplam Personel",
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
    this.getToplamPersonel();
  }

  getTarih = async () => {
    try {
      await this.props.veriler.map((veri) => this.state.labels.push(veri.tarih));
    } catch (error) {
      console.error(error);
    }
  };

  getToplamPersonel = async () => {
    try {
      await this.props.veriler.map((veri) =>
        this.state.datasets[0].data.push(veri.toplampersonel)
      );
    } catch (error) {
      console.error(error);
    }
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
