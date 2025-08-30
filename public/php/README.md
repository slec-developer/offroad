# PHPMailer Setup Instructions

## Overview
This directory contains the PHP backend for sending appointment form emails using PHPMailer.

## Files
- `send-appointment-email.php` - Main email sending script
- `PHPMailer/` - PHPMailer library files
- `README.md` - This setup guide

## Current Configuration
- **SMTP Server**: Gmail (smtp.gmail.com)
- **Port**: 465 (SSL)
- **Authentication**: shaikram02@gmail.com
- **Recipient**: autobotphwebappproject@gmail.com

## Setup Requirements

### 1. PHPMailer Files
The required PHPMailer files are already included in the `PHPMailer/` subdirectory:
- `Exception.php`
- `PHPMailer.php` 
- `SMTP.php`

### 2. Gmail Configuration
1. **2-Factor Authentication** is enabled on shaikram02@gmail.com
2. **App Password** is configured: `amrqksusxooylkkp`
3. **SMTP Settings**:
   - Host: smtp.gmail.com
   - Port: 465
   - Security: SSL
   - Username: shaikram02@gmail.com

## Testing the Email Functionality

### 1. Test the PHP Endpoint
Test the PHP file directly to ensure it works:
```bash
curl -X POST http://localhost/php/send-appointment-email.php \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "mobileNumber": "09123456789",
    "email": "test@example.com",
    "plateNumber": "ABC123",
    "appointmentDate": "2024-01-15",
    "preferredTime": "10:00"
  }'
```

### 2. Check Browser Console
When submitting the form, check the browser's Developer Tools → Console for any error messages.

### 3. Check Network Tab
In Developer Tools → Network, look for the request to `/php/send-appointment-email.php` and check the response.

## Troubleshooting

### Common Issues:

1. **"Failed to load resource"**
   - Check if the PHP file path is correct
   - Ensure your web server supports PHP

2. **"CORS error"**
   - The PHP file includes CORS headers, but ensure your server allows them

3. **"SMTP connection failed"**
   - Verify Gmail app password is correct
   - Check if port 465 is blocked by firewall
   - Ensure 2FA is enabled on Gmail account

4. **"PHP Fatal error"**
   - Check if PHPMailer files are in the correct location
   - Verify PHP version compatibility

### Debug Steps:

1. **Enable PHP Error Logging**:
   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   ```

2. **Test SMTP Connection**:
   ```php
   $mail->SMTPDebug = 2; // Enable verbose debug output
   ```

3. **Check File Permissions**:
   - Ensure PHP files are readable by web server
   - Check if web server can execute PHP

## Production Considerations
- Use environment variables for email credentials
- Implement rate limiting
- Add CAPTCHA or other spam prevention
- Use HTTPS for all communications
- Consider using a dedicated email service (SendGrid, Mailgun, etc.)

## Support
If you continue to have issues:
1. Check the browser console for JavaScript errors
2. Check the network tab for HTTP response details
3. Check your web server's error logs
4. Verify PHP is properly configured on your server
