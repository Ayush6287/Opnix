export default function Dashboard() {
  return (
    <div>
      <h1>Welcome — You are logged in ✅</h1>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}