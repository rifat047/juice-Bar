<?php 
    $username = $_POST['FullName']; 
    $phone = $_POST['CellNumber'];
    $location = $_POST['Location'];
    $password = $_POST['CardNumber'];
    $days = $_POST['Days'];
    $month = $_POST['Month'];
    $year=$_POST['Year']; 
    
 
 
    $conn = new mysqli('localhost','root','','juice'); 


    if ($conn->connect_error) { 
        die('Connection failed: '.$conn->connect_error); 
    } 
    else{ 
        $stmt = $conn->prepare("insert into information(FullName, CellNumber, Location ,CardNumber, Days, Month, Year ) values(?, ? ,?, ?, ? , ?, ?)"); 
        $stmt->bind_param("ssss",$username, $phone , $location , $password ,  $days ,  $month, $year); 
        $stmt->execute(); 
        echo "Login Successfully"; 
        $stmt->close(); 
        $conn->close(); 
 
    }

  
?>