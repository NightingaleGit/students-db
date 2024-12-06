using StudentsDb.Logic;
using StudentsDb.Services;

namespace StudentsDb.Host.Routes;

public static class Students
{
    public static void RegisterStudentsRoutes(this WebApplication app)
    {
        app.MapGet("/students", GetStudents).Produces<GetStudentsResponse>();
        app.MapPost("/students", CreateStudent);
    }

    private static IResult GetStudents(IStudentsService service)
    {
        var students = service.GetStudents();
        var response = new GetStudentsResponse()
        {
            Students = students
        };
        
        return Results.Ok(response);
    }
    
    private static IResult CreateStudent(CreateStudentRequest request, IStudentsService service)
    {
        service.CreateStudent(request.Name, request.Surname);
        
        return Results.Ok();
    }
}

public class CreateStudentRequest
{
    public string Name { get; set; }
    public string Surname { get; set; }
}

public class GetStudentsResponse
{
    public IEnumerable<Student> Students { get; set; }
}