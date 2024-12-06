using StudentsDb.Logic;

namespace StudentsDb.Services;

public class StudentsService : IStudentsService
{
    private readonly IStudentsRepository _studentsRepository;

    public StudentsService(IStudentsRepository studentsRepository)
    {
        _studentsRepository = studentsRepository;
    }

    public IEnumerable<Student> GetStudents()
    {
        return _studentsRepository.GetStudents();
    }

    public void CreateStudent(string requestName, string requestSurname)
    {
        _studentsRepository.CreateStudent(requestName, requestSurname);
    }
}