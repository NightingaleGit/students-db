using StudentsDb.Logic;

namespace StudentsDb.Services;

public interface IStudentsRepository
{
    IEnumerable<Student> GetStudents();
    void CreateStudent(string requestName, string requestSurname);
}