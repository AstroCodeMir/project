import { useState } from "react";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`You said: "${message}" 🐾`);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white shadow-xl rounded-lg w-72 border border-amber-200">
          <div className="bg-amber-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <span>Happy Tails Chat 💬</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-amber-200"
            >
              ✖️
            </button>
          </div>
          <div className="p-3 text-sm text-gray-700">
            Hi there! How can we help today?
          </div>
          <form onSubmit={handleSend} className="p-3 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="border border-gray-300 rounded-l-lg px-2 py-1 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-3 py-1 rounded-r-lg hover:bg-amber-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-amber-600 text-white rounded-full p-4 shadow-lg hover:bg-amber-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}
