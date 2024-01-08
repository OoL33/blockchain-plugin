import React from 'react';

const ContractForm = () => {
  const [authorAddress, setAuthorAddress] = React.useState('');
  const [authorPrivateKey, setAuthorPrivateKey] = React.useState('');
  const [authorName, setAuthorName] = React.useState('');
  const [contentHash, setContentHash] = React.useState('');
  const [timestamp, setTimestamp] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, interact with smart contracts or blockchain here
    console.log('Form submitted');
    console.log({
      authorAddress,
      authorPrivateKey,
      authorName,
      contentHash,
      timestamp,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl mb-4">Content Hash Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="authorAddress">Author Address</label>
            <input
              type="text"
              id="authorAddress"
              value={authorAddress}
              onChange={(e) => setAuthorAddress(e.target.value)}
              className="border rounded-md py-1 px-2"
              placeholder="Author Address"
              required
            />
          </div>
              <div className="flex flex-col">
                <label htmlFor="authorPrivateKey">Author Private Key</label>
                <input
                  type="password"
                  id="authorPrivateKey"
                  value={authorPrivateKey}
                  onChange={(e) => setAuthorPrivateKey(e.target.value)}
                  className="border rounded-md py-1 px-2"
                  placeholder="Author Private Key"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="authorName">Author Name</label>
                <input
                  type="text"
                  id="authorName"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="border rounded-md py-1 px-2"
                  placeholder="Author Name"
                  required
                />
              </div>
          <div className="flex flex-col">
            <label htmlFor="contentHash">Content Hash</label>
            <input
              type="text"
              id="contentHash"
              value={contentHash}
              onChange={(e) => setContentHash(e.target.value)}
              className="border rounded-md py-1 px-2"
              placeholder="Content Hash"
              required
            />
          </div>
            <div className="flex flex-col">
              <label htmlFor="timestamp">Timestamp</label>
              <input
                type="text"
                id="timestamp"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                className="border rounded-md py-1 px-2"
                placeholder="Timestamp"
                required
              />
            </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          > Generate Contract
          </button>
        </form>
        <p className="mt-4">
        </p>
      </div>
    </div>
  );
};

export default ContractForm;
