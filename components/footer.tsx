export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">© {currentYear} Zhou Da. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
