import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CounselorDashboard() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [messageTo, setMessageTo] = useState("all");
  const [messageText, setMessageText] = useState("");
  const upcomingScrollRef = useRef(null);
  const clientsScrollRef = useRef(null);

  // Sample notifications
  const notifications = [
    {
      id: 1,
      text: "hello abebe, here is your session link join and build a healthy relationship. https://www.figma.com/design/...",
    },
    {
      id: 2,
      text: "New Session Booked: Client Melos has scheduled a session for April 6 at 2:00 PM.",
    },
    {
      id: 3,
      text: "You have a session with Counselor Helen tomorrow at 10:00 AM.",
    },
    {
      id: 4,
      text: "lorem ipsum",
    },
    {
      id: 5,
      text: "hello , counselor you have registered successfully!!",
    },

  ];

  // Sample clients for selection and display
  const clients = [
    "Abebe Kebede",
    "Melos Werkuk",
    "Helen Tesfaye",
    "Sara Alemu",
    "Daniel Bekele",
     "Daniel Bekele",
      "Daniel Bekele",
       "Daniel Bekele",
        "Daniel Bekele",
  ];

  // Notification Bell component
  function NotificationBell({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="relative focus:outline-none"
        aria-label="Show notifications"
        title="Notifications"
      >
        <svg
          className="w-7 h-7 text-gray-700 hover:text-purple-700 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
    );
  }

  // Zoom Icon component (placeholder for zoom integration)
  function ZoomIcon() {
    return (
      <button
        onClick={() => alert("Zoom integration coming soon!")}
        className="relative focus:outline-none"
        aria-label="Zoom"
        title="Zoom"
      >
        <svg
          className="w-7 h-7 text-gray-700 hover:text-purple-700 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h7a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
          />
        </svg>
      </button>
    );
  }

  // User Icon component
  function UserIcon({ onClick }) {
    return (
      <img
        src="https://i.pravatar.cc/40"
        alt="User Profile"
        className="w-10 h-10 rounded-full border cursor-pointer hover:ring-2 hover:ring-purple-600 transition"
        onClick={onClick}
        title="Go to Register Counselor"
      />
    );
  }

  // Notification Card with message field and recipient select
  function NotificationCard({ show }) {
    if (!show) return null;

    // Handler for sending message (demo)
    function handleSend(e) {
      e.preventDefault();
      if (!messageText.trim()) {
        alert("Please enter a message.");
        return;
      }
      alert(
        `Message sent to ${
          messageTo === "all" ? "All Clients" : messageTo
        }:\n${messageText}`
      );
      setMessageText("");
      setMessageTo("all");
    }

    return (
      <div className="absolute right-8 top-16 w-96 bg-white rounded-xl shadow-lg p-5 z-50 border border-gray-200 flex flex-col">
        <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
          Notifications <span role="img" aria-label="bell">🔔</span>
        </h2>
        <div className="space-y-2 max-h-52 overflow-y-auto mb-4 pr-1">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="bg-gray-100 rounded p-2 text-sm break-words"
            >
              {note.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex flex-col gap-3">
          <select
            aria-label="Select message recipient"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={messageTo}
            onChange={(e) => setMessageTo(e.target.value)}
          >
            <option value="all">To All Clients</option>
            {clients.map((client, i) => (
              <option key={i} value={client}>
                {client}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Send message"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            aria-label="Send message"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    );
  }

  // Scroll container styles to hide scrollbar but allow scrolling + drag scroll support
  // We implement mouse drag scroll for better UX without scrollbar visible
  function useDragScroll(ref) {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let isDown = false;
      let startX;
      let scrollLeft;

      function onMouseDown(e) {
        isDown = true;
        el.classList.add("cursor-grabbing");
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
      }
      function onMouseLeave() {
        isDown = false;
        el.classList.remove("cursor-grabbing");
      }
      function onMouseUp() {
        isDown = false;
        el.classList.remove("cursor-grabbing");
      }
      function onMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        el.scrollLeft = scrollLeft - walk;
      }

      el.addEventListener("mousedown", onMouseDown);
      el.addEventListener("mouseleave", onMouseLeave);
      el.addEventListener("mouseup", onMouseUp);
      el.addEventListener("mousemove", onMouseMove);

      return () => {
        el.removeEventListener("mousedown", onMouseDown);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.removeEventListener("mouseup", onMouseUp);
        el.removeEventListener("mousemove", onMouseMove);
      };
    }, [ref]);
  }

  // Apply drag scroll to horizontal scroll containers
  useDragScroll(upcomingScrollRef);
  useDragScroll(clientsScrollRef);

  return (
    <div className="min-h-screen bg-gray-100 relative font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-50">
        {/* Left side - logo */}
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-2xl select-none cursor-default">
            C
          </div>
        </div>

        {/* Right side - nav items */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li
            className="cursor-pointer hover:text-purple-700 transition"
            onClick={() => alert("Your Posts clicked")}
            title="Your Posts"
          >
            Your Posts
          </li>
          
          <li>
            <NotificationBell
              onClick={() => setShowNotifications((s) => !s)}
            />
          </li>
          <li>
            <ZoomIcon />
          </li>
          <li>
            <UserIcon onClick={() => navigate("/register/counselor")} />
          </li>
          <li
            className="cursor-pointer hover:text-purple-700 transition"
            onClick={() => alert("Logout clicked")}
            title="Logout"
          >
            Logout
          </li>
        </ul>

        <NotificationCard show={showNotifications} />
      </nav>

      {/* Main Dashboard Box */}
      <main className="max-w-[1280px] mx-auto mt-12 bg-purple-100 rounded-xl p-10 shadow-lg min-h-[600px]">
        {/* Welcome + Job Application side by side */}
        <section className="flex flex-row md:flex-row items-center justify-evenly gap-6 mb-8">
          <h1 className="text-3xl font-bold text-purple-800 whitespace-nowrap">
            Welcome Abebe, Thank you for being here!
          </h1>
          <button
            onClick={() => navigate("/register/counselor")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition whitespace-nowrap"
            aria-label="Job Application"
          >
          complete your profile
          </button>
        </section>

        {/* <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Your work supports healthier relationships every day.
        </p> */}

        {/* Upcoming Sessions - horizontal scroll without scrollbar */}
        <section className="mb-12 mt-5">
          <h2 className="text-1xl font-semibold text-center mb-4">
            UPCOMING SESSIONS
          </h2>
          <div
            ref={upcomingScrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar cursor-grab"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {[
              "Pre-Marital Guidance Session",
              "Conflict Resolution",
              "Conflict Resolution",
              "Family Counseling",
              "Stress Management",
            ].map((title, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white rounded-lg p-5 border flex flex-col justify-center text-center shadow-sm select-none"
              >
                <div className="font-semibold mb-2 ">{title}</div>
                <div className="text-gray-600">Date: 12/03/2018</div>
                <div className="text-gray-600">Time: 2:00pm LT</div>
                <div className="text-gray-600">Client: MELOS WERKUK</div>
              </div>
            ))}
          </div>
        </section>

        {/* Your Clients - horizontal scroll without scrollbar */}
        <section>
          <h2 className="text-xl font-semibold text-center mb-4 text-zinc-700">YOUR CLIENTS</h2>
          <div
            ref={clientsScrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar cursor-grab"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-lg p-4 w-32 border shadow-sm flex-shrink-0 select-none"
                title={client}
              >
                <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </div>
                <span className="text-sm font-medium truncate max-w-full">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Tailwind custom styles for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
