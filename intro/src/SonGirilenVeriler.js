import { Component } from "react";
import { Table } from "reactstrap";

export default class SonGirilenVeriler extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr className="col">
                            <th>Sosyal Market</th>
                            <th>Gelen Tır</th>
                            <th>Dağıtılan Gıda Kolisi</th>
                            <th>Dağıtılan Hijyen Kolisi</th>
                            <th>Stoktaki Gıda Kolisi</th>
                            <th>Stoktaki Hijyen Kolisi</th>
                            <th>Toplam Personel</th>
                            <th>Toplam Araç</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{this.props.veriler[this.props.veriler.length - 1].sosyalmarket}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].gelentir}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].dagitilangidakolisi}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].dagitilanhijyenkolisi}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].mevcuttakigidakolisi}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].mevcutakihijyenkolisi}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].toplampersonel}</td>
                                <td>{this.props.veriler[this.props.veriler.length - 1].toplamarac}</td>
                            </tr>
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}