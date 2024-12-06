import { useQuery } from "@tanstack/react-query";

type IGetStudentsResponce = {
  students: IStudent[];
};

type IStudent = {
  id: number;
  name: string;
  surname: string;
};

function StudentsForm() {
  const { isPending, data } = useQuery<IGetStudentsResponce>({
    queryKey: ["students"],
    queryFn: () =>
      fetch("http://localhost:5188/students").then((res) => res.json()),
  });

  return (
    <div className="h-auto min-h-fit w-full bg-slate-400 overflow-hidden rounded-lg p-1">
      {isPending ? (
        <div>Loading...</div>
      ) : data == null ? (
        <div>Error: Empty response</div>
      ) : (
        <div className="size-full overflow-y-auto">
          <table className="grid h-auto gap-1">
            {data.students.map((student) => (
              <StudentsListItem student={student} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

function StudentsListItem(props: { student: IStudent }) {
  return (
    <tr className="flex hover:bg-slate-500 justify-center">
      <span className="text-center">
        {props.student.name} {props.student.surname}
      </span>
    </tr>
  );
}

export default StudentsForm;
