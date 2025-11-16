export default function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>© {new Date().getFullYear()} Abhishek Dangi. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }