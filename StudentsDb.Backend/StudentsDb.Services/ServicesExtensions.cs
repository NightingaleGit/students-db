using Microsoft.Extensions.DependencyInjection;

namespace StudentsDb.Services;

public static class ServicesExtensions
{
    public static void AddServicesLayerDependencies(this IServiceCollection services)
    {
        services.AddTransient<IStudentsService, StudentsService>();
        services.AddSingleton<IStudentsRepository, InMemoryStudentsRepository>();
    }
}