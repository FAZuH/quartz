---
{"publish":true,"cssclasses":""}
---

## About SPF records
SPF (Sender Policy Framework) specifies servers/hosts authorized to send email on behalf of a domain.

Consider the following illustration:
![|600](Assets/Pasted image 20250621134516.png)

Suppose `mail.fazuh.com` is sending an email to `mail.google.com`. In this case, the "Sending Email Server" is `fazuh.com`'s mail server, and the "Receiving Email Server" is `google.com`'s mail server.

After `google.com` receives the email from `fazuh.com`, its mail server queries `fazuh.com`'s DNS to check the SPF record and decide whether the "Sending Mail Server" is authorized to send email on behalf of `fazuh.com`, as specified on the SPF record.

If the "Sending Mail Server" is not specified in the SPF record, `google.com` either rejects the email, or marks it as spam. Otherwise, `google.com` accepts validated email.

---

**Read further**
- https://open-spf.org/SPF_Record_Syntax/

**Reference**
- https://www.youtube.com/watch?v=c9fLp5uIxp8