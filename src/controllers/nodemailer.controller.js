const nodemailer = require('nodemailer');

const SENDMAIL = (req, res) => {
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    const TRANSPORTER = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'gonzaraya91@gmail.com',
            pass: 'dcccnplpjhznrtgk'
        }
    });

    const MAILOPTIONS = {
        to: 'gonzaraya91@gmail.com',
        from: `${nombre} ${apellido}`,
        subject: "Mensaje desde Portfolio Web",
        html: `<h1>Mensaje de: ${nombre} ${apellido}</h1>
        <br>
        <p style="font-size: 1rem; font-weight: bold;">${mensaje}</p>
        <br>
        <h2>Contacto: ${telefono} 
        <br>
        Email: ${email}</h2>`
    }

    TRANSPORTER.sendMail(MAILOPTIONS, (err,info)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log(`enviado: ID: ${info.messageId}`);
        }
        res.json({status: '¡Mensaje Enviado con Éxito!'});
    });
}

module.exports = SENDMAIL;