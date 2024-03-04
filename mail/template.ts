import { contactData } from "../server";

// a function that returns a template for mail
const HTML_TEMPLATE = (data: contactData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Portfolio</title>
        <style>
        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }
        
        .container{
          height:40rem;
          width:30rem;
          background-color:#d1d1d1;
          margin: 1rem auto;
          border-radius:5px;
          overflow:hidden;
        }
        
        .header{
          width:100%;
          height:5rem;
          background-color:#121f28;
          padding:0.7rem 1rem;
        }
        
        .img_wrapper{
          height:3.8rem;
          width: 3.8rem;
          background-color:#fff;
          padding:0.4rem;
          border-radius:50%;
          overflow:hidden;
        }
        
        .logo{
          height:3rem;
          width:3rem;
        }
        
        .body{
          width:100%;
          padding:2rem;
          font-family:"poppins",sans-serif;
        }
        
        .greetings{
          font-size:1.5rem;
        }

        .from{
          margin-top:1rem;
        }
        
        .message{
          margin-top:2rem;
          line-height:20px;
          font-weight:400;
        }        
        </style>
    </head>
      
    <body>
    <div class="container">
    <section class="header">
      <div class="img_wrapper">
        <img src="https://i.pinimg.com/736x/1a/2c/ea/1a2cea3964f3b1b6062d6a5c2a206b89.jpg" alt="logo" class="logo"/>
      </div>
    </section>
    
    <section class="body">
      <h2 class="greetings">Greetings Anshul,</h2>
      <p class="from">You have a message from <span>${data.name} (${data.email})</span></p>
      
      <p class="message">${data.message}</p>
    </section>
  </div>
    </body>
  </html>`;
};

export default HTML_TEMPLATE;
