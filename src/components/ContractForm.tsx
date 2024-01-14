// import React, { useState } from "react";

// const ContractForm = ({ onSubmit, buttonText }) => {
//   const [contentHash, setContentHash] = useState("");
//   const [author, setAuthor] = useState("");
//   const [timestamp, setTimestamp] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ contentHash, author, timestamp });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="contentHash">Content Hash</label>
//         <input
//           type="text"
//           value={contentHash}
//           onChange={(e) => setContentHash(e.target.value)}
//           className="border rounded-md py-1 px-2"
//           placeholder="Content Hash"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="author">Author</label>
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="border rounded-md py-1 px-2"
//           placeholder="Author"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="timestamp">Timestamp</label>
//         <input
//           type="text"
//           value={timestamp}
//           onChange={(e) => setTimestamp(e.target.value)}
//           className="border rounded-md py-1 px-2"
//           placeholder="Timestamp"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//       >
//         {buttonText}
//       </button>
//     </form>
//   );
// };

// export default ContractForm;
