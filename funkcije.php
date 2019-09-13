<?php



$a = $_POST["stranica_a"];
$b = $_POST["stranica_b"];

function povrsina($a, $b)
{
    if($a && $b) {
        return $a*$b/2;
    }

    return '';
}

echo povrsina($a, $b);
