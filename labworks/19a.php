<?php

$allowed_extensions = array("png", "jpg", "gif");
$max_size = 2097152;

if (isset($_FILES['upload_file'])) {

  $file_name = $_FILES['upload_file']['name'];
  $file_size = $_FILES['upload_file']['size'];
  $file_tmp = $_FILES['upload_file']['tmp_name'];
  $file_error = $_FILES['upload_file']['error'];

  if ($file_error == UPLOAD_ERR_OK) {

    $file_ext = pathinfo($file_name, PATHINFO_EXTENSION);
    $file_ext = strtolower($file_ext);

    if (in_array($file_ext, $allowed_extensions)) {

      if ($file_size <= $max_size) {

        $new_filename = uniqid('', true) . "." . $file_ext;
        $upload_path = "uploads/";

        if (move_uploaded_file($file_tmp, $upload_path . $new_filename)) {
          echo "File uploaded successfully!";
        } else {
          echo "Failed to move uploaded file.";
        }

      } else {
        echo "File size exceeds the maximum limit of 2 MB.";
      }

    } else {
      echo "Invalid file type. Only PNG, JPG, and GIF files are allowed.";
    }

  } else {

    switch ($file_error) {
      case UPLOAD_ERR_INI_SIZE:
        echo "The uploaded file exceeds the upload_max_filesize directive in php.ini.";
        break;
      case UPLOAD_ERR_FORM_SIZE:
        echo "The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.";
        break;
      case UPLOAD_ERR_PARTIAL:
        echo "The uploaded file was only partially uploaded.";
        break;
      case UPLOAD_ERR_NO_FILE:
        echo "No file was uploaded.";
        break;
      default:
        echo "Unknown upload error.";
    }
  }

} else {
  echo "Please select a file to upload.";
}

?>
