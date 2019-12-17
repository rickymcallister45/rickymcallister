<?php

echo "<div class='col-md-12'>
        <div class='row'>
          <h1 class='page-header'>
           Measurments";

    echo "</h1>
        </div>
        <form action='' method='post' enctype='multipart/form-data'>
          <div class='col-md-8'>
            
            <div class='form-group'>
              <label for='name'>Name</label>
              <input type='text' name='name' class='form-control'>
            </div>
            
            <div class='form-group'>
              <label for='height'>Height</label>
                <input type='number' name='height' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='weight'>Weight</label>
                <input type='number' name='weight' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoe_size'>Shoe Size</label>
                <input type='number' name='shoe_size' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='upper_bust'>Upper Bust</label>
                <input type='number' name='upper_bust' class='form-control' step='.01'>
            </div>
                      
          </div>
          
          
          <aside id='admin_sidebar' class='col-md-4'>
            <div class='form-group'>
              <input type='submit' name='draft' class='btn btn-warning btn-lg' value='Draft'>
              <input type='submit' name='publish' class='btn btn-primary btn-lg' value='Publish'>
            </div>
            
            <div class='form-group'>
              <label for='gender'>Gender</label>
              <select name='gender' id='' class='form-control'>
                <option value=''>Select Gender</option>";

        echo "</select>
            </div>
            
            <div class='form-group'>
              <label for='full_bust'>Full Bust</label>
                <input type='number' name='full_bust' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='under_bust'>Under Bust</label>
              <input type='number' name='under_bust' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='waist'>Waist</label>
                <input type='number' name='waist' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='high_hip'>High Hip</label>
                <input type='number' name='high_hip' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='hip'>Hip</label>
                <input type='number' name='hip' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='outseam'>Outseam</label>
                <input type='number' name='outseam' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='inseam'>Inseam</label>
                <input type='number' name='inseam' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='arm_length'>Arm Length</label>
                <input type='number' name='arm_length' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='wrist'>Waist</label>
                <input type='number' name='wrist' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoulder_to_shoulder'>Shoulder to Shoulder</label>
                <input type='number' name='shoulder_to_shoulder' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoulder_to_waist'>Shoulder to Waist</label>
                <input type='number' name='shoulder_to_waist' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoulder_to_knee'>Shoulder to knee</label>
                <input type='number' name='shoulder_to_knee' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoulder_to_ankle'>Shoulder to ankle</label>
                <input type='number' name='shoulder_to_ankle' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='shoulder_to_floor'>Shoulder to Floor</label>
                <input type='number' name='shoulder_to_floor' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='waist_to_knee'>Waist to Knee</label>
                <input type='number' name='waist_to_knee' class='form-control' step='.01'>
            </div>
            
            <div class='form-group'>
              <label for='image'>Image</label>
              <input type='file' name='file'>
            </div>
            
          </aside>
          <!--SIDEBAR-->
        </form>";

?>
