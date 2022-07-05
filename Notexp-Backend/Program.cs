using Microsoft.EntityFrameworkCore;
using Notexp_Backend.Data;
using Notexp_Backend.Services;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddDbContext<UserDataContext>(
    options => options.UseNpgsql(builder.Configuration.GetConnectionString("NotexpDB"))
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
