# EmailJS Integration Setup Guide

Follow this guide to connect the portfolio's contact form to your Gmail account so that you receive admin notifications and clients receive confirmation receipts.

---

## 1. Sign Up & Configure EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. In the dashboard, navigate to **Email Services** and click **Add New Service**.
3. Select **Gmail** as the service provider.
4. Click **Connect Account**, log in to your Gmail address (`ravitejakarnati5312@gmail.com`), and authorize EmailJS.
5. Click **Create Service**. Copy your **Service ID** (e.g., `service_xxxxxx`).

---

## 2. Create the Email Templates

You must create two templates in the **Email Templates** tab.

### Template 1: Admin Notification
This template notifies you of new inquiries.

1. Click **Create New Template**.
2. Click **Settings** in the template editor and set:
   * **Name**: `Admin Notification`
   * **Subject**: `New Portfolio Enquiry from {{from_name}} [{{enquiry_category}}]`
3. Click the **Edit** tab, switch to the **HTML editor** (or click the source code icon `<>`), and paste the following HTML:

```html
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #FAF6EE; font-family: sans-serif; color: #1E1E1E;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FDFCFA; border: 4px solid #000000; box-shadow: 8px 8px 0 #000000; padding: 30px;">
    <div style="background-color: #FED049; border: 4px solid #000000; padding: 15px; margin-bottom: 25px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">TRANSMISSION RECEIVED</h1>
    </div>
    <div style="margin-bottom: 25px;">
      <p style="font-size: 16px; line-height: 1.6;">You have received a new contact submission from your portfolio website.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px; border: 2px solid #000000; background-color: #EADEC9; font-weight: bold; width: 30%;">SENDER:</td>
          <td style="padding: 10px; border: 2px solid #000000; font-family: monospace; font-weight: bold;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 2px solid #000000; background-color: #EADEC9; font-weight: bold;">EMAIL:</td>
          <td style="padding: 10px; border: 2px solid #000000; font-family: monospace;">{{from_email}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 2px solid #000000; background-color: #EADEC9; font-weight: bold;">CATEGORY:</td>
          <td style="padding: 10px; border: 2px solid #000000; text-transform: uppercase; font-weight: bold;">{{enquiry_category}}</td>
        </tr>
      </table>
      <div style="border: 4px solid #000000; background-color: #FDFCFA; box-shadow: 4px 4px 0 #000000; padding: 20px;">
        <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 800; color: #555555; text-transform: uppercase;">MESSAGE CONTENT:</h3>
        <p style="margin: 0; font-size: 16px; line-height: 1.6; font-style: italic;">"{{message_content}}"</p>
      </div>
    </div>
    <div style="border-top: 4px solid #000000; padding-top: 20px; text-align: center; font-size: 12px; font-weight: bold; color: #555555;">
      SYSTEM NOTIFICATION // PORTFOLIO_SERVER
    </div>
  </div>
</body>
</html>
```
4. Click **Save**. Copy the **Template ID** (e.g., `template_admin_xxxxxx`).

---

### Template 2: Client Auto-Confirmation
This template sends a receipt automatically to the visitor.

1. Click **Create New Template**.
2. Click **Settings** in the template editor and set:
   * **Name**: `Client Auto-Confirmation`
   * **Subject**: `Enquiry Received - Raviteja Karnati`
   * **To Email** (Important): Change the receiver email input field to `{{from_email}}` (this sends the email to the visitor instead of you).
3. Click the **Edit** tab, switch to the **HTML editor** (or click the source code icon `<>`), and paste the following HTML:

```html
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #FAF6EE; font-family: sans-serif; color: #1E1E1E;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FDFCFA; border: 4px solid #000000; box-shadow: 8px 8px 0 #000000; padding: 30px;">
    <div style="background-color: #86EFAC; border: 4px solid #000000; padding: 15px; margin-bottom: 25px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">TRANSMISSION LOGGED</h1>
    </div>
    <div style="margin-bottom: 25px;">
      <p style="font-size: 16px; line-height: 1.6;">Hi <strong>{{from_name}}</strong>,</p>
      <p style="font-size: 16px; line-height: 1.6;">Thank you for getting in touch! This is an automated receipt confirming that your message has been successfully routed to my inbox. I will review and reply within 24 hours.</p>
      <div style="border: 4px solid #000000; background-color: #FAF6EE; box-shadow: 4px 4px 0 #000000; padding: 20px; margin-top: 25px;">
        <h3 style="margin: 0 0 15px 0; font-size: 14px; font-weight: 800; color: #555555; text-transform: uppercase; border-bottom: 2px dashed #000000; padding-bottom: 5px;">SUBMISSION COPY:</h3>
        <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Category:</strong> {{enquiry_category}}</p>
        <p style="margin: 0; font-size: 15px; font-style: italic; line-height: 1.5;">"{{message_content}}"</p>
      </div>
    </div>
    <div style="border-top: 4px solid #000000; padding-top: 20px; text-align: center; font-size: 12px; font-weight: bold; color: #555555;">
      RAVITEJA KARNATI &copy; {{year}} // AI ENGINEER &amp; FREELANCER
    </div>
  </div>
</body>
</html>
```
4. Click **Save**. Copy the **Template ID** (e.g., `template_client_xxxxxx`).

---

## 3. Retrieve Your Public Key

1. Navigate to **Account** or **API Keys** in the bottom left menu.
2. Under the **API Keys** tab, copy your **Public Key** (e.g., `user_xxxxxx` or a random string key).

---

## 4. Setup Environment Variables

In the root of your Next.js project directory, create a file named `.env.local` and add the copied values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN=template_admin_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CLIENT=template_client_xxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxx
```

Restart your local dev server (`npm run dev`) so Next.js loads the new environment variables.
