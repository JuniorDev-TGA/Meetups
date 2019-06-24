using System;
using System.Linq;

public class StudentController : Controller
{
    private readonly DbContext _dbContext;

    public StudentController(DbContext dbContext) {
        _dbContext = dbContext;
    }

    [HttpGet]
    public List<Student> GetStudentsInClass(int classId) {

        var headers = Request.Headers.ToDictionary(a => a.Key, a => string.Join(";", a.Value));

        if (!headers.ContainsKey("TOKEN"))
        {
            throw new Exception("Token not provided");
        }

        if (headers["TOKEN"] != "1234") 
        {
            throw new Exception("Token value is invalid");
        }

        if (classId <= 0)
        {
            throw new Exception("Incorrect class id");
        }

        var students = _dbContext
            .Students
            .Where(s => s.classId == classId)
            .ToList();
        
        return students;
    }

    [HttpPost]
    public void AddStudentsToClass(int classId, [FromBody] Student student) {

        var headers = Request.Headers.ToDictionary(a => a.Key, a => string.Join(";", a.Value));

        if (!headers.ContainsKey("TOKEN"))
        {
            throw new Exception("Token not provided");
        }

        if (headers["TOKEN"] != "1234") 
        {
            throw new Exception("Token value is invalid");
        }

        if (classId <= 0)
        {
            throw new Exception("Incorrect class id");
        }

        if (student == null) 
        {
            throw new Exception("Student is invalid");
        }

        var targetClass = _dbContext
            .Classes
            .FirstOrDefault(c => c.Id == classId);

        if (targetClass != null) 
        {
            targetClass.Students.Add(student);
            _dbContext.SaveChanges();
        }
    }
}