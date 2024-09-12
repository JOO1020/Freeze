import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppLink() {
  const phoneNumber = "201120304107"; // ضع رقم هاتفك بصيغة دولية بدون "+"
  const message = "Hello, I want to complete the purchase process"; // الرسالة الافتراضية (اختياري)

  return (
   <>

    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank" 
      rel="noopener noreferrer"
    >
    <Button variant='success' style={{width:"100%"}}>
    <FaWhatsapp style={{margin:"5px" }}  size={25}/>
    </Button>
    </a>
   </>
  );
}

export default WhatsAppLink;
