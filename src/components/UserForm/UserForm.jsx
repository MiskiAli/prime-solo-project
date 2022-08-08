// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function UserForm(){

//     const [name, setName] =useState('');
//     const [lastName, setLastName] =useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (event) => {
//         console.log('here is the new profile info', name, lastName);
//         event.preventDefault();
//         dispatch({
//             type: 'POST_ITEM',
//             payload: { name, lastName},
//         });
//         setName('');
//         setLastName('');
//     };

//     return(
//         <div>
//     <div>UserForm</div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="name"
//                     value={name}
//                     onChange={(event) => setName(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="lastName"
//                     value={lastName}
//                     onChange={(event) => setLastName(event.target.value)}
//                 />
//                 <button type="Update Profile" onClick={handleSubmit}>
//                     Add Item
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default UserForm;