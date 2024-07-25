import NotesProvider from "@/context/NotesContext";
import NotesPage from "@/context/NotesPage";

export default function Home() {
  return (
    <div>
      <NotesProvider>
        <NotesPage />
      </NotesProvider>
    </div>
  );
}
