<?php
function generateCaptchaCode($length = 6) {
    $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    $captchaCode = '';
    for ($i = 0; $i < $length; $i++) {
        $captchaCode .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $captchaCode;
}

function makeNoise($img, $count, $w, $h) {
    // Predefine a set of random colors to reduce redundant imagecolorallocate calls
    $colors = [];
    for ($i = 0; $i < 5; $i++) {
        $colors[] = imagecolorallocate($img, rand(0, 120), rand(0, 120), rand(0, 120));
    }
    
    for ($i = 0; $i < $count; $i++) {
        // Use pre-allocated random colors for noise
        $randomColor = $colors[array_rand($colors)];
        imagesetpixel($img, rand(1, $w - 1), rand(1, $h - 1), $randomColor);
    }
}

function generateImage($captchaHash) {

    if ($captchaHash == null) {
        exit("No CAPTCHA code provided");
    }

    $captchaCode = generateCaptchaCode();  // Create a random CAPTCHA code
    $filename = "checkcode/" . $captchaHash . ".txt";  // Define the file path
    // Write the CAPTCHA code to the file
    file_put_contents($filename, $captchaCode);

    $text = file_get_contents($filename);

    $numChars = strlen($text);
    $w = 120;
    $h = 20;
    $charx = $w / $numChars;

    // Create the base image
    $img = imagecreatetruecolor($w, $h);

    // Background and border color allocation
    $backgroundColor = imagecolorallocate($img, 255, 255, 255);
    imagefill($img, 0, 0, $backgroundColor);

    // Add background noise
    makeNoise($img, 200, $w, $h);

    // Text rendering
    $x = rand(5, $charx);
    for ($i = 0; $i < $numChars; $i++) {
        $char = $text[$i];
        $fontSize = 5; // Fixed font size for simplicity
        $y = rand(1, round(($h - 15) / 2));
        $textColor = imagecolorallocate($img, rand(0, 120), rand(0, 50), rand(0, 50));
        imagechar($img, $fontSize, $x, $y, $char, $textColor);

        // Increment x position for next character
        $x += rand(15, $charx);
    }

    // Add foreground noise
    makeNoise($img, 100, $w, $h);

    // Output the image as PNG
    header("Content-Type: image/png");
    imagepng($img);
    unlink($filename);
    imagedestroy($img);
}

// // Validate the 'code' parameter
// if (!preg_match("/^[a-h0-9]{32}$/", $_GET['code'])) {
//     require_once 'mail_utf8.php';
//     mail_utf8("", "sergech@inbox.lv", "fmsh|gerImage: Invalid code parameter", "code=" . $_GET['code'], "FMSH.RU", "info@fmsh.ru");
//     exit(-1);
// }

// Generate the image with the validated 'code'
generateImage($_GET['code']);
?>