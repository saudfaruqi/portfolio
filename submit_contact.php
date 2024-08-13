<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email address.'); window.history.back();</script>";
        exit();
    }

    // Process the data (e.g., send an email)
    $to = "saudafaruqi@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: noreply@example.com"; // Replace with a valid "From" email address

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                document.getElementById('thankYouMessage').style.display = 'block';
                setTimeout(() => { document.getElementById('thankYouMessage').style.display = 'none'; }, 5000);
                window.location.href = 'index.html'; // Optional: Redirect to a success page
              </script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again later.'); window.history.back();</script>";
    }
} else {
    // Redirect if the form was not submitted properly
    header("Location: index.html");
    exit();
}
