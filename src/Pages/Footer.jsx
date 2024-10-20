export default function Footer() {
    const date = new Date()
    return (
        <footer className="bg-[#252525] text-center text-[#AAAAAA] p-4 fixed bottom-0 w-full">
            <p>&copy; {date.getFullYear()} #VANLIFE</p>
        </footer>
    )
}