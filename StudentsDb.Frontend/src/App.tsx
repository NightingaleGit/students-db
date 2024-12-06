import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StudentsForm from "./StudentsForm";
import AddStudentForm from "./AddStudentForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex size-full items-center justify-center bg-slate-500">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-center underline">
            Students DB
          </h1>
          <AddStudentForm />
          <div className="flex flex-col gap-1">
            <StudentsForm />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
