<?php
    $FullName = $_POST['FullName'];
    $CellNumber = $_POST['CellNumber'];
    $Location = $_POST['Location'];
    $CardNumber = $_POST['CardNumber'];
    $Month = $_POST['Month'];
    $Year = $_POST['Year'];
    $CreditVerification = $_POST['CreditVerification'];

    $conn = new mysqli('localhost','root','','payment');
    if(conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into payment(FullName, CellNumber, Location, CardNumber, Month, Year, CreditVerification) values(?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sisiiii",$FullName, $CellNumber, $Location, $CardNumber, $Month, $Year, $CreditVerification);
        $stmt->execute();
        echo "Payment Successful";
        $stmt->close;
        $conn->close;
    }

?>