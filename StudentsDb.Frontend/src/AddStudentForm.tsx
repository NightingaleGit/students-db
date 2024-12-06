import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type CreateStudentRequest = {
  name: string;
  surname: string;
};

function AddStudentForm() {
  const [name, setName] = useState<string | undefined>();
  const [surname, setSurName] = useState<string | undefined>();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (request: CreateStudentRequest) =>
      fetch("http://localhost:5188/students", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["students"], exact: false });
    },
  });

  return (
    <div className="h-auto grid grid-rows-3 gap-2 grid-cols-[auto,1fr] min-h-fit w-full bg-slate-400 overflow-hidden rounded-lg p-1">
      <span>Name:</span>
      <input
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <span>Surname:</span>
      <input
        defaultValue={surname}
        onChange={(e) => {
          setSurName(e.target.value);
        }}
      />
      <button
        className="bg-slate-600 rounded-lg hover:bg-slate-800 active:bg-slate-900 h-8 col-span-2"
        onClick={() => {
          if (name == "" || surname == "") {
            alert("Can't be empty!");
          }
          mutation.mutate({
            name: name ?? "",
            surname: surname ?? "",
          });
        }}
      >
        Create student
      </button>
    </div>
  );
}

export default AddStudentForm;
