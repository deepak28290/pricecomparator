<?php
//link contains instance of a persistent mysql connection prepending 'p:' to hostname ensures the connection is persisten when using mysqli_connect
$link = mysqli_connect('p:localhost', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';

//abstract class ensures that the class is never instantiated

abstract class Database 
{
//static function ensure the function could still be called outside of the abstract class(by making it public)
public static function get_instance()
{
global $link; //making link global ensures we get the database link as required
return $link;
}
}
$db=Database::get_instance();


?>
