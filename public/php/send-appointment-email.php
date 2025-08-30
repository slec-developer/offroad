<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No form data received."]);
    exit;
}

// Validate required fields
$required_fields = ['firstName', 'lastName', 'mobileNumber', 'email', 'plateNumber', 'appointmentDate', 'preferredTime'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    echo json_encode(["success" => false, "message" => "Missing required fields: " . implode(', ', $missing_fields)]);
    exit;
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email format"]);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings - Use SSL on port 465 as configured in your credentials
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'shaikram02@gmail.com'; 
    $mail->Password   = 'amrqksusxooylkkp';
    $mail->SMTPSecure = 'ssl'; // Changed from 'tls' to 'ssl'
    $mail->Port       = 465;   // Changed from 587 to 465
    
    // Enable debug for troubleshooting (remove in production)
    $mail->SMTPDebug = 0;
    
    // Set timeout
    $mail->Timeout = 30;

    // Recipients
    $mail->setFrom('shaikram02@gmail.com', 'Autobot Contact Form');
    $mail->addAddress('autobotphwebappproject@gmail.com', 'Autobot Team');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Appointment Request from " . $data['firstName'] . ' ' . $data['lastName'];
    
    // Create HTML email body
    $emailBody = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .section { margin-bottom: 20px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🚗 New Appointment Request</h2>
                <p>A new appointment has been requested through the Autobot website contact form.</p>
            </div>
            
            <div class='section'>
                <h3>👤 Personal Details</h3>
                <div class='field'>
                    <span class='label'>Name:</span>
                    <span class='value'>{$data['firstName']} {$data['lastName']}</span>
                </div>
                <div class='field'>
                    <span class='label'>Mobile Number:</span>
                    <span class='value'>{$data['mobileNumber']}</span>
                </div>
                <div class='field'>
                    <span class='label'>Email:</span>
                    <span class='value'>{$data['email']}</span>
                </div>
                <div class='field'>
                    <span class='label'>Plate Number:</span>
                    <span class='value'>{$data['plateNumber']}</span>
                </div>
            </div>
            
            <div class='section'>
                <h3>📅 Appointment Details</h3>
                <div class='field'>
                    <span class='label'>Date:</span>
                    <span class='value'>{$data['appointmentDate']}</span>
                </div>
                <div class='field'>
                    <span class='label'>Preferred Time:</span>
                    <span class='value'>{$data['preferredTime']}</span>
                </div>
            </div>
            
            <div class='footer'>
                <p>This email was sent from the Autobot website contact form.</p>
                <p>Sent on: " . date('F j, Y \a\t g:i A') . "</p>
            </div>
        </div>
    </body>
    </html>";

    $mail->Body = $emailBody;
    $mail->AltBody = "
    New Appointment Request

    Personal Details:
    - Name: {$data['firstName']} {$data['lastName']}
    - Mobile Number: {$data['mobileNumber']}
    - Email: {$data['email']}
    - Plate Number: {$data['plateNumber']}

    Appointment Details:
    - Date: {$data['appointmentDate']}
    - Preferred Time: {$data['preferredTime']}

    Sent on: " . date('F j, Y \a\t g:i A');

    $mail->send();
    echo json_encode(["success" => true, "message" => "Appointment request sent successfully! We will contact you soon."]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send appointment request. Please try again later.", "error" => $e->getMessage()]);
}
?>
