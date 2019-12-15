<?php
echo "<div class='row'>
        <h1 class='page-header'>
          All Products
        </h1>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Id</th>
              <th>Order Id</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          <tbody>";

adminGetReports();

    echo "</tbody>
        </table>
      </div>";
?>
