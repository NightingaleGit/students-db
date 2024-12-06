using StudentsDb.Logic;

namespace StudentsDb.Services;

public class InMemoryStudentsRepository : IStudentsRepository
{
    private readonly List<Student> _students = [
        new(1, "Ivan", "Ivanov"),
        new(2, "Petrov", "Petrov"),
        new(3, "Gosho", "Gosho"),
    ];

    public IEnumerable<Student> GetStudents()
    {
        return _students;
    }

    public void CreateStudent(string requestName, string requestSurname)
    {
        var index = _students.Max(student => student.Id) + 1;
        
        _students.Add(new Student(index, requestName, requestSurname));
    }
}