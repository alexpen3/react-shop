function Footer() {
  return (
    <footer className="page-footer">
      <div className="container-footer">
        © {new Date().getFullYear()} Copyright By{" "}
        <a href="https://github.com/alexpen3?tab=repositories">Alex.Pen</a>
      </div>
    </footer>
  );
}

export { Footer };
