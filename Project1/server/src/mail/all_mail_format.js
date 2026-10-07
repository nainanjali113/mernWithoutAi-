import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


export const user_otp_verification = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Hello",
            text: "Hello world?",
            html: `
            <div style="margin:0;padding:40px 20px;background:#f3f4f6;font-family:Arial,sans-serif;">
        <div
            style="max-width:500px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d1d5db;">
            <div style="background:#0b1f3a;padding:25px;text-align:center;color:#ffffff;">
                <h1 style="margin:0;font-size:28px;">Email Verification</h1>
            </div>
            <div style="padding:30px;color:#111827;">
                <h2 style="margin-top:0;color:#0b1f3a;">Hello ${name},</h2>
                <p style="font-size:16px;line-height:1.6;color:#4b5563;">Thank you for registering with us. Please use
                    the OTP below to verify your email address.</p>
                <div
                    style="margin:25px 0;padding:18px;text-align:center;background:#f3f4f6;border:2px dashed #0b1f3a;border-radius:8px;">
                    <span style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#0b1f3a;">${otp}</span>
                </div>
                <p style="font-size:14px;color:#6b7280;text-align:center;">This OTP will expire in <strong
                        style="color:#111827;">5 minutes</strong>.</p>
                <p style="font-size:14px;color:#6b7280;line-height:1.5;">If you did not request this verification code,
                    please ignore this email.</p>
            </div>
            <div style="background:#111827;padding:18px;text-align:center;color:#ffffff;font-size:13px;">
                © 2026 Your Company. All rights reserved.
            </div>
        </div>
    </div>
            `,
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch (err) { console.error(err.messagee); }
}


export const admin_login_otp_verification = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Admin Login - OTP Verification",
            text: `Hello ${name}, your admin login OTP is ${otp}. This OTP will expire in 5 minutes.`,
            html: `
                <div style="margin:0;padding:40px 20px;background:#f3f4f6;font-family:Arial,sans-serif;">
                    <div style="max-width:500px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d1d5db;">
                        
                        <div style="background:#0b1f3a;padding:25px;text-align:center;color:#ffffff;">
                            <h1 style="margin:0;font-size:28px;">Admin Login Verification</h1>
                        </div>

                        <div style="padding:30px;color:#111827;">
                            <h2 style="margin-top:0;color:#0b1f3a;">Hello ${name},</h2>

                            <p style="font-size:16px;line-height:1.6;color:#4b5563;">
                                A login attempt was made to your admin account. Please use the OTP below to verify your identity and complete the login.
                            </p>

                            <div style="margin:25px 0;padding:18px;text-align:center;background:#f3f4f6;border:2px dashed #0b1f3a;border-radius:8px;">
                                <span style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#0b1f3a;">${otp}</span>
                            </div>

                            <p style="font-size:14px;color:#6b7280;text-align:center;">
                                This OTP will expire in <strong style="color:#111827;">5 minutes</strong>.
                            </p>

                            <p style="font-size:14px;color:#6b7280;line-height:1.5;">
                                If you did not attempt to log in to the admin account, please ignore this email.
                            </p>
                        </div>

                        <div style="background:#111827;padding:18px;text-align:center;color:#ffffff;font-size:13px;">
                            © 2026 Your Company. All rights reserved.
                        </div>

                    </div>
                </div>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } 
    catch (err) {
        console.error(err.message);
    }
};


export const user_login_detect = async (name, email) => {
    try {

    }
    catch (err) { console.log(err.message) }
}


export const user_delete_account = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Delete Account - OTP Verification",
            text: `Hello ${name}, your OTP for deleting your account is ${otp}. This OTP will expire in 5 minutes.`,
            html: `
                <div style="margin:0;padding:40px 20px;background:#f3f4f6;font-family:Arial,sans-serif;">
                    <div style="max-width:500px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d1d5db;">
                        
                        <div style="background:#0b1f3a;padding:25px;text-align:center;color:#ffffff;">
                            <h1 style="margin:0;font-size:28px;">Delete Account</h1>
                        </div>

                        <div style="padding:30px;color:#111827;">
                            <h2 style="margin-top:0;color:#0b1f3a;">Hello ${name},</h2>

                            <p style="font-size:16px;line-height:1.6;color:#4b5563;">
                                We received a request to delete your account. Please use the OTP below to confirm your account deletion.
                            </p>

                            <div style="margin:25px 0;padding:18px;text-align:center;background:#f3f4f6;border:2px dashed #0b1f3a;border-radius:8px;">
                                <span style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#0b1f3a;">${otp}</span>
                            </div>

                            <p style="font-size:14px;color:#6b7280;text-align:center;">
                                This OTP will expire in <strong style="color:#111827;">5 minutes</strong>.
                            </p>

                            <p style="font-size:14px;color:#6b7280;line-height:1.5;">
                                If you did not request to delete your account, please ignore this email.
                            </p>
                        </div>

                        <div style="background:#111827;padding:18px;text-align:center;color:#ffffff;font-size:13px;">
                            © 2026 Your Company. All rights reserved.
                        </div>

                    </div>
                </div>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } 
    catch (err) {
        console.error(err.message);
    }
};







