import { Component } from "react";
import { Table } from "reactstrap";
import "./Stok.css";

export default class Stok extends Component {
  state = { toplamdagitilangidakolisi: "", toplamdagitilanhijyenkolisi: "", toplamgelentir: "" }

  componentDidMount() {
    this.tdgkolisi();
    this.tdhkolisi();
    this.tgtsayisi();
  }

  tdgkolisi = async () => { //toplam dağıtılan gıda kolisi
    try {
      let toplam = 0;
      await this.props.veriler.map(veri => (
        toplam = veri.dagitilangidakolisi + toplam
      ))
      this.setState({ toplamdagitilangidakolisi: toplam })

    } catch (error) {
      console.error(error);
    }
  }

  tdhkolisi = async () => { //toplam dağıtılan hijyen kolisi
    try {
      let toplam = 0;
      await this.props.veriler.map(veri => (
        toplam = veri.dagitilanhijyenkolisi + toplam
      ))
      this.setState({ toplamdagitilanhijyenkolisi: toplam })

    } catch (error) {
      console.error(error);
    }
  }

  tgtsayisi = async () => { //toplam gelen tır sayısı
    try {
      let toplam = 0;
      await this.props.veriler.map(veri => (
        toplam = veri.gelentir + toplam
      ))
      this.setState({ toplamgelentir: toplam })
    } catch (error) {
      console.error(error);
    }
  }

  renderFull() {
    return (
      <div className="m-5">
        <Table className="text-center mt-4">
          <thead>
            <tr style={{backgroundColor:"lightcyan",color:"darkmagenta"}}><b>{this.props.veriler.length + 6} Gün</b></tr>
            <tr>
              <th>TARİH</th>
              <th>SOSYAL MARKET</th>
              <th>GELEN TIR</th>
              <th>DAĞITILAN GIDA KOLİSİ</th>
              <th>DAĞITILAN HİJYEN KOLİSİ</th>
              <th>STOKTAKİ GIDA KOLİSİ</th>
              <th>STOKTAKİ HİJYEN KOLİSİ</th>
              <th>TOPLAM PERSONEL</th>
              <th>TOPLAM ARAÇ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.veriler.map((veri, index) => (
              <tr key={index}>
                <th>{veri.tarih}</th>
                <td>{veri.sosyalmarket}</td>
                <td>{veri.gelentir}</td>
                <td>{veri.dagitilangidakolisi}</td>
                <td>{veri.dagitilanhijyenkolisi}</td>
                <td>{veri.mevcuttakigidakolisi}</td>
                <td>{veri.mevcuttakihijyenkolisi}</td>
                <td>{veri.toplampersonel}</td>
                <td>{veri.toplamarac}</td>
              </tr>
            ))}
            <tr>
              <th>TOPLAM</th>
              <th></th>
              <th>{this.state.toplamgelentir}</th>
              <th>{this.state.toplamdagitilangidakolisi}</th>
              <th>{this.state.toplamdagitilanhijyenkolisi}</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  renderFilter() {
    return (
      <div className="m-5">
        <Table className="text-center mt-4">
          <thead>
          <tr style={{backgroundColor:"lightcyan",color:"darkmagenta"}}><b>{this.props.veriler.length + 6} Gün</b></tr>
            <tr>
              <th>TARİH</th>
              <th>SOSYAL MARKET</th>
              <th>GELEN TIR</th>
              <th>DAĞITILAN GIDA KOLİSİ</th>
              <th>DAĞITILAN HİJYEN KOLİSİ</th>
              <th>STOKTAKİ GIDA KOLİSİ</th>
              <th>STOKTAKİ HİJYEN KOLİSİ</th>
              <th>TOPLAM PERSONEL</th>
              <th>TOPLAM ARAÇ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.search.map((veri, index) => (
              <tr key={index}>
                <th>{veri.tarih}</th>
                <td>{veri.sosyalmarket}</td>
                <td>{veri.gelentir}</td>
                <td>{veri.dagitilangidakolisi}</td>
                <td>{veri.dagitilanhijyenkolisi}</td>
                <td>{veri.mevcuttakigidakolisi}</td>
                <td>{veri.mevcuttakihijyenkolisi}</td>
                <td>{veri.toplampersonel}</td>
                <td>{veri.toplamarac}</td>
              </tr>
            ))}
            <tr>
              <th>TOPLAM</th>
              <th></th>
              <th>{this.state.toplamgelentir}</th>
              <th>{this.state.toplamdagitilangidakolisi}</th>
              <th>{this.state.toplamdagitilanhijyenkolisi}</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.search.length > 0 ? this.renderFilter() : this.renderFull()}
      </div>
    );
  }
}
