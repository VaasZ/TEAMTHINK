<?php 
	$con = mysql_connect("127.0.0.1","root","");
	if ($con) {
		mysql_select_db("TEAMTHINK");
		mysql_query("set names utf8");
		$findSql = "SELECT img,color,pEng,pCHN,localLink,friendLink,type FROM TEAMTHINK";
		$res = mysql_query($findSql);
		while($row = mysql_fetch_assoc($res)){
 	 		$rows[]= $row;
		}
        echo json_encode($rows); 
	}
	
 ?>