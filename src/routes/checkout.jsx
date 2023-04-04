// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// function Checkout(props) {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handlePhoneChange(event) {
//     setPhone(event.target.value);
//   }

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const db = firebase.firestore();
//     const newOrderRef = db.collection('orders').doc();
//     const newOrder = {
//       name,
//       phone,
//       email,
//       products: props.products.map(product => ({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: product.quantity
//       })),
//       total: props.total
//     };
//     newOrderRef.set(newOrder)
//       .then(() => {
//         alert(`¡Gracias por tu compra! Tu número de orden es ${newOrderRef.id}.`);
//         props.history.push('/');
//       })
//       .catch(error => {
//         alert(`Ha ocurrido un error al procesar tu compra: ${error.message}`);
//       });
//   }

//   return (
//     <div>
//       <h2>Confirmar compra</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Teléfono:
//           <input type="text" value={phone} onChange={handlePhoneChange} />
//         </label>
//         <br />
//         <label>
//           Correo electrónico:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br />
//         <button type="submit">Confirmar compra</button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;
