<?php
if(!empty($_POST['action'])) {
	$db = @new mysqli('localhost','newuser','password','vue');
		if($db -> connect_error) {
			exit(json_encode([false,$db->connect_error]));
		}
	if($_POST['action'] == 'retrieve_all'){
		$sql = "SELECT `car_id`, `brand`, `model`, `engine`, `gearbox` FROM `car`";
		$result = $db->query($sql);
		if($result) {
			if($result -> num_rows == 0) {
				echo json_encode([false, 'no rows retrieved']);
			}else{
				while($each_row = $result -> fetch_assoc()) {
					$all_rows[] = $each_row;
				}
			echo json_encode([true, $all_rows]);
			}
			$result -> close();
		}else{
			echo json_encode([false, 'SQL Query Error']);
		}
		$db -> close();
	}elseif($_POST['action'] == 'delete_item'){
		if(!empty($_POST['car_id'])){
			$_POST['car_id'] == $db -> real_escape_string($_POST['car_id']);
			$sql = "DELETE FROM `car` WHERE `car_id` = '{$_POST['car_id']}' LIMIT 1";
			$result = $db -> query($sql);
			if($result){
				echo json_encode([true, 'delete successful']);
			}else{
				echo json_encode([false, 'delete failure']);
			}
		}else{
			echo json_encode([false, 'need car id to delete...']);
		}
		$db -> close();
	}elseif($_POST['action'] == 'create_item'){
		if(!empty($_POST['new_item'])){
			if(!empty($_POST['new_item']['brand'])&&
			   !empty($_POST['new_item']['model'])&&
			   !empty($_POST['new_item']['engine'])&&
			   !empty($_POST['new_item']['gearbox'])){
				$brand = $db -> real_escape_string($_POST['new_item']['brand']);
				$model = $db -> real_escape_string($_POST['new_item']['model']);
				$engine = $db -> real_escape_string($_POST['new_item']['engine']);
				$gearbox = $db -> real_escape_string($_POST['new_item']['gearbox']);
				switch($engine){
					case 1:
						$engine = 'petrol';
					break;
					case 2:
						$engine = 'diesel';
					break;
					case 3:
						$engine = 'electric';
					break;
					case 4:
						$engine = 'hybrid';
					break;
					case 5:
						$engine ='hydrogen';
					break;
				}
				if($gearbox == 1){
					$gearbox = 'automatic';
				}elseif($gearbox == 2){
					$gearbox = 'manual';
				}else{
					$gearbox = false;
				}
				if($engine == false || $gearbox == false){
					echo json_encode([false, 'illegal data']);
				}else{
					$sql = "INSERT INTO `car` SET `brand` = '{$brand}',
						`model` = '{$model}',
						`engine` = '{$engine}',
						`gearbox` = '{$gearbox}'  ";
					$result = $db -> query($sql);
					if($result){
						echo json_encode([true, 'new row created']);
					}else{
						echo json_encode([false, 'Sql error']);
					}
				}
			}else{
				echo json_encode([false, 'insufficient data, cannot create new row..']);
			}
		}else{
			echo json_encode([false, 'no data sent, cannot create new row....']);
		}
		$db -> close();
	}elseif($_POST['action'] == 'update_item'){
	  
	  
	  
	  if(!empty($_POST['edited_item'])){
	    if(!empty($_POST['edited_item']['car_id'])&&
	       !empty($_POST['edited_item']['brand'])&&
	       !empty($_POST['edited_item']['model'])&&
	       !empty($_POST['edited_item']['engine'])&&
	       !empty($_POST['edited_item']['gearbox'])){
	            $car_id = $db -> real_escape_string($_POST['edited_item']['car_id']);
	           	$brand = $db -> real_escape_string($_POST['edited_item']['brand']);
				      $model = $db -> real_escape_string($_POST['edited_item']['model']);
				      $engine = $db -> real_escape_string($_POST['edited_item']['engine']);
				      $gearbox = $db -> real_escape_string($_POST['edited_item']['gearbox']);
	      $sql = "UPDATE `car` SET `brand` = '{$brand}',
						`model` = '{$model}',
						`engine` = '{$engine}',
						`gearbox` = '{$gearbox}'
						 WHERE `car_id` = '{car_id}' LIMIT 1 ";
					$result = $db -> query($sql);
	        if($result){
	          	echo json_encode([true, 'row updated']);
	        }else{
	          echo json_encode([false, 'Sql error']);
	        }
    }else{
	    echo json_encode([false, 'no data sent, cannot update database']);
	  }
	 }else{
	   echo json_encode([false, 'no data sent, cannot update database']);
	 }
	 $db -> close();
  }
}
?>
