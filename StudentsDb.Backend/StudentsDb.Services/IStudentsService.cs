using StudentsDb.Logic;

namespace StudentsDb.Services;

public interface IStudentsService
{
    IEnumerable<Student> GetStudents();
    void CreateStudent(string requestName, string requestSurname);
}