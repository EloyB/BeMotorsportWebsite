import React from "react";

export default function MailTemplate() {
  return (
    <div>
      <h1>
        {{ firstName }} {{ lastName }}
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis id facere, corporis
        ea provident culpa est itaque similique quo recusandae animi dolore cum, libero iusto
        reprehenderit officiis? Alias, maxime suscipit!
      </p>
    </div>
  );
}
