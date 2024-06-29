<?php
include 'connect.php';


// Check connection
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}


// Get the posted data
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    
    $email=$_POST['email'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    $zip=$_POST['zipcode'];

   

     
        $insertQuery="INSERT INTO shipping (name,email,address,city,state,zip)
                       VALUES ('$name','$email','$address','$city','$state','$zip')";
            if($conn->query($insertQuery)==TRUE){
                header("location: http://127.0.0.1:5500/Prj/checkout.html");
            }
            else{
                echo "Error:".$conn->error;
            }
     
   

}
?>
