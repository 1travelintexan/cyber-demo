import Navbar from "../components/Navbar";
export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="profile-page">
        <h1>Build Your Profile</h1>
        <p>The more you share, the better we can guide you.</p>
        <section id="progess-container">
          <div id="progess-bar"></div>
          <p>Profile 40% complete</p>
        </section>
        <div className="user-section">
          <div id="user-image">
            <h1>R</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
