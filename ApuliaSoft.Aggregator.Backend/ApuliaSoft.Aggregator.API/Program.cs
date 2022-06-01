using ApuliaSoft.Aggregator.BLL.Interfaces;
using ApuliaSoft.Aggregator.BLL.Services;
using ApuliaSoft.Aggregator.DAL.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DI Services.
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();

// DB mocked on hdd file.
builder.Services.AddDbContextPool<AggregatorContext>(options =>
{
    options.UseSqlite("Data source=./DbFiles/aggregator.db");
});

// CORS config added for local testing.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin(); // FOR LOCAL TESTING
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();