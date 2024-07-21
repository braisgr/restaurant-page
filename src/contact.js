function render(){
  const content = document.getElementById("content");
  content.textContent= "";

  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.innerHTML = `
    <h2><u>Contact us</u></h2>
  `;
  content.appendChild(contact);

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");
  contact.appendChild(contactCard);
  contactCard.innerHTML = `
    <form>
      <input type="text" required placeholder="Full Name">
      <input type="email" required placeholder="Email">
      <textarea required placeholder="Type your message..."></textarea>
      <button>Send</button>
    </form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.972402560261!2d-0.10614942307499786!3d51.50429551092977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a5bbb206db%3A0xa9cfc05c4670e898!2sOrigin%20Coffee%20(Scoresby%20Street)!5e0!3m2!1ses!2ses!4v1721558990623!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
}

export {render as contactRender};