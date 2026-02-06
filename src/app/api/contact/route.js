import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => ({}));

    const name = sanitize(payload?.name);
    const phone = sanitize(payload?.phone);
    const email = sanitize(payload?.email);
    const message = sanitize(payload?.message);

    const subject = 'Обращение с сайта';

    if (!name) {
      return Response.json({ error: 'Пожалуйста, заполните поле “Имя”.' }, { status: 400 });
    }

    if (!phone && !email) {
      return Response.json(
        { error: 'Укажите телефон или email (хотя бы одно поле).' },
        { status: 400 }
      );
    }

    if (!message) {
      return Response.json({ error: 'Пожалуйста, заполните поле “Сообщение”.' }, { status: 400 });
    }

    // Preferred configuration: 3 поля (from/to/password)
    // Backward compatibility: GMAIL_USER is treated as FROM.
    const gmailFrom = process.env.GMAIL_FROM || process.env.GMAIL_USER;
    const gmailTo = process.env.GMAIL_TO || gmailFrom;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailFrom || !gmailTo || !gmailAppPassword) {
      return Response.json(
        {
          error:
            'Отправка почты не настроена. Добавьте GMAIL_FROM, GMAIL_TO и GMAIL_APP_PASSWORD в переменные окружения (.env.local).',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailFrom,
        pass: gmailAppPassword,
      },
    });

    const lines = [
      'Сообщение с формы обратной связи (erai-farm)',
      '',
      `Имя: ${name || '—'}`,
      `Телефон: ${phone || '—'}`,
      `Email: ${email || '—'}`,
      '',
      'Сообщение:',
      message,
    ];

    const html = `
      <div style="background:#f6f8fb;padding:24px;font-family:Arial,Helvetica,sans-serif;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6eaf2;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#16348a 0%,#0d2b52 100%);padding:16px 20px;">
            <div style="font-size:16px;font-weight:700;color:#ffffff;">EraiFarm Website</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.85);margin-top:4px;">Сообщение с формы обратной связи</div>
          </div>

          <div style="padding:18px 20px;color:#111827;">
            <div style="font-size:14px;line-height:20px;margin-bottom:14px;">
              <div style="font-weight:700;font-size:15px;margin-bottom:6px;">${escapeHtml(subject)}</div>
              <div style="color:#6b7280;">${new Date().toLocaleString('ru-RU')}</div>
            </div>

            <table style="width:100%;border-collapse:separate;border-spacing:0 10px;font-size:14px;">
              <tr>
                <td style="width:120px;color:#6b7280;">Имя</td>
                <td style="font-weight:600;">${escapeHtml(name || '—')}</td>
              </tr>
              <tr>
                <td style="width:120px;color:#6b7280;">Телефон</td>
                <td style="font-weight:600;">${escapeHtml(phone || '—')}</td>
              </tr>
              <tr>
                <td style="width:120px;color:#6b7280;">Email</td>
                <td style="font-weight:600;">${escapeHtml(email || '—')}</td>
              </tr>
            </table>

            <div style="margin-top:6px;border-top:1px solid #eef2f7;padding-top:14px;">
              <div style="color:#6b7280;font-size:12px;margin-bottom:6px;">Сообщение</div>
              <div style="white-space:pre-wrap;font-size:14px;line-height:20px;">${escapeHtml(message)}</div>
            </div>
          </div>

          <div style="padding:12px 20px;background:#fafbff;border-top:1px solid #eef2f7;color:#6b7280;font-size:12px;">
            Это письмо отправлено автоматически с сайта erai-farm.
          </div>
        </div>
      </div>
    `.trim();

    await transporter.sendMail({
      from: { name: 'EraiFarm Website', address: gmailFrom },
      to: gmailTo,
      subject: `EraiFarm: ${subject}`,
      text: lines.join('\n'),
      html,
      ...(isValidEmail(email) ? { replyTo: email } : {}),
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Ошибка отправки сообщения.' },
      { status: 500 }
    );
  }
}
