import React from "react";
import NavbarMenu from "../page/NavbarMenu";
import Table from "react-bootstrap/Table";

function PatriesWinner(props) {
  const { resultData, winnersPatries } = props;

  let totalQuantity = 0;
  const filteredWinnersPatries = [];
  for (const item of winnersPatries) {
    if (totalQuantity + item.patries.length <= 50) {
      filteredWinnersPatries.push(item);
      totalQuantity += item.patries.length;
    } else {
      break;
    }
  }

  return (
    <div>
      <NavbarMenu />
      <div style={{ margin: 30 }}>
        <h2 className="font-title-page" style={{ marginBottom: 20 }}>
          Liste des gagnants
        </h2>

        <h4 style={{ color: "#bf764f", marginBottom: 25 }}>
          Nombre total de pâtiseries gagnées : {totalQuantity}
        </h4>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Gagant</th>
              <th>Quantité</th>
              <th>Pâtiseries</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredWinnersPatries?.map((elm, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{elm.userWinner.email}</td>
                  <td>{elm.patries.length}</td>
                  <td>
                    {elm.patries.map((elm) => (
                      <li style={{ listStyle: "none" }}> {elm} </li>
                    ))}
                  </td>
                  <td>{elm.date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PatriesWinner;
