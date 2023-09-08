import React, { useEffect } from "react";
import NavbarMenu from "../page/NavbarMenu";
import Table from "react-bootstrap/Table";

function PastriesWinner(props) {
  const { winnersPastries, getWinnersPastries } = props;

  useEffect(() => {
    getWinnersPastries();
  }, [winnersPastries]);

  let totalQuantity = 0;
  const filteredWinnersPastries = [];
  for (const item of winnersPastries) {
    if (totalQuantity + item.pastries?.length <= 52) {
      filteredWinnersPastries.push(item);
      totalQuantity += item.pastries.length;
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

        {totalQuantity >= 50 && (
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
              {filteredWinnersPastries?.map((elm, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{elm.userWinner.email}</td>
                    <td>{elm.pastries.length}</td>
                    <td>
                      {elm.pastries.map((elm) => (
                        <li style={{ listStyle: "none" }}> {elm} </li>
                      ))}
                    </td>
                    <td>{elm.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default PastriesWinner;
