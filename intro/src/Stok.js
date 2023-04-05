import { Component } from "react";
import { Table } from "reactstrap";
import "./Stok.css";

export default class Stok extends Component {
  
  renderFull() {
    return (
      <div className="m-5">
        <Table className="text-center mt-4">
          <thead>
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
            {this.props.veriler.reverse().map((veri, index) => (
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
            {this.props.search.reverse().map((veri, index) => (
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
