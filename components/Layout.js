export default function Layout({ children }) {
    return (
      <div>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/projects">Projects</a> | <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Your Name</footer>
      </div>
    );
  }
  