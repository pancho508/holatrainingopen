import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
        <p>
          A starter template with multiple sections to build from.
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className="App-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="App-hero">
        <h2>Build Something Amazing 🚀</h2>
        <p>This is your hero section with a catchy tagline and call-to-action.</p>
        <button>Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" className="App-section">
        <h2>About</h2>
        <p>
          This section describes what your app is about. You can expand with more
          text, images, or even embed videos.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="App-section">
        <h2>Features</h2>
        <ul>
          <li>⚡ Fast and responsive</li>
          <li>🎨 Modern UI</li>
          <li>🔒 Secure and scalable</li>
          <li>📱 Mobile-friendly</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="App-section">
        <h2>Gallery</h2>
        <div className="App-gallery">
          <img src="https://via.placeholder.com/150" alt="sample1" />
          <img src="https://via.placeholder.com/150" alt="sample2" />
          <img src="https://via.placeholder.com/150" alt="sample3" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="App-section">
        <h2>FAQ</h2>
        <details>
          <summary>What is this app?</summary>
          <p>This is a React starter template with multiple sections.</p>
        </details>
        <details>
          <summary>How do I customize it?</summary>
          <p>Edit the components in <code>App.js</code> and add new ones in the <code>src</code> folder.</p>
        </details>
      </section>

      {/* Contact Section */}
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <form>
          <label>Name: <input type="text" name="name" /></label>
          <label>Email: <input type="email" name="email" /></label>
          <label>Message: <textarea name="message"></textarea></label>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
