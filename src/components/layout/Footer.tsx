export default function Footer() {
  return (
    <footer className="py-4 px-4 md:px-6 mt-auto border-t border-border/40">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nivora. All rights reserved.</p>
      </div>
    </footer>
  );
}
