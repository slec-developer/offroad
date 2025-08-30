<?php
namespace PHPMailer\PHPMailer;

class PHPMailer
{
    public $Host = '';
    public $Port = 25;
    public $SMTPAuth = false;
    public $Username = '';
    public $Password = '';
    public $SMTPSecure = '';
    public $SMTPDebug = 0;
    public $Timeout = 300;
    public $isHTML = false;
    public $Subject = '';
    public $Body = '';
    public $AltBody = '';
    public $From = '';
    public $FromName = '';
    public $to = [];
    
    public function isSMTP() {}
    public function setFrom($address, $name = '') { $this->From = $address; $this->FromName = $name; }
    public function addAddress($address, $name = '') { $this->to[] = ['address' => $address, 'name' => $name]; }
    public function send() { return true; }
}
