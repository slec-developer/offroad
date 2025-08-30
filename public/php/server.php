<?php
// Simple PHP server script to test email functionality
// Run this with: php -S localhost:8000 -t public/php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

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

// For testing purposes, just return success without sending email
// This will help verify the form submission works
echo json_encode([
    "success" => true, 
    "message" => "Appointment request received successfully! (Test mode - no email sent)",
    "data" => $data
]);
?>
