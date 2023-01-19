const Footer = () => {
  const today = new Date()
  return (
    <footer className="Footer">
      <p>Copyright &copy; {today.getFullYear()} Jomel Bautista</p>
    </footer>
  )
}

export default Footer
