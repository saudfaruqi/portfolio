<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Perform your email processing here
        // Example: Sending an email (you may need to configure your server to send emails)
        $to = "saudafaruqi@gmail.com"; // Replace with your own email address
        $subject = "New Contact Form Submission";
        $message = "Email: " . $email;
        $headers = "From: noreply@example.com"; // Replace with a valid "From" email address

        if (mail($to, $subject, $message, $headers)) {
            echo "<script>alert('Thank you! Your email has been submitted successfully.'); window.location.href = 'index.html';</script>";
        } else {
            echo "<script>alert('Failed to send email. Please try again later.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Invalid email address.'); window.history.back();</script>";
    }
} else {
    // Redirect if the form was not submitted properly
    header("Location: index.html");
    exit();
}
