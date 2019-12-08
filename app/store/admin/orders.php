<?php
    echo "<div class='col-md-12'>
            <div class='row'>
              <h1 class='page-header'>
                All Orders
              </h1>
            </div>
            <div class='row'>
              <table class='table table-hover'>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Amount</th>
                    <th>Transaction</th>
                    <th>Currency</th>
                    <th>Status Number</th>
                  </tr>
                </thead>
                <tbody>";
displayOrders();

        /*        <tr>
                    <td>21</td>
                    <td>Nikon 234</td>
                    <td><img src='http://placehold.it/62x62' alt=''></td>
                    <td>Cameras</td>
                    <td>456464</td>
                    <td>Jun 2039</td>
                    <td>Completed</td>
                  </tr>    */
          echo "</tbody>
              </table>
            </div>
          </div>";

?>
