<?php
if(!empty($_POST['range'])) {
	if($_POST['range'] == 'all') {
		$db = @new MySQLI('localhost','root','','vue');
		if($db -> connect_error) {
			exit(json_encode([false,$db->connect_error]));
		}
		$sql = "SELECT `car_id`, `brand`, `model`, `engine`, `gearbox`, FROM `car`;";
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
			$result -> free();
		}else{
			echo json_encode([false, 'SQL Query Error']);
		}
		$db -> close();
	}
}
?>
