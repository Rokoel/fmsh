<?php
// Strict error reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to validate input data
function validateInput($input) {
    // Remove whitespace from start and end
    $input = trim($input);
    
    // Sanitize input to prevent XSS
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    
    return $input;
}

// Function to validate email
function validateEmail($email) {
    // Trim and sanitize email
    $email = validateInput($email);
    
    // Use PHP's built-in email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    
    return $email;
}

// Main registration handler
function handleMainRegistration($formData) {
    // Validate required fields
    $requiredFields = [
        'surname', 'firstname', 'lastname', 'emails', 
        'birthday', 'grade', 'school', 'region', 'capcha-input'
    ];
    
    foreach ($requiredFields as $field) {
        if (empty($formData[$field])) {
            return ['success' => false, 'message' => "Поле $field не заполнено"];
        }
    }
    
    // Specific validations
    // Validate emails
    $emails = explode(',', $formData['emails']);
    $validEmails = [];
    foreach ($emails as $email) {
        $validEmail = validateEmail(trim($email));
        if (!$validEmail) {
            return ['success' => false, 'message' => 'Неверный формат электронной почты'];
        }
        $validEmails[] = $validEmail;
    }
    
    // Validate birthday (should match DD.MM.YYYY format)
    if (!preg_match('/^\d{2}\.\d{2}\.\d{4}$/', $formData['birthday'])) {
        return ['success' => false, 'message' => 'Неверный формат даты рождения'];
    }
    
    // Validate grade (between 4 and 11)
    $grade = intval($formData['grade']);
    if ($grade < 4 || $grade > 11) {
        return ['success' => false, 'message' => 'Класс должен быть от 4 до 11'];
    }
    
    // Dummy capcha validation
    if (empty($formData['capcha-input'])) {
        return ['success' => false, 'message' => 'Каптча не введена'];
    }
    
    // Simulated successful registration
    return [
        'success' => true, 
        'message' => '
        <div style="text-align: center;">
            <b>Спасибо за регистрацию!</b>
        </div>
        <br>
        Текст сюда подцепляется из PHP, а значит, можно добавить любой текст с любым форматированием, в том числе можно использовать полужирный текст, курсив, подчеркнутый текст и т.д.
        <br>
        Регистрация прошла успешно! Проверьте вашу электронную почту для подтверждения. Этот текст был подцеплен из PHP, из файла register.php.
        '
    ];
}

// Event registration handler
function handleEventRegistration($formData, $eventId) {
    // Validate email
    $email = validateEmail($formData['email']);
    if (!$email) {
        return ['success' => false, 'message' => 'Неверный формат электронной почты'];
    }
    
    // Simulated successful event registration
    return [
        'success' => true, 
        'message' => "
        <div style='text-align: center;'>
            <b>Регистрация на мероприятие $eventId прошла успешно!</b>
        </div>
        <br>
        Текст сюда подцепляется из PHP, а значит, можно добавить любой текст с любым форматированием, в том числе можно использовать полужирный текст, курсив, подчеркнутый текст и т.д.
        <br>
        Регистрация прошла успешно! Проверьте вашу электронную почту для подтверждения. Этот текст был подцеплен из PHP, из файла register.php.
        "
    ];
}

// Main request handler
function handleRegistration() {
    // Ensure proper headers for JSON response
    header('Content-Type: application/json');
    
    // Check if it's a POST request
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(['success' => false, 'message' => 'Неверный метод запроса']);
        exit;
    }
    
    // Retrieve form data
    $formData = $_POST;
    
    // Check for event parameter
    $eventId = isset($_GET['event']) ? intval($_GET['event']) : null;
    
    try {
        // Handle registration based on event parameter
        if ($eventId === null) {
            $result = handleMainRegistration($formData);
        } else {
            $result = handleEventRegistration($formData, $eventId);
        }
        
        // Send JSON response
        echo json_encode($result);
    } catch (Exception $e) {
        // Handle any unexpected errors
        echo json_encode([
            'success' => false, 
            'message' => 'Произошла ошибка при регистрации: ' . $e->getMessage()
        ]);
    }
    
    exit;
}

// Run the registration handler
handleRegistration();
?>