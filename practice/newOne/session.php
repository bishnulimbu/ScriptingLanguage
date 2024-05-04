<?php
//session start
  session_start();
  $_session['name'] = 'ram';
  $_session['array1'] = array('ram','sam','hari');
  //this will set up an array and a name.
  unset($_session['array1']);//or
  session_unset();
  //or 
  session_destroy();
?>
